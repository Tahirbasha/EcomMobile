import * as React from 'react';
import { useState, useEffect } from "react";
import { ProductState, ProductsPayload } from '../types/ecom-types';
import { getAllProducts } from '../apis/ecom-apis';
import { sortbyOptions } from '../constants/constants';
import { FlatList, ScrollView, Text, View } from 'react-native';
import PrimeDeals from './prime-deals';

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
        <View>
            <PrimeDeals />
            {/* <FlatList
                data={productState.products}
                renderItem={(item) => {
                    return (
                        <View>
                            <Text>{item.item.title}</Text>
                        </View>
                    )
                }}
                keyExtractor={(item, index) => index.toString()}
            /> */}
        </View>
    );
};

export default Products;