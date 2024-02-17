import React from "react";
import { Text, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { AccountStyles } from "../styles/account-details";

const Account = () => {

    return(
        <View style={AccountStyles.accountContainer}>
            <MaterialIcons name="account-circle" size={24} color="black" />
            <View style={AccountStyles.accountSettings}>
                <Text>Tahirbaaha</Text>
                <Text>Your Orders</Text>
                <Text>Saved Address</Text>
                <Text><AntDesign name="customerservice" size={24} color="black" />Help</Text>
            </View>
        </View>
    )
};

export default Account;
