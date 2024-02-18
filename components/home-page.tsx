import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import Home from "./home";
import Cart from "./cart";
import ProductPage from "./products-page";
import Account from "./account-details";
import { useSelector } from "react-redux";
import { rootState } from "../types/ecom-types";
import CustomCart from "./custom-cart";

const Tab = createBottomTabNavigator();

const HomePage = () => {

  const cartItems = useSelector((state: rootState) => state.cartDetails);

  return (
    <Tab.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerShown: false
        }}
    >
      <Tab.Screen 
        name="Home" 
        component={Home}  
        options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            )
          }}
      />
      <Tab.Screen 
        name="Products" 
        component={ProductPage} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="storefront" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen 
        name="Cart" 
        component={Cart} 
        initialParams={{cartItems}}
        options={{
          tabBarIcon: ({ color, size }) => (
            <CustomCart
              color={color}
              size={size}
              cartItemsCount={cartItems.length}
            />
          )
        }}
      />
      <Tab.Screen 
        name="Account" 
        component={Account} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default HomePage;
