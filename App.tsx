import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from './components/login';
import Homepage from "./components/home-page";
import { StatusBar, ScrollView, TouchableOpacity } from "react-native";
import { HeaderImage } from "./components/header-image";

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    // <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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
            options={{ header: () => <HeaderImage /> }}
          />
        </Stack.Navigator>
        <StatusBar
          translucent
          backgroundColor='transparent'
          // hidden 
          barStyle="dark-content" />
      </NavigationContainer>
    // </ScrollView>
  );
};

export default App;
