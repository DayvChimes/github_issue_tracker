import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  page: {
  height: Dimensions.get("window").height,
  width: "100%",
  backgroundColor: "cyan",
  //flexDirection: "column",
  },
  toppage: {
    //height: "30%",
    width: "100%",
    marginBottom: 20,
  },
  title: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 30,
    padding: 20,
  },
  statusrepocontainer: {
    flexDirection: "row",
  },
  issuestatuscontainer:{

  },
  issuestatus:{
   alignItems: "center",
   width: "20%",
 },
 issuestatustext: {
   backgroundColor: "green",
   borderRadius: 20,
   color: "white",
   fontSize: 14,
   marginLeft: 10
 },
  issuenumbercontainer: {
    width: "40%",
  },
  issuenumber: {
    marginLeft: 10,
  },
  repocontainer: {
    width: "40%",
    alignItems: "flex-end",
  },
  repository:{
    marginRight: 10,
  },
  midpage: {
    marginBottom: 0,
  },
  descriptioncontainer:{
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    marginHorizontal: 10,
  },
  dateinitiatorcontainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  datecontainer:{
    width: "50%",
  },
  date: {
     marginLeft: 10,
  },
  initiatorcontainer:{
    width: "50%",
    alignItems: "flex-end",
  },
  initiator:{
    marginRight: 10
  },
  labelcontainer: {
   //backgroundColor: "green",
   alignItems: "flex-start",
   paddingVertical: 10,
 },
 label: {
   paddingHorizontal: 7,
   backgroundColor: "yellow",
   borderRadius: 10,
   marginHorizontal: 10,
 },
 labeltext: {
   color: "black",
   fontSize: 14,
 },
  bottompage: {
     marginTop: 0,
  },
  commenttitlecontainer: {
    flexDirection: "row",
    width: 100,
    marginLeft: 10,
  },
  commenttitle:{
 
  },
  commenticon: {
    marginTop: 4,
  },
  });

export default styles;