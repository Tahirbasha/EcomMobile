import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from './components/login';
import Homepage from "./components/home-page";
import { StatusBar } from "react-native";
import { HeaderImage } from "./components/header-image";
import { Provider } from 'react-redux';
import store from "./store/store";

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <Provider store={store}>
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
            options={{ header: () => <HeaderImage page="Home" /> }}
          />
        </Stack.Navigator>
        <StatusBar
          translucent
          backgroundColor='transparent'
          // hidden 
          barStyle="dark-content" />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
