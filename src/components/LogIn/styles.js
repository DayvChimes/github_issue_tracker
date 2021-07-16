import { StyleSheet, Dimensions, ProgressViewIOSComponent } from "react-native";

const styles = StyleSheet.create({

page: {
  height: Dimensions.get("window").height,
  width: "100%",
  backgroundColor: "cyan",
},
logo: {
  width: "50%",
  height: 70,
  alignSelf: "center",
  alignItems: "center",
  marginTop: "10%",
  //backgroundColor: "grey"
},
image: {
  height: 50,
  width: 50,
},
title: {
  textAlign: "center",
  fontWeight: "700",
  marginTop: 10,
  marginBottom: 10,
  fontSize: 18,
},
lowertitle: {
  textAlign: "center",
  fontWeight: "700",
  
  fontSize: 18,
},
inputcontainer: {
  flexDirection: "column",
  justifyContent: "center",
  width: "100%",
  height: 100,
  //paddingTop: 20,
  //marginTop: "5%",
  //position: "absolute"
},
subtitle:{
  fontSize: 16,
  alignItems: 'center',
  textTransform: 'uppercase',
  //fontWeight: '500',
},
instructionsBox: {
  width: "80%",
  alignSelf: "center",
  backgroundColor: 'gray',
  paddingHorizontal: 10,
  paddingVertical: 15,
  marginVertical: 10,
},
instructionsTitle: {
  fontSize: 16,
  marginBottom: 10,
  textAlign: "center",
  fontWeight: "700",
  color: "black",
},
dot:{
  marginTop: 3,
},
instructions: {
  fontSize: 14,
  textAlign: "left",
  color: "black",
},
button:{
  height: 40,
  justifyContent: 'center',
  borderRadius: 20,
  alignItems: 'center',
},
container:{
  width: '100%',
  paddingHorizontal: 20,
  marginTop: 10,
},
});

export default styles;