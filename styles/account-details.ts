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
        // borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    profilePic: {
        
    },
    accountSettings : {
        flex: 0.6,
        paddingLeft: 20,
        // borderWidth: 2,

    },
    accountOption: {
        marginVertical: 10,
        fontSize: 20,
        // borderWidth: 1,
        borderColor: '#f5f0f0',
        fontWeight: '500',
        color: '#0967d2',
        alignItems:'center'

    }
})