import { StyleSheet } from "react-native";

export const failure = StyleSheet.create({
    loader:
    {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
    failureView: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems:'center'
    },
    oops: {
        fontSize: 30,
    },
    failureMsg: {
        fontSize: 20
    }
});
