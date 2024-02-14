import * as React from 'react'
import { Button, Image, View } from 'react-native';
import cartStyles from '../styles/cart-styles';


const Cart = (props: {navigation:any}) => {

    return (
        <View style={cartStyles.cartContainer}>
            <Image
                source={{ uri: 'https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png' }}
                style={cartStyles.emptyCartImg}
            />
             <Button 
                title='Shop Now' 
                onPress={() => props.navigation.navigate('Products')}
            />
        </View>
    );
}

export default Cart;