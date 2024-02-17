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
        marginVertical: 10,
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
        paddingHorizontal: 15
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
    productDetailsContainer: {
        flex: 1, 
        backgroundColor: '#fff', 
        borderTopWidth: 1, 
        borderTopColor: '#f5f0f0',
        paddingHorizontal: 20,
        paddingBottom: '20%'
    },
    detailedProductImg : {
        height: 350,
        width: 350,
        borderRadius: 10,
    },
    detailedProductContainer: {
        alignItems: 'center',
        // paddingHorizontal: 15,
        paddingVertical: 25,
    },
    detailedProductNameAndCost: {

    },
    detailedProductTitle: {
        fontSize: 25,
        fontWeight: '500',
        color: '#3e4c59'
    },
    detailedProductCost: {
        fontSize: 25,
        fontWeight: '500',
        color: '#171f46',
        paddingVertical: 10,

    },
    detailedProductRatingContainer: {
        flexDirection: 'row',
        alignItems:'center',
    },
    detailedProductRatings: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: '#3b82f6',
        padding: 8,
        borderRadius: 5,
        width: '20%',
        marginRight: 8
    },
    detailedProductRatingCount : {
        color: '#fff',
        fontSize: 18,
        fontWeight: '500',
    },
    detailedProductRatingStar: {
        marginHorizontal: 2,
        height: 18,
        width: 18,
    },
    detailedProductReviews: {
        color: '#3e4c59',
        fontWeight: '400'
    },
    detailedProductDescription: {
        fontSize: 15,
        color: '#616e7c',
        marginVertical: 15,
        lineHeight: 22
    },
    detailedProductAvailability: {
        color: '#171f46',
        marginVertical: 12,
        fontSize: 18,
        fontWeight: '600'
    },
    detailedProductBrand: {
        color: '#171f46',
        fontSize: 18,
        fontWeight: '600',
        paddingBottom: 5,
        borderBottomWidth: 0.8,
        borderColor: '#cbced2'

    },
    detailedProductTextFade: {
        color: '#616e7c',
        fontWeight: '400'

    },
    addToCartContainer: {
    },
    cartControls: {
        flexDirection: 'row',
        width: '25%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10
    },
    productQty: {
        fontSize: 20,
        color: '#616e7c',
    },
    addToCartBtn: {
        backgroundColor: "#3b82f6",
        paddingHorizontal: 6,
        paddingVertical: 12,
        marginTop: 12,
        borderRadius: 5,
        width: '25%'  
    },
    addToCartTitle: {
        color: '#fff',
        fontWeight: '500'
    },
    similarProducts: {
        paddingVertical: 20,
        paddingHorizontal: 0,
        marginBottom: 200,
    },
    similarProductsHeading: {
        color: '#616e7c',
        fontSize: 25,
        fontWeight: '600',
    },
    addingToCart: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    priceAndRemove: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    removeTag: {
        color: 'red',
        marginHorizontal: 30
    }
});