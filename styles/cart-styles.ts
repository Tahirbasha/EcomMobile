import {StyleSheet} from 'react-native';

const cartStyles = StyleSheet.create({
    cartEmptyContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    emptyCartImg: {
        height: 250,
        width: 220
    },
    cartContainer: {
        paddingVertical: 10
    }
});

export default cartStyles;