import React, { useEffect } from "react";
import { View, Text, Button, ScrollView, Image, TouchableOpacity } from "react-native";
import { homeScreenStyles } from "../styles/homeScreenStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import Home from "./home";
import Products from "./products";
import Cart from "./cart";

const Tab = createBottomTabNavigator();

const HomePage = (props: {navigation: any}) => {

  const handleLogout = () => {
    props.navigation.navigate("Login");
  };

  useEffect(() => {
    getAuthToken();
  });
  const getAuthToken = async () => {
    const authToken = await AsyncStorage.getItem('Token');
  }

  // const Cart = () => <Text>Cart</Text>;
  const Account = () => <Text>Account</Text>;
  
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
        component={Products} 
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
