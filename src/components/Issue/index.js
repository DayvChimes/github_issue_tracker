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
  navigation.navigate("IssueDescription");
};

const id= "#23324"; 

const { issue } = props.issues;

  return(
  <View>
  <Pressable onPress={()=>{setTimeout(() => {
    handleClick()              
  }, 400);}}>
  <View style={styles.issuecontainer}>
  <View style={styles.topissuecontainer}>
  <Text style={styles.issuedate}> Date </Text>
  <View style={styles.issuestatus}> 
  <Text style={styles.issuestatustext}> Status </Text> 
  </View>
  </View>
  <View style={styles.midissuecontainer}>
  <View style={styles.issuedescriptioncontainer}>
  <Text style={styles.issuetitle}> Title </Text>
  <View>
  <Text style={styles.issuedescription}> Description
  <Text style={styles.issueid}> {id} </Text>
  </Text>
  </View>
  </View>
  </View>
   <View style={styles.bottomissuecontainer}>
   <View style={styles.usernamecontainer}>
   <Icon name = "user" style={styles.initiatoricon}/>
   <Text styles={styles.initiatorusername}> mazin-dotcom </Text>
   </View>
   <View style={styles.commentcontainer}>
   <Icon name = "message-circle" style={styles.commenticon}/>
   <Text styles={styles.comments}> Comments </Text>
   </View>
  </View>
  <View style={styles.labelcontainer}>
  <View style={styles.label}>
  <Text style={styles.labeltext}> label </Text>
  </View>
  </View>
  </View>
  <View style={styles.issuespace}>
  </View>
  </Pressable>
  </View>
  );
};

export default Issue;