import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator}  from "@react-navigation/native-stack";
import LoginScreen from './components/Login';
import HomeScreen from "./components/Home";
import { StatusBar } from "react-native";

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
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      <StatusBar backgroundColor={"#f3f2f5"} translucent={true} />
    </NavigationContainer>
  );
};

export default App;
