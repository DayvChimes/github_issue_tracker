import React from "react";
import {
  View,
  Text,
  FlatList,
  Dimensions,
  VirtualizedList,
  ScrollView,
  SafeAreaView,
} from "react-native";
import Issue from "../Issue";
import { connect } from "react-redux";
import _ from "lodash";

import styles from "./styles";


const IssueList = (props) => {
  const { issues } = props;

  var i = 1;
  
  const { edges } = issues;

  const getItem = (data, index) => ({
    id: Math.random().toString(12).substring(0),
    title: `Item ${index + 1}`,
  });
  
  const getItemCount = (data) => 1;

  return (
    <View style={styles.container}>
         {issues.edges.map(((issuelist) => {
          return (
            <View key={issuelist.node.id}>
            {/* {console.log(issuelist)} */}
              <VirtualizedList
                data={issues.edges}
                initialNumToRender={5}
                renderItem={({ item, index }) => (                  
                  <Issue issue={(item = issuelist.node)} />
                )}
                keyExtractor={(item, index) => {
                  return item.id;
                }}
                getItemCount={getItemCount}
                getItem={getItem}
                showsVerticalScrollIndicator={true}
                snapToAlignment={"start"}
                decelerationRate={"normal"}
              /> 
            </View>
          );
        }))} 
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
