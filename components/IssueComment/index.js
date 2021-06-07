import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import styles from './styles';
import { Feather as Icon } from "@expo/vector-icons";

const Issue = (props) =>{

const handleClick=(e)=>{
  console.log(e.target);
}; 

  return(
      <View style={styles.commentcontainer}>
      <Icon name = "user" style={styles.usericon}/>
      <Text style={styles.commenttext}>Comment text</Text>
      </View>
  );
};

export default Issue;