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
import {
  List,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
} from "react-virtualized";
import Issue from "../Issue";
import { connect } from "react-redux";
import _ from "lodash";

import styles from "./styles";
import { preProcessFile } from "typescript";

const IssueList = (props) => {
  const cache = React.useRef(
    new CellMeasurerCache({
      fixedWidth: true,
      defaultHeight: 100,
    })
  );
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
      {issues.edges.map((issuelist) => {
        return (
          <View key={issuelist.node.id}>
            {/* {console.log(issuelist)} */}
            <VirtualizedList
              data={issues.edges}
              initialNumToRender={5}
              renderItem={({ item, index }) => (
                <View style={{ width: "100%", height: "100%" }}>
                  <AutoSizer>
                    {({ width, height }) => (
                      <List
                        width={width}
                        height={height}
                        rowHeight={cache.current.rowHeight}
                        deferredMeasurementCache={cache.current}
                        rowCount={Object.keys(issues.edges).length}
                        rowRenderer={({ key, index, style, parent }) => {
                          return (
                            <CellMeasurer
                              key={key}
                              cache={cache.current}
                              parent={parent}
                              columnIndex={0}
                              rowIndex={index}
                            >
                              <View style={style}>
                                <Issue issue={(item = issuelist.node)} />
                              </View>
                            </CellMeasurer>
                          );
                        }}
                      />
                    )}
                  </AutoSizer>
                </View>
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
      })}
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
