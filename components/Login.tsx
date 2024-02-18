import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity, Image } from "react-native";
import { cursorColor, loginStyles } from "../styles/login-styles";
import { login } from "../apis/ecom-apis";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('abcd');
  const [errorMsg, setErrorMsg] = useState();

  const handleLogin = async () => {
    const userDetails = { username: 'rahul', password: 'rahul@2021' };
    const response = await login(userDetails);
    const data = await response.json();
    if (response.ok === true) {
      onSubmitSuccess(data.jwt_token);
      navigation.navigate("HomePage");
    } else {
      setErrorMsg(data.error_msg);
    }
  };``

  const onSubmitSuccess = async (jwtToken: string) => {
    await AsyncStorage.setItem("Token", jwtToken);
  };

  return (
    <View style={loginStyles.container}>
      <View style={loginStyles.logoContainer}>
        <Image
          source={{
            uri: "https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png",
          }}
          style={loginStyles.loginLogo}
        />
      </View>
      <Image
        source={{
          uri: "https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png",
        }}
        style={loginStyles.loginImg}
      />
      <View style={loginStyles.inputContainer}>
      <Text style={loginStyles.inputLabel}>USERNAME</Text>
      <TextInput
        cursorColor={cursorColor}
        style={loginStyles.input}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
    </View>
      <View style={loginStyles.inputContainer}>
      <Text style={loginStyles.inputLabel}>PASSWORD</Text>
        <TextInput
          cursorColor={cursorColor}
          style={loginStyles.input}
          placeholder="Password"
          value={password}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
        {errorMsg && <Text style={loginStyles.errorMsg}>{errorMsg}</Text>}
      </View>
      <TouchableOpacity
        style={loginStyles.customBtnContainer}
        onPress={handleLogin}
      >
        <Text style={loginStyles.customButton}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

interface LoginScreenProps {
  navigation: any;
}
export default LoginScreen;
