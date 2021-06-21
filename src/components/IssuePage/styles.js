import { StyleSheet, Dimensions, ProgressViewIOSComponent } from "react-native";

const styles = StyleSheet.create({

page: {
  height: Dimensions.get("window").height,
  width: "100%",
  //backgroundColor: "cyan",
},
header:{
width: "100%",
height: 60,
marginBottom: 0,
flexDirection: "row",
//backgroundColor: "gray",
},
settings:{
alignSelf: "center",
height: 20,
width: 20,
},
datecontainer:{
  padding: 5,
  width: "90%"
},
present:{
fontSize: 20,
},
date:{
fontSize: 7,
},
searchcontainer:{
height: 50,
width: "100%",
position: "relative",
},
containerstyle:{
 height: 50,
 backgroundColor: null, 
},
inputcontainerstyle:{
 height: 30
 },
 topbar: {
   height: 30,
   width: "100%",
   marginTop: 0,
   position: "relative",
   //backgroundColor: "gray",
   paddingLeft: 0,
   flexDirection: "row",
   marginLeft: 10
 },
 dropdown:{
   marginTop: 10,
   paddingRight: 15,
 },
 dropdownstyle:{
  backgroundColor: "gray",
  width: 80,
  height: 80,
 },
 dropdownstyle2:{
  backgroundColor: "gray",
  width: 80,
  height: 80,
 },
 drop1: {
 width: 80,
 //backgroundColor: "gray",
 marginLeft: 10,
 flexDirection: "row",
 //justifyContent: "center",
 },
 drop2: {
 width: 80,
 flexDirection: "row",
 //backgroundColor: "gray",
 },
 dropdownarrow:{
   alignSelf: "flex-end",
   //position: "absolute",
   //marginLeft:30
 },
 space: {
    width: "100%",
    height: 20,
    backgroundColor: "gray"
 },
 issuespace: {
    width: "100%",
    height: 10,
    backgroundColor: "gray",
    marginTop: 15,
    marginBottom: 10
 },
 issuelistbox: {
    marginTop: 10,
    width: "100%",
    //backgroundColor: "blue",
 },
});

export default styles;