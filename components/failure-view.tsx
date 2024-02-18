import React from 'react';
import { Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { failure } from '../styles/failure-view';

const FailureView = () => {
    return (
        <View style={failure.failureView}>
            <AntDesign name="infocirlceo" size={30} color="black" />
            <Text style={failure.oops}>Oops..!</Text>
            <Text style={failure.failureMsg}>Something went wrong. Please try again later.</Text>
        </View>
    );
}

export default FailureView;