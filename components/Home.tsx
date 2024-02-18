import * as React from 'react';
import { Text, SafeAreaView, Image, View, Button } from 'react-native';
import { homeScreenStyles } from '../styles/home-screen-styles';


const Home = (props: {navigation: any}) => {
    return (
        <SafeAreaView style={homeScreenStyles.homeContainer}>
            <View style={homeScreenStyles.homeContent}>
            <Text style={homeScreenStyles.homeHeading}>Clothes That Get YOU Noticed</Text>
            <Image
                source={{ uri: 'https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png' }}
                style={homeScreenStyles.landingPageImg}
            />
            <Text style={homeScreenStyles.homeDescription}>
                Fashion is part of the daily air and it does not quite help that it
                changes all the time. Clothes have always been a marker of the era
                and we are in a revolution. Your fashion makes you been seen and
                heard that way you are. So, celebrate the seasons new and exciting
                fashion in your own way.
            </Text>
            <Button 
                title='Shop Now' 
                onPress={() => props.navigation.navigate('Products')}
            />
            </View>
        </SafeAreaView>
    )
};

export default Home;