import * as React from 'react';
import { useState, useEffect, useCallback } from "react";
import { ProductState, ProductsPayload } from '../types/ecom-types';
import { getAllProducts } from '../apis/ecom-apis';
import { categoryOptions, sortbyOptions } from '../constants/constants';
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import PrimeDeals from './prime-deals';
import { product } from '../styles/product-styles';
import Product from './product';
import Loader from './loader';
import FailureView from './failure-view';
import { useFocusEffect } from '@react-navigation/native';
import { Dropdown } from 'react-native-element-dropdown';
import { Ionicons } from '@expo/vector-icons';

const noProductFound = require('../assets/no-products-found.jpg');

const Products = () => {
    const [productState, setProductState] = useState<ProductState>({ products: [], isLoading: false, isFetchFailed: false, searchBy: '', searchByValue: '' });
    const [payload, setProductsPayload] = useState<ProductsPayload>({
        activeOptionId: sortbyOptions[0].value,
        activeCategoryId: '',
        searchInput: '',
        activeRatingId: '',
    });
    useEffect(() => {
        setProductState({ ...productState, isLoading: true });
    }, []);

    useFocusEffect(
        useCallback(() => {
            setProductsPayload({ ...payload, activeCategoryId: '', activeOptionId: sortbyOptions[0].value });
            getProducts(payload);
        }, [])
    );

    const getProducts = async (payload: ProductsPayload) => {
        const products = await getAllProducts(payload);
        if (products) {
            setProductState({ ...productState, products, isLoading: false, isFetchFailed: false });
        } else if (!products) {
            setProductState({ ...productState, isLoading: false, isFetchFailed: true });
        }
    }
    const handleCategorySelect = (activeCategoryId: string) => {
        setProductsPayload({ ...payload, activeCategoryId });
        payload.activeCategoryId = activeCategoryId;
        getProducts(payload);
    }
    const handleSelectSortBy = (sortBy: string) => {
        setProductsPayload({ ...payload, activeOptionId: sortBy });
        payload.activeOptionId = sortBy;
        getProducts(payload);
    }
    const handleInputChange = (searchByValue: string) => {
        setProductState({ ...productState, searchByValue });
    }
    const filteredProducts = productState.products.filter(e => e.title.indexOf(productState.searchBy) !== -1);
    if (productState.isLoading) {
        return <Loader />;
    } else if (productState.isFetchFailed) {
        return <FailureView />;
    } else {
        return (
            <View style={product.productsMainContainer}>
                <PrimeDeals />
                <Text style={product.primeDealsHeading}>All Products</Text>
                <View style={product.categoryContainer}>
                    <TouchableOpacity onPress={() => handleCategorySelect('')}>
                        <Text
                            style={[product.categoryItem,
                            payload.activeCategoryId == '' ? product.selectedCategory : product.category]}
                        >All
                        </Text>
                    </TouchableOpacity>
                    {categoryOptions.map(each => {
                        return (
                            <TouchableOpacity
                                onPress={() => handleCategorySelect(each.categoryId)}
                                key={each.categoryId}
                            >
                                <Text
                                    style={[product.categoryItem,
                                    payload.activeCategoryId == each.categoryId ? product.selectedCategory : product.category]}
                                >
                                    {each.name}
                                </Text>
                            </TouchableOpacity>
                        )
                    })}
                </View>
                <View style={product.filterContainer}>
                    <View style={product.inputContainer}>
                        <TextInput
                            placeholder='Search'
                            onChangeText={handleInputChange}
                            style={product.inputBar}
                            value={productState.searchByValue}
                            cursorColor={'#dfe2eb'}
                        />
                        {productState.searchByValue.length > 0 && (
                            <TouchableOpacity style={product.clearButton} onPress={() => setProductState({...productState, searchByValue: '', searchBy: ''})}>
                                <Ionicons name="close-circle" size={20} color="gray" />
                            </TouchableOpacity>
                        )}
                            <TouchableOpacity style={product.clearButton} onPress={() => setProductState({...productState, searchBy: productState.searchByValue})}>
                                <Ionicons name="search" size={20} color="gray" />
                            </TouchableOpacity>
                    </View>
                    <Dropdown
                        style={product.dropdown}
                        data={sortbyOptions}
                        maxHeight={200}
                        labelField="label"
                        valueField="value"
                        value={sortbyOptions.find(e => e.value == payload.activeOptionId)}
                        onChange={item => handleSelectSortBy(item.value)}
                    />
                </View>
                <View style={product.productContainer}>
                    {filteredProducts.length ? 
                    <FlatList
                        data={filteredProducts}
                        renderItem={(item) => {
                            return <Product product={item.item} key={item.index} />
                        }}
                        keyExtractor={(item, index) => index.toString()}
                    /> :
                    <View style={product.noProductsContainer}>
                        <Image source={noProductFound}/>
                        <Text style={product.noProductsFound}>No Products Found.</Text>
                    </View>
                    }
                </View>
            </View>
        );
    }
};

export default Products;