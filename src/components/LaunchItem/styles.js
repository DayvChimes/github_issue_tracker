import { StyleSheet, Dimensions, ProgressViewIOSComponent } from "react-native";

const styles = StyleSheet.create({
  carContainer: {
    alignContent: "center",
    //justifyContent: "center",
    width: "100%",
    height: Dimensions.get("window").height+30,
  },
  pressContainer: {
    width: "100%",
    height: Dimensions.get("window").height+30,
    position: "absolute",
  },
  container: {
    width: "100%",
    height: Dimensions.get("window").height,
    position: "absolute",
  },
  titles: {
    marginTop: "20%",
    width: "100%",
    height: "9%",
    alignItems: "center",
    backgroundColor: "rgba(52, 52, 52, 0.7)",
  },
  title: {
    fontSize: 18,
    flexWrap: "wrap",
    fontWeight: "400",
    textAlign: "center",
    color: "white",
  },
  subtitle: {
    fontSize: 14,
    alignItems: "center",
    color: "white",
  },
  subtitleCTA: {
    fontSize: 14,
    textDecorationLine: "underline",
    color: "white",
  },
  date: {
    color: "white",
  },
  image: {
    height: Dimensions.get("window").height+30,
    width: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  patch: {
    height: 30,
    width: 30,
    marginTop: "42%",
    resizeMode: "cover",
    position: "absolute",
    left: 40,
  },
  dateContainer: {
    position: "absolute",
    top: 30,
    width: "100%",
    alignItems: "flex-end",
  },
  patchContainer: {
    position: "absolute",
    width: 30,
    height: 30,
  },
  smallDateContainer: {
    width: 90,
  },
  buttonsContainer: {
    position: "absolute",
    bottom: 30,
    width: "100%",
  },
});

export default styles;
