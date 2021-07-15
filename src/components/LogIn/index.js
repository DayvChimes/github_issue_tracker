import React, { Component } from "react";
import { View, Text, Image, Pressable, ActivityIndicator } from "react-native";
import styles from "./styles";
import TextInputField from "../TextInputField/index";
import { getIssues, refreshUsername, userRequest } from "../../actions/username";
import { setSearchRequest } from "../../actions/search";
import { getRepositoryIssues, refreshRepository, repositoryRequest } from "../../actions/repository";
import { connect } from "react-redux";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";
import { setLoading, setFilterby } from "../../actions/main";
import username from "../../reducers/username";
import search from "../../reducers/search";
//import { Text } from '@ui-kitten/components';

const first = 10;
const after = null;
const field = "CREATED_AT";
const labelnew = null;
const statusnew = null;

const LogIn = (props) => {
  const { 
    loading,
    navigation,
    usernameRequest,
    repoRequest,
    userrequest,
    reporequest,
    searchRequest,
    setFilter,
    setNewLabel,
    setNewStatus,
   } = props;

  logInSubmit = (values) => {
    console.log(values);
    console.log("logInSubmit");
    //console.log("The User Request in LogIn is: "+userrequest);
    //console.log("The Repo Request in LogIn is: "+reporequest);    
    repoRequest(false);  
    usernameRequest(false);
    searchRequest(false);
    setFilter(field);
    setNewLabel(labelnew);
    setNewStatus(statusnew);
    //console.log("The User Request in LogIn is now: "+userrequest);
    //console.log("The Repo Request in LogIn is now: "+reporequest);
    values.repository == ""
      ? props.getUserIssues(values.username, first, after, navigation)
      : props.getRepoIssues(values.username, values.repository, first, after, navigation);    
    navigation.navigate("IssuePage");
  };
  const backgroundColor = "#171A20CC";
  const textColor = "#FFFFFF";

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
              logInSubmit(values);
              setSubmitting(false);
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
                  icon="git-branch"
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
    loading: state.main.loading,
    userrequest: state.username.userRequest,
    reporequest: state.repository.repoRequest,
    //username: state.username.username.login,
  };
};

const mapDispatchToProps = (dispatch) => {
  //have the least dispatches here for memory purposes
  return {
    getUserIssues: (username, first, after, navigation) => {
      dispatch(getIssues(username, first, after, navigation));
    },
    getRepoIssues: (username, repository, first, after, field, navigation) => {
      dispatch(getRepositoryIssues(username, repository, first, after, field, navigation));
    },
    repoRequest: (request) => {
      dispatch(repositoryRequest(request));
    },
    usernameRequest: (request) => {
      dispatch(userRequest(request));
    },
    searchRequest: (request) => {
      dispatch(setSearchRequest(request));
    },
    setFilter: (filter) => {
      dispatch(setFilterby(filter));
    },
    setNewLabel: (label) => {
      dispatch(setLabel(label));
    },
    setNewStatus: (status) => {
      dispatch(setStatus(status));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
