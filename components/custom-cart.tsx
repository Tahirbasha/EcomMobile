import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet } from 'react-native';

const CustomCart = (props: {  color: string, size: number, cartItemsCount: number }) => {
  return (
    <View style={{ width: 24, height: 24, margin: 5 }}>
      <Ionicons name="cart" color={props.color} size={props.size} />
      {props.cartItemsCount > 0 && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{props.cartItemsCount}</Text>
        </View>
      )}
    </View>
  );
};


const styles = StyleSheet.create({
    badge: {
    position: 'absolute',
    right: -8,
    top: -4,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default CustomCart;
