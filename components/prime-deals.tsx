import React, { useState, useEffect } from 'react';
import { getPrimeProducts } from '../apis/ecom-apis';
import { ProductItem } from '../types/ecom-types';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { product } from '../styles/product-styles';
import { useNavigation } from '@react-navigation/native';

const PrimeDeals = () => {
    const navigation = useNavigation<any>();
    const [primeDealsState, setPrimeDealsState] = useState<{ primeProducts: ProductItem[]}>({ primeProducts: [] });

    useEffect(() => {
        setPrimeDealsState({ ...primeDealsState});
        getPrimeDeals();
    }, []);

    const getPrimeDeals = async () => {
        const primeProducts = await getPrimeProducts();
        if (primeProducts) {
            setPrimeDealsState({ primeProducts});
        } else {
            setPrimeDealsState({ ...primeDealsState,});
        }

    }
    const handleProductClick = (productId: number) => {
        navigation.navigate('ProductDetails', { productId });
    }
    return (
        <View style={product.primeDealsContainer}>
            <Text style={product.primeDealsHeading}>Exclusive Prime Deals</Text>
            <FlatList
                data={primeDealsState.primeProducts}
                renderItem={(item) => {
                    return (
                        <TouchableOpacity onPress={() => handleProductClick(item.item.id)}>
                            <View style={product.primeProductCard}>
                                <Image
                                    source={{ uri: item.item.imageUrl }}
                                    style={product.primeProductImg}
                                />
                            </View>
                        </TouchableOpacity>
                    );
                }}
                keyExtractor={(item, index) => item.id.toString()}
                horizontal={true}
            />
        </View>
    );
};

export default PrimeDeals;