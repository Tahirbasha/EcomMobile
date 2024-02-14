import React, { useState, useEffect } from 'react';
import { getPrimeProducts } from '../apis/ecom-apis';
import { ProductState } from '../types/ecom-types';
import { FlatList, Image, Text, View } from 'react-native';
import { product } from '../styles/product-styles';

const PrimeDeals = () => {
    const [primeDealsState, setPrimeDealsState] = useState<ProductState>({ products: [], isLoading: false });

    useEffect(() => {
        setPrimeDealsState({ ...primeDealsState, isLoading: true });
        getPrimeDeals();
    }, []);

    const getPrimeDeals = async () => {
        const primeProducts = await getPrimeProducts();
        if (primeProducts) {
            setPrimeDealsState({ products: primeProducts, isLoading: false });
        } else {
            setPrimeDealsState({ ...primeDealsState, isLoading: false });
        }

    }

    if (primeDealsState.isLoading) {
        return <Text>Loading...</Text>;
    }
    return (
        <View style={product.primeDealsContainer}>
            <Text style={product.primeDealsHeading}>Exclusive Prime Deals</Text>
            <FlatList
                data={primeDealsState.products}
                renderItem={(item) => {
                    return (
                        <View style={product.primeProductCard}>
                            <Image 
                                source={{uri: item.item.imageUrl}}
                                style={product.primeProductImg}
                            />
                            {/* <Text>{item.item.title}</Text> */}
                        </View>
                    );
                }}
                keyExtractor={(item, index) => item.id.toString()}
                horizontal={true}
            />
        </View>
    );
};

export default PrimeDeals;