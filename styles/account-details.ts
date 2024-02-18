import { StyleSheet } from "react-native";


export const AccountStyles = StyleSheet.create({
    accountContainer : {
        flex: 1,
        backgroundColor: '#fff', 
        borderTopWidth: 1, 
        borderTopColor: '#f5f0f0',
    },
    profilePicContainer: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    profilePic: {
        
    },
    accountSettings : {
        flex: 0.6,
        paddingLeft: 20,

    },
    accountOption: {
        marginVertical: 10,

        flexDirection: 'row',
        alignItems:'center',

    },
    accountOptionText: {
        fontSize: 20,
        fontWeight: '500',
        color: '#0967d2',
        marginHorizontal: 5
    }
})