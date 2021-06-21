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
  marginTop: "30%",
  //backgroundColor: "grey"
},
image: {
  height: 50,
  width: 50,
},
title: {
  textAlign: "center",
  fontWeight: "700",
  marginTop: 20,
  fontSize: 18,
},
inputcontainer: {
  flexDirection: "column",
  justifyContent: "center",
  width: "100%",
  height: 100,
  paddingTop: 20,
  marginTop: "5%",
  //position: "absolute"
},
textinput1:{
  width: 311,
  top: 0,
  left: 2,
  height: 40,
  margin: 12,
  borderWidth: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  minHeight: 38,
  //backgroundColor: "rgba(52, 52, 52, 0.7)"
},
textinput2:{
  width: 311,
  top: 0,
  height: 40,
  margin: 12,
  borderWidth: 1,
  left: 2,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  minHeight: 38,
},
subtitle:{
  fontSize: 16,
  alignItems: 'center',
  textTransform: 'uppercase',
  //fontWeight: '500',
},
button:{
  height: 40,
  justifyContent: 'center',
  borderRadius: 20,
  alignItems: 'center',
  marginTop: "5%",
},
container:{
  width: '100%',
  padding: 20,
},
});

export default styles;