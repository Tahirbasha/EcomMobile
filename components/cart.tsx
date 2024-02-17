import * as React from 'react'
import { useEffect } from 'react';
import { Button, Image, ScrollView, View } from 'react-native';
import cartStyles from '../styles/cart-styles';
import { useDispatch, useSelector } from 'react-redux';
import { CartItem, rootState } from '../types/ecom-types';
import CartItems from './cart-item';
import { addProductToCart } from '../store/reducer';


const Cart = (props: { navigation: any, route: any }) => {

    const cartItems = useSelector((state: rootState) => state.cartDetails);
    const [localCart, setLocalCart] = React.useState<CartItem[]>(cartItems);

    useEffect(() => {
        setLocalCart([...cartItems]);
    }, [props.route])

    const dispatch = useDispatch();

    const handleRemoveProduct = (productId: number) => {
        if (cartItems) {
            const productIndex = cartItems.findIndex(each => each.id === productId);
            if (productIndex > -1) {
                cartItems.splice(productIndex, 1);
                localCart.splice(productIndex, 1);
                setLocalCart([...localCart]);
            }
            dispatch({ type: addProductToCart, data: cartItems });
        }
    }

    if (!cartItems || !cartItems.length) {
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
    return (
        <ScrollView>
            {localCart.map((cartItem, index) => {
                return <CartItems
                    key={index}
                    product={cartItem}
                    handleRemoveProduct={handleRemoveProduct}
                />
            })}
        </ScrollView>
    )
}

export default Cart;