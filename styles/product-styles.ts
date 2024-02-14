import { StyleSheet } from "react-native";


export const product = StyleSheet.create({
    primeDealsContainer: {
        // borderWidth: 2,
        // flex: 1,
        height: 150,
        marginBottom: 5
    },
    primeDealsHeading: {
        fontSize: 20,
    },
    primeProductCard: {
        height: 120,
        // borderWidth: 2,
        margin: 10,
        borderRadius: 5
    },
    productCard: {
        flexDirection: 'row',
        height: 200,
        // borderWidth: 1,
        margin: 10,
        borderRadius: 5,
        backgroundColor: '#f7f7ed'
    },
    primeProductImg: {
        flex: 1,
        width: 110
    },
    productImg: {
        // flex: 1,
        width: '55%',
        marginRight: 5
    },
    productDetails: {
        width: '45%',
        paddingRight: 2,
    },
    productTitle: {
        fontSize:20
    },
    productBrand: {
        fontSize: 20
    },
    productPrice: {
        fontSize: 18
    },
    productRating: {
        fontSize: 15,
        fontWeight: '600',
        color: 'green'
    },
    productContainer : {
        // marginBottom: 1500
        // flex: 1
    }

});