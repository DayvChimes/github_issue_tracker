import React from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';
import Issue from "../Issue";
import { connect } from "react-redux";

import styles from './styles';

const IssueList = (props) => {
  return (
    <View style={styles.container}>
      {console.log(props.issues)}
      <FlatList      
          data={props}
          renderItem={({item}) => <Issue issues={item} />}
          keyExtractor = {(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    issues: state.repository.repositoryIssues === ""
    ? state.username.userIssues
    : state.repository.repositoryIssues,
  };
};


export default connect(mapStateToProps)(IssueList);