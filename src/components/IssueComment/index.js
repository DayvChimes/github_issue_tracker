import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { Feather as Icon } from "@expo/vector-icons";

const IssueComment = (props) => {
  const {
    author: { login },
    body,
  } = props.comment;

  return (
    <View style={styles.commentcontainer}>
      <View style={styles.author}>
        <Icon name="user" style={styles.usericon} />
        <Text style={styles.authorname}>{login}</Text>
      </View>
      <Text style={styles.commenttext}>{body}</Text>
    </View>
  );
};

export default IssueComment;
