import React from "react";
import {
  View,
  Text,
  FlatList,
  Dimensions,
  VirtualizedList,
  ScrollView,
} from "react-native";
import Issue from "../Issue";
import { connect } from "react-redux";

import styles from "./styles";

const getItem = (data, index) => ({
  id: Math.random().toString(12).substring(0),
  title: `Item ${index + 1}`,
});

const getItemCount = (data) => 1;

const IssueList = (props) => {
  return (
    <View style={styles.container}>
      <ScrollView snapToStart={true}>
        {console.log(JSON.stringify(props.issues, undefined, 2))}
      </ScrollView>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    issues:
      Object.keys(state.repository.repositoryIssues).length == 0
        ? state.username.userIssues
        : state.repository.repositoryIssues,
  };
};

export default connect(mapStateToProps)(IssueList);
