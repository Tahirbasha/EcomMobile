import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { product } from "../styles/product-styles";
import { ProductItem } from "../types/ecom-types";
import { useNavigation } from "@react-navigation/native";

const Product = (props: { product: ProductItem, }) => {

    const navigation = useNavigation<any>();

    const handleProductClick = (product: ProductItem) => {
        navigation.navigate('ProductDetails', { productId: product.id });
    }
    return (
        <TouchableOpacity onPress={() => handleProductClick(props.product)}>
            <View style={product.productCard}>
                <Image
                    source={{ uri: props.product.imageUrl }}
                    style={product.productImg}
                />
                <View style={product.productDetails}>
                    <Text numberOfLines={undefined} style={product.productTitle}>{props.product.title}</Text>
                    <Text style={product.productBrand}>by {props.product.brand}</Text>
                    <Text style={product.productPrice}>₹ {props.product.price}/-</Text>
                    <View style={product.ratingContainer}>
                        <Text style={product.productRating}>
                            {props.product.rating}
                        </Text>
                        <Image
                            source={{ uri: 'https://assets.ccbp.in/frontend/react-js/star-img.png' }}
                            style={product.ratingStar}
                        />
                    </View>
                    <Text>{props.product.description}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default Product;