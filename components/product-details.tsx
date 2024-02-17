import * as React from 'react';
import { ActivityIndicator, Button, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useState, useEffect, useCallback } from 'react';
import { getProductDetails } from '../apis/ecom-apis';
import { CartItem, ProductDetailedInfo, ProductDetailsState, rootState } from '../types/ecom-types';
import { product } from '../styles/product-styles';
import { AntDesign } from '@expo/vector-icons';
import Product from './product';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToCart } from '../store/reducer';

const ProductDetails = (props: { route: any, navigation: any }) => {

    const [productDetailsState, setProductDetails] = useState<ProductDetailsState>();
    const [isLoading, setLoadingStatus] = useState(false);
    const [productQty, setProductQty] = useState(1);
    const [addToCart, setAddToCartStatus] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        setLoadingStatus(true);
        getProductDetailsById();
        setProductQty(props.route.params.quantity || 1)
    }, [props]);

    const cartList = useSelector((state: rootState) => state.cartDetails)
    
    const getProductDetailsById = async () => {
        const productDetailsData = await getProductDetails(props.route.params.productId);
        if (productDetailsData) {
            setProductDetails({ ...productDetailsState, productDetails: productDetailsData.productDetails, similarProducts: productDetailsData.similarProducts });
            setLoadingStatus(false);
        }
    }
    const handleProductQtyChange = (quantity: number) => {
        if (quantity >= 1) {
            setProductQty(quantity);
        }
    }
    const handleAddProductToCart = async (productId: number) => {
        setAddToCartStatus(true);
        if (cartList) {
            const productIndex = cartList.findIndex(each => each.id === productId);
            if (productIndex > -1) {
                cartList[productIndex].quantity = productQty;
            } else if (productDetailsState) {
                const { productDetails } = productDetailsState;
                const selectedProduct = getProductIntoCart(productDetails);
                cartList.push(selectedProduct);
            }
            dispatch({ type: addProductToCart, data: cartList });
        } else if (productDetailsState) {
            const { productDetails } = productDetailsState;
            const selectedProduct = getProductIntoCart(productDetails);
            const initialCart: CartItem[] = [selectedProduct];
            dispatch({ type: addProductToCart, data: initialCart });
        }

        setTimeout(() => setAddToCartStatus(false), 300)

    }
    const getProductIntoCart = (product: ProductDetailedInfo) => {
        const selectedProduct: CartItem = {
            id: product.id,
            title: product.title,
            brand: product.brand,
            imageUrl: product.imageUrl,
            price: product.price,
            quantity: productQty
        };
        return selectedProduct;
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
                        <TouchableOpacity onPress={() => handleProductQtyChange(productQty - 1)}>
                            <AntDesign name="minussquareo" size={24} color="#616e7c" />
                        </TouchableOpacity>
                        <Text style={product.productQty}>{productQty}</Text>
                        <TouchableOpacity onPress={() => handleProductQtyChange(productQty + 1)}>
                            <AntDesign name="plussquareo" size={24} color="#616e7c" />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        style={product.addToCartBtn}
                        onPress={() => handleAddProductToCart(productDetails.id)}
                    >
                        {addToCart ?
                            <View style={product.addingToCart}>
                                <Text style={product.addToCartTitle} >ADDING</Text>
                                <ActivityIndicator color="#ffffff" />
                            </View>
                            :
                            <Text style={product.addToCartTitle}>
                                ADD TO CART
                            </Text>}
                    </TouchableOpacity>
                </View>
                <View style={product.similarProducts}>
                    <Text style={product.similarProductsHeading}>Similar Products</Text>
                    {productDetailsState.similarProducts ?
                        productDetailsState.similarProducts.map((similarItem, index) => {
                            similarItem.description = '';
                            return <Product product={similarItem} key={similarItem.id} />
                        }) :
                        null
                    }
                </View>
            </ScrollView>
        );
    }
};

export default ProductDetails;