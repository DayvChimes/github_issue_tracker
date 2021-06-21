import React, { Component } from "react";
import { View, Text, Image, Pressable } from "react-native";
import styles from "./styles";
import TextInputField from "../TextInputField/index";
import { setIssues, setUser, getIssues, signIn } from "../../actions/username";
import { setLoading } from "../../actions/main";
import GetUserIssues from "../../actions/username";
import * as User from "../../actions/user";
import { connect } from "react-redux";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";
import userIssues from "../../actions/launchesPast";
import { useDispatch } from "react-redux";

require("react-dom");
window.React2 = require("react");
console.log(window.React1 === window.React2);
const first = 10;
const after = null;

const LogIn = (props) => {
  const dispatch = useDispatch();
  logInSubmit = (values) => {    
    //console.log(values);
    console.log("logInSubmit");
    props.login(values.username);
    //props.getUserIssues(values.username, dispatch);
    //props.navigation.navigate("IssuePage");
  };
  const backgroundColor = "#171A20CC";
  const textColor = "#FFFFFF";
  console.log(props);

  return (
    <KeyboardAwareScrollView>
      <View style={styles.page}>
        <View style={styles.logo}>
          <Image
            source={require("../../../assets/drone.png")}
            style={styles.image}
          />
        </View>
        <Text style={styles.title}>Welcome to The Github issue Tracker</Text>
        <Formik
          initialValues={{ username: "", repository: "" }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              console.log(values);
              logInSubmit(values);
              setSubmitting(false);
              console.log("done");
            }, 400);
          }}
        >
          {(props) => (
            <View>
              <View style={styles.inputcontainer}>
                <TextInputField
                  icon="user"
                  placeholder="Github Username"
                  value={props.values.username}
                  onChangeText={props.handleChange("username")}
                />
                <TextInputField
                  icon="github"
                  placeholder="Enter Repository Name"
                  value={props.values.repository}
                  onChangeText={props.handleChange("repository")}
                />
              </View>
              <View style={styles.container}>
                <Pressable
                  style={[styles.button, { backgroundColor: backgroundColor }]}
                  onPress={props.handleSubmit}
                >
                  <Text style={[styles.subtitle, { color: textColor }]}>
                    View
                  </Text>
                </Pressable>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </KeyboardAwareScrollView>
  );
};

const mapStateToProps = (state) => {
  return {
    //username: state.username.username.login,
    userState: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (username) => {
      dispatch(signIn(username));
    },
    getUserIssues: (username) => {
      dispatch(userIssues(username));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
