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
        justifyContent: 'space-evenly'
    },
    productTitle: {
        fontSize:20
    },
    productBrand: {
        fontSize: 20,
        color: '#594d6d',
    },
    productPrice: {
        fontSize: 18,
        fontWeight: '500'
    },
    productRating: {
        fontSize: 15,
        fontWeight: '600',
        color: '#fff'
    },
    productContainer : {
        // marginBottom: 1500
        // flex: 1
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems:'center',
        backgroundColor: '#3b82f6',
        padding: 5,
        borderRadius: 5,
        width: '25%'
    },
    ratingStar: {
        marginHorizontal: 2,
        height: 12,
        width: 12
    },
    detailedProductImg : {
        height: 250,
        width: 250
    }

});