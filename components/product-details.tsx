import * as React from 'react';
import { Button, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useState, useEffect } from 'react';
import { getProductDetails } from '../apis/ecom-apis';
import { ProductDetailsState } from '../types/ecom-types';
import { product } from '../styles/product-styles';
import { AntDesign } from '@expo/vector-icons';
import Product from './product';

const ProductDetails = (props: { route: any }) => {
    const [productDetailsState, setProductDetails] = useState<ProductDetailsState>();

    const [isLoading, setLoadingStatus] = useState(false);
    const [productQty, setProductQty] = useState(1);

    useEffect(() => {
        setLoadingStatus(true);
        getProductDetailsById();
    }, [props]);

    const getProductDetailsById = async () => {
        const productDetailsData = await getProductDetails(props.route.params.productId);
        if (productDetailsData) {
            setProductDetails({ ...productDetailsState, productDetails: productDetailsData.productDetails, similarProducts: productDetailsData.similarProducts });
            setLoadingStatus(false);
        }
    }

    if (isLoading) {
        return <Text>Loading</Text>;
    } else if (productDetailsState && productDetailsState.productDetails) {
        const { productDetails } = productDetailsState;
        return (
            <ScrollView style={product.productDetailsContainer}>
                <View style={product.detailedProductContainer}>
                    <Image
                        source={{ uri: productDetails.imageUrl }}
                        style={product.detailedProductImg}
                    />
                </View>
                <View style={product.detailedProductNameAndCost}>
                    <Text style={product.detailedProductTitle}>{productDetails.title}</Text>
                    <Text style={product.detailedProductCost}>Rs {productDetails.price} /-</Text>
                </View>
                <View style={product.detailedProductRatingContainer}>
                    <View style={product.detailedProductRatings}>
                        <Text style={product.detailedProductRatingCount}>{productDetails.rating}</Text>
                        <Image
                            source={{ uri: 'https://assets.ccbp.in/frontend/react-js/star-img.png' }}
                            style={product.detailedProductRatingStar}
                        />
                    </View>
                    <Text style={product.detailedProductReviews}>{productDetails.totalReviews} Reviews</Text>
                </View>
                <Text style={product.detailedProductDescription}>{productDetails.description}</Text>
                <Text style={product.detailedProductAvailability}>Available: <Text style={product.detailedProductTextFade}>{productDetails.availability}</Text></Text>
                <Text style={product.detailedProductBrand}>Brand: <Text style={product.detailedProductTextFade}>{productDetails.brand}</Text></Text>
                <View style={product.addToCartContainer}>
                    <View style={product.cartControls}>
                        <Text><AntDesign name="minussquareo" size={24} color="#616e7c" /></Text>
                        <Text style={product.productQty}>{productQty}</Text>
                        <Text><AntDesign name="plussquareo" size={24} color="#616e7c" /></Text>
                    </View>
                    <TouchableOpacity style={product.addToCartBtn}>
                        <Text style={product.addToCartTitle}>ADD TO CART</Text>
                    </TouchableOpacity>
                </View>
                <View style={product.similarProducts}>
                    <Text style={product.similarProductsHeading}>Similar Products</Text>
                    {productDetailsState.similarProducts ?
                        productDetailsState.similarProducts.map((similarItem, index) => {
                            similarItem.description = '';
                            return <Product product={similarItem} key={similarItem.id}/>
                        }) :
                        null
                    }
                </View>
            </ScrollView>
        );
    }
};

export default ProductDetails;