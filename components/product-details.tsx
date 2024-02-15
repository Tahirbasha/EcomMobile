import * as React from 'react';
import { Image, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import { getProductDetails } from '../apis/ecom-apis';
import {  ProductDetailsState } from '../types/ecom-types';
import { product } from '../styles/product-styles';


const ProductDetails = (props: { route: any }) => {
    const [productDetailsState, setProductDetails] = useState<ProductDetailsState>();

    const [isLoading, setLoadingStatus] = useState(false);

    useEffect(() => {
        setLoadingStatus(true);
        getProductDetailsById();
    }, []);

    const getProductDetailsById = async () => {
        const productDetailsData = await getProductDetails(props.route.params.productId);
        if (productDetailsData) {
            setProductDetails({...productDetailsState, productDetails: productDetailsData.productDetails});
            setLoadingStatus(false);
        }
    }
    
    if (isLoading) {
        return <Text>Loading</Text>;
    } else if (productDetailsState && productDetailsState.productDetails) {
        const { productDetails } = productDetailsState;
        return (
            <View>
                <Image
                    source={{ uri: productDetails.imageUrl}}
                    style={product.detailedProductImg}
                />
            </View>
        );
    }
};

export default ProductDetails;