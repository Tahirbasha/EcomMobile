import React from "react";
import { Text, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { AccountStyles } from "../styles/account-details";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Account = () => {

    return (
        <View style={AccountStyles.accountContainer}>
            <View style={AccountStyles.profilePicContainer}>
                <MaterialIcons name="account-circle" size={150} color="gray" />
                <Text style={{ fontWeight: '500' }}>Tahirbasha</Text>
            </View>
            <View style={AccountStyles.accountSettings}>
                <Text style={AccountStyles.accountOption}>
                    <MaterialIcons name="account-circle" size={28} color="#0967d2" /> Profile</Text>
                <Text style={AccountStyles.accountOption}>
                    <FontAwesome5 name="box" size={24} color="#0967d2" /> Your Orders</Text>
                <Text style={AccountStyles.accountOption}>
                    <MaterialCommunityIcons name="map-marker-radius-outline" size={28} color="#0967d2" /> Saved Address</Text>
                <Text style={AccountStyles.accountOption}>
                    <MaterialIcons name="settings" size={28} color="#0967d2" /> Settings</Text>
                <Text style={AccountStyles.accountOption}>
                    <AntDesign name="customerservice" size={28} color="#0967d2" /> Help</Text>
            </View>
        </View>
    )
};

export default Account;
