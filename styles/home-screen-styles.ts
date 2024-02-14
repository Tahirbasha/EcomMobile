import { StyleSheet } from "react-native";

export const homeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  homeContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  homeHeader :{
    // backgroundColor: '#b0c5e8', 
    backgroundColor: '#fff', 
    paddingHorizontal: 10,
    paddingBottom: 9, 
    height: 88, 
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  landingPageImg: { 
    width: 300,
    height: 380,
    resizeMode: 'contain' 
  },
  homeContent: {
    flex: 0.8,
    alignItems: 'center',
    // borderWidth: 1
  },
  homeHeading: {
    fontSize: 30,
    fontWeight: '500'
  },
  homeDescription: {
    fontSize: 15,
    width: 350,
    marginBottom: 20,
    color: '#64748b',
    textAlign: 'left'

  }
});
