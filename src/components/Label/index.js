import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";
import { connect } from "react-redux";
import {getFilteredRepoIssues} from "../../actions/repository";
import { getFilteredIssues} from "../../actions/username";
import { setLabel } from "../../actions/main";

const IssueLabel = (props) => {
  
  const{
    label,
    navigation,
    username,
    repository,
    repouser,
    userrequest,
    setNewLabel,
    getFilteredUserIssues,
    getFilteredRepositoryIssues,
  } = props
    
  const { 
    name   
  } = label;

  const first = 10;
  const after = null;
  const field = "CREATED_AT";
  const status = null; 

  const handleClick = () => {
    console.log(name + " Label Pressed");
    setNewLabel(name);
    if (userrequest) {
      getFilteredUserIssues(username, first, after, field, name, status);
    } else {
      getFilteredRepositoryIssues(repouser, repository, first, after, field, name, status);
    }
    navigation.navigate("IssuePage");
  };

  return (
    <View>
      <Pressable
        onPress={() => {
          setTimeout(() => {
            handleClick();
          }, 400);
        }}
      >
        <View style={styles.label}>
          <Text style={styles.labeltext}>{name}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    filterValue: state.main.filter,
    userrequest: state.username.userRequest,
    reporequest: state.repository.repoRequest,
    username: state.username.username,
    repository: state.repository.repository.repository,
    repouser: state.repository.repository.username,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getFilteredUserIssues: (username, first, after, field, label) => {
      dispatch(getFilteredIssues(username, first, after, field, label));
    },
    getFilteredRepositoryIssues: (
      username,
      repository,
      first,
      after,
      field,
      label
    ) => {
      dispatch(
        getFilteredRepoIssues(username, repository, first, after, field, label)
      );
    },
    setNewLabel: (label) => {
      dispatch(setLabel(label));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IssueLabel);
