import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from './components/login';
import Homepage from "./components/home-page";
import { StatusBar, ScrollView, TouchableOpacity } from "react-native";
import { HeaderImage } from "./components/header-image";
import ProductDetails from "./components/product-details";

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomePage"
          component={Homepage}
          options={{ header: () => <HeaderImage page="Home"/> }}
        />
      </Stack.Navigator>
      <StatusBar
        translucent
        backgroundColor='transparent'
        // hidden 
        barStyle="dark-content" />
    </NavigationContainer>
  );
};

export default App;
