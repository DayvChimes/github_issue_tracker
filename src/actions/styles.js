import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height,
    width: "100%",
  },
  buttonsContainer: {
    position: "absolute",
    bottom: 30,
    width: "100%",
    backgroundColor: "gray",
  },
  textContainer: {
    width: "100%",
    textAlign: "center",
  },
});

export default styles;
