import React from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';
import Issue from "../Issue";

import styles from './styles';

const IssueList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
          data={cars}
          renderItem={({item}) => <Issue car={item} />}
          keyExtractor = {(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          snapToAlignment={'start'}
          decelerationRate={'normal'}
      />
    </View>
  );
};

export default IssueList;