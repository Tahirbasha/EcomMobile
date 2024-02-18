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
                <View style={AccountStyles.accountOption}>
                    <MaterialIcons name="account-circle" size={28} color="#0967d2" />
                    <Text style={AccountStyles.accountOptionText}>Profile</Text>
                </View>
                <View style={AccountStyles.accountOption}>
                    <FontAwesome5 name="box" size={24} color="#0967d2" />
                    <Text style={AccountStyles.accountOptionText}>Your Orders</Text>
                </View>
                <View style={AccountStyles.accountOption}>
                    <MaterialCommunityIcons name="map-marker-radius-outline" size={28} color="#0967d2" />
                    <Text style={AccountStyles.accountOptionText}>Saved Address</Text>
                </View>
                <View style={AccountStyles.accountOption}>
                    <MaterialIcons name="settings" size={28} color="#0967d2" />
                    <Text style={AccountStyles.accountOptionText}>Settings</Text>
                </View>
                <View style={AccountStyles.accountOption}>
                    <AntDesign name="customerservice" size={28} color="#0967d2" />
                    <Text style={AccountStyles.accountOptionText}>Help</Text>
                </View>
            </View>
        </View>
    )
};

export default Account;
