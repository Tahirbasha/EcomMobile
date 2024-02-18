import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { product } from "../styles/product-styles";
import { CartItem } from "../types/ecom-types";
import { useNavigation } from "@react-navigation/native";

const CartItems = (props: { product: CartItem, handleRemoveProduct: (productId: number) => void }) => {

   
    const navigation = useNavigation<any>();

    const handleProductClick = (product: CartItem) => {
        navigation.navigate('ProductDetails', { productId: product.id, quantity: product.quantity });
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
                    <Text >Qty: {props.product.quantity}</Text>
                    <View style={product.priceAndRemove}>
                        <Text style={product.productPrice}>₹ {props.product.price}/-</Text>
                        <TouchableOpacity onPress={() => props.handleRemoveProduct(props.product.id)}>
                            <Text style={product.removeTag}>Remove</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default CartItems;