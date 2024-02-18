import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { failure } from '../styles/failure-view';

const Loader = () => {
    return (
        <View style={failure.loader}>
            <ActivityIndicator size={'large'} color={'#3b82f6'} />
        </View>
    );
}

export default Loader;