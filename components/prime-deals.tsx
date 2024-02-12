import React, { useState, useEffect } from 'react';
import { getPrimeProducts } from '../apis/ecom-apis';
import { ProductState } from '../types/ecom-types';
import { FlatList, Text, View } from 'react-native';

const PrimeDeals = () => {
    const [primeDealsState, setPrimeDealsState] = useState<ProductState>({ products: [], isLoading: false });

    useEffect(() => {
        setPrimeDealsState({ ...primeDealsState, isLoading: true });
        getPrimeDeals();
    }, []);

    const getPrimeDeals = async () => {
        const primeProducts = await getPrimeProducts();
        console.log('Prime:', primeProducts);
        setPrimeDealsState({ products: primeProducts, isLoading: false });

    }

    if (primeDealsState.isLoading) {
        return <Text>Loading...</Text>;
    }
    console.log('primeDeals')
    return (
        <FlatList
            data={primeDealsState.products}
            renderItem={(item) => {
                return (
                    <View>
                        {item.item.title}
                    </View>
                );
            }}
            keyExtractor={(item, index) => index.toString()}
        />
    );
};

export default PrimeDeals;