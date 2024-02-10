import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";
import { homeScreenStyles } from "../styles/homeScreenStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "./Login";

const Tab = createBottomTabNavigator();
const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const handleLogout = () => {
    // Perform logout logic if needed
    // For simplicity, let's just navigate back to the Login screen
    navigation.navigate("Login");
  };

  useEffect(() => {
    getAuthToken();
  });
  const getAuthToken = async () => {
    const authToken = await AsyncStorage.getItem('Token');
  }
  return (
    <View style={homeScreenStyles.container}>
      <Text>Welcome to the Home Screen!</Text>
      <Button title="Logout" onPress={handleLogout} />
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Settings" component={LoginScreen} />
        </Tab.Navigator>
    </View>
  );
};


interface HomeScreenProps {
  navigation: any; // Use the correct type for navigation prop
}

export default HomeScreen;
