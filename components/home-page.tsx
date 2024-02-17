import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import Home from "./home";
import Cart from "./cart";
import ProductPage from "./products-page";
import Account from "./account-details";

const Tab = createBottomTabNavigator();

const HomePage = () => {

  
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
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart" color={color} size={size} />
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
