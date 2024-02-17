import * as React from 'react';
import { useState, useEffect } from "react";
import { ProductState, ProductsPayload } from '../types/ecom-types';
import { getAllProducts } from '../apis/ecom-apis';
import { sortbyOptions } from '../constants/constants';
import { FlatList, Image, ScrollView, Text, View } from 'react-native';
import PrimeDeals from './prime-deals';
import { product } from '../styles/product-styles';
import Product from './product';

const Products = () => {

    const [productState, setProductState] = useState<ProductState>({ products: [], isLoading: false });
    const [payload, setProductsPayload] = useState<ProductsPayload>({
        activeOptionId: sortbyOptions[0].optionId,
        activeCategoryId: '',
        searchInput: '',
        activeRatingId: '',
    });

    useEffect(() => {
        setProductState({ ...productState, isLoading: true });
        getProducts();
    }, []);

    const getProducts = async () => {
        const products = await getAllProducts(payload);
        if (products) {
            setProductState({ products, isLoading: false });
        } else {
            setProductState({ ...productState, isLoading: false });
        }
    }
    if (productState.isLoading) {
        return <Text>Loading...</Text>;
    }
    return (
        <View style={{flex: 1}}>
            <PrimeDeals />
            <Text style={product.primeDealsHeading}>Products</Text>
            <View style={product.productContainer}>
                <FlatList
                    data={productState.products}
                    renderItem={(item) => {
                        return <Product product={item.item} key={item.index}/>
                    }}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </View>
    );
};

export default Products;