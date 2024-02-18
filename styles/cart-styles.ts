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
        borderTopWidth: 1,
        borderTopColor: '#f5f0f0',
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: '#fff',
    }
});

export default cartStyles;