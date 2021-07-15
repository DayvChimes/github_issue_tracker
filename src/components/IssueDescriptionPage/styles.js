import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  page: {
    height: Dimensions.get("window").height,
    width: "100%",
    backgroundColor: "cyan",
    //flexDirection: "column",
  },
  scroller: {
    marginBottom: 100,
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
  issuestatuscontainer: {
    alignItems: "center",
    width: "20%",
    //backgroundColor: "white",
  },
  issuestatus: {
     //backgroundColor: "green",
   borderRadius: 20,
   padding: 5
  },
  issuestatustext: {
    color: "white",
    fontSize: 14,
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
  repoicon:{
    marginTop: 5,
    marginLeft: -10,
    },
  repositorycontainer: {
    flexDirection: "row",   
    paddingLeft: 10,
    flexWrap: "nowrap",   
    },
  repository: {
    marginRight: 10,
  },
  midpage: {
    marginBottom: 0,
  },
  descriptioncontainer: {
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
  datecontainer: {
    width: "50%",
  },
  date: {
    marginLeft: 10,
  },
  initiatorcontainer: {
    width: "50%",
    alignItems: "flex-end",
    flexDirection: "row",
   //backgroundColor: "white",
    //paddingLeft: 10,
  },
  initiator: {
    marginRight: 10,
  },
  initiatoricon:{
    marginTop: 5,
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
  commenttitle: {},
  commenticon: {
    marginTop: 4,
  },
  bottomspace: {
    width: "100%",
    height: 50,
  },
});

export default styles;
