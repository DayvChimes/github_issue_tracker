import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";
import { connect } from "react-redux";
import {getFilteredRepoIssues} from "../../actions/repository";
import { getFilteredIssues} from "../../actions/username";
import { setLabel } from "../../actions/main";
import { GraphQLEnumType } from 'graphql';

const IssueLabel = (props) => {
  
  const{
    label,
    navigation,
    username,
    filterValue,
    repository,
    repouser,
    userrequest,
    reporequest,
    setNewLabel,
    getFilteredUserIssues,
    getFilteredRepositoryIssues,
  } = props
    
  const { 
    name   
  } = label;

  const first = 10;
  const after = null;
  let status = null; 


  var stateTypes = new GraphQLEnumType({
    name: 'OPEN',
    values: {
      OPEN: { value: "OPEN" },
    }
  });


  const handleClick = () => {
    console.log(name + " Label Pressed");
    setNewLabel(name);
    if (userrequest) {
      getFilteredUserIssues(username, first, after, filterValue, name, status);
    }
    else{ 
     getFilteredRepositoryIssues(repouser, repository, first, after, filterValue, name, status);
    };
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
    getFilteredUserIssues: (username, first, after, field, label, status) => {
      dispatch(getFilteredIssues(username, first, after, field, label, status));
    },
    getFilteredRepositoryIssues: (
      username,
      repository,
      first,
      after,
      field,
      label,
      status
    ) => {
      dispatch(
        getFilteredRepoIssues(username, repository, first, after, field, label, status)
      );
    },
    setNewLabel: (label) => {
      dispatch(setLabel(label));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IssueLabel);
