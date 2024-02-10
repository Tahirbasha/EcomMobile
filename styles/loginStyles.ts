import {StyleSheet} from 'react-native';

export const cursorColor = "#969493";
export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 40,
  },
  inputContainer :{
    marginTop: 5,
    marginBottom: 18,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 8,
    paddingLeft: 12,
    backgroundColor: "#e2e8f0",
  },
  inputLabel: {
    fontWeight: "500",
  },
  loginButton: {
    borderRadius: 50,
    backgroundColor: "#4731eb",
    textAlign: "center",
  },
  customBtnContainer: {
    backgroundColor: "#0b69ff",
    padding: 9,
    borderRadius: 5,
  },
  customButton: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "500",
  },
  logoContainer: {
    alignItems: 'center'
},
  loginLogo: {
    width: 200,
    height: 50,
    resizeMode: "contain",
  },
  loginImg: {
    width: 300,
    height: 200,
    resizeMode: "contain",
  },
  errorMsg: {
    color: 'red',
    fontWeight: '500'
  }
});
