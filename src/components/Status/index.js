import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";
import { connect } from "react-redux";
import { getFilteredRepoIssues } from "../../actions/repository";
import { getFilteredIssues } from "../../actions/username";
import { setStatus } from "../../actions/main";

const IssueStatus = (props) => {
  const {
    status,
    navigation,
    username,
    repository,
    repouser,
    userrequest,
    setNewStatus,
    getFilteredUserIssues,
    getFilteredRepositoryIssues,
  } = props;

  const first = 10;
  const after = null;
  const field = "CREATED_AT";
  const label = null;
  const red = "#FF0000";
  const green = "#008000";

  const handleClick = () => {
    
    setNewStatus(status);
    if (userrequest) {
      getFilteredUserIssues(username, first, after, field, label, status);
    } else {
      getFilteredRepositoryIssues(
        repouser,
        repository,
        first,
        after,
        field,
        label,
        status,
      );
    }
    navigation.navigate("IssuePage");
  };

  return (
    <View style={styles.issuestatuscontainer}>
        <Pressable
        onPress={() => {
          setTimeout(() => {
            handleClick();
          }, 400);
        }}
      >
      <View
        style={[
          styles.issuestatus,
          {
            backgroundColor: status == "OPEN" ? red : green,
          },
        ]}
      >
        <Text style={styles.issuestatustext}> {status} </Text>
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
    setNewStatus: (status) => {
      dispatch(setStatus(status));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IssueStatus);
