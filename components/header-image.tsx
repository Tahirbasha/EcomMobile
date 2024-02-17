import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import { homeScreenStyles } from "../styles/home-screen-styles";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export const HeaderImage = (props: {page: string}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <View style={homeScreenStyles.homeHeader}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        {props.page === 'Home' ? <Image
          source={{ uri: 'https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png' }}
          style={{ width: 140, height: 33 }}
        /> : <Text>Continue Your Shopping</Text>}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
      >
        <Ionicons name="log-out-outline" size={28} style={{ marginRight: 10 }} />
      </TouchableOpacity>
    </View>
  );
}