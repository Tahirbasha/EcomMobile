import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import * as React from 'react';
import { Text } from 'react-native';

const Navigation: React.FC<{pathName: string}> =(props: {pathName: string}) => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>();
    navigation.navigate(props.pathName);
    return <Text>Navigation</Text>;
};

export default Navigation;
