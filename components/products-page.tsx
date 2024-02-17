import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Products from "./products";
import ProductDetails from "./product-details";
import { Text } from "react-native";
import { HeaderImage } from "./header-image";

const ProductStack = createNativeStackNavigator();

const ProductPage = () => {

    return (
        <ProductStack.Navigator>
            <ProductStack.Screen
                name="ProductsList"
                component={Products}
                options={{ headerShown: false }}
                />
            <ProductStack.Screen
                name="ProductDetails"
                component={ProductDetails}
                options={{ headerShown: false }}
            />
        </ProductStack.Navigator>
    );
};

export default ProductPage;