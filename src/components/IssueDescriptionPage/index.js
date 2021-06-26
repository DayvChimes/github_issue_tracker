import React, {Component} from 'react';
import {
  View,
  Text,
} from 'react-native';
import styles from './styles';
import { Feather as Icon } from "@expo/vector-icons";
import IssueComment from "../IssueComment";

const IssueDescriptionPage=(props)=>{

    return(
      <View style={styles.page}>
      <View style={styles.toppage}>
      <Text style={styles.title}> TITLE </Text>
      <View style={styles.statusrepocontainer}>
      <View style={styles.issuenumbercontainer}>
      <Text style={styles.issuenumber}> issue number</Text>
      </View>
      <View style={styles.issuestatus}>
      <Text style={styles.issuestatustext}> Status </Text> 
      </View>
      <View style={styles.repocontainer}>
      <Text style={styles.repository}> repository</Text>
      </View>
      </View>
      </View>
      <View style={styles.midpage}>
      <View style={styles.decriptioncontainer}>
      <Text style={styles.description}>Issue Description</Text>
      </View>
      <View style={styles.dateinitiatorcontainer}>
      <View style={styles.datecontainer}>
      <Text style={styles.date}>Date</Text>
      </View>
      <View style={styles.initiatorcontainer}>
      <Text style={styles.initiator}>Initiator</Text>
      </View>
      </View>
      <View style={styles.labelcontainer}>
      <View style={styles.label}>
      <Text style={styles.labeltext}> label </Text>
      </View>
      </View>
      </View>
      <View style={styles.bottompage}>
      <View style={styles.commenttitlecontainer}>
      <Text styles={styles.commenttitle}> Comments </Text>
      <Icon name = "message-circle" style={styles.commenticon}/>
      </View>
      <IssueComment/>
      </View>
      </View>
    );

}

export default IssueDescriptionPage;