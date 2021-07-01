import React from "react";
import { View, Text, Pressable} from "react-native";
import styles from "./styles";
import { Feather as Icon } from "@expo/vector-icons";
import { shorten } from "../../utils/stringUtils";
import { IntlProvider, FormattedDate } from "react-intl";
import "intl";
import "intl/locale-data/jsonp/en";

const Issue = (props) => {
  const handleClick = (e) => {
    console.log(e.target);
    navigation.navigate("IssueDescription");
  };

  const rid = "#23324";

  const {
    author: { login },
    repository: { repository },
    labels: { nodes },
    createdAt,
    id,
    state,
    title,
    number,
    body,
    comments: {
      edges: [
        {
          node: { author },
        },
      ],
    },
  } = props.issue;

  if ("__setDefaultTimeZone" in Intl.DateTimeFormat) {
    Intl.DateTimeFormat.__setDefaultTimeZone("America/Los_Angeles");
  }

  let issuedate = Date.parse(createdAt);
  let ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(issuedate);
  let mo = new Intl.DateTimeFormat("en", { month: "short" }).format(issuedate);
  let da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(issuedate);
  issuedate = `${da}-${mo}-${ye}`;

  return (
    <View>
      {console.log(props.issue)}

      <Pressable
        onPress={() => {
          setTimeout(() => {
            handleClick();
          }, 400);
        }}
      >
        <View style={styles.issuecontainer}>
          <View style={styles.topissuecontainer}>
            <Text style={styles.issuedate}> {issuedate} </Text>
            <View style={styles.issuestatus}>
              <Text style={styles.issuestatustext}> {state} </Text>
            </View>
          </View>
          <View style={styles.midissuecontainer}>
            <View style={styles.issuedescriptioncontainer}>
              <Text style={styles.issuetitle}> {title} </Text>
              <View>
                <Text style={styles.issuedescription}>
                  {" "}
                  {shorten(body)}
                  <Text style={styles.issueid}> {number} </Text>
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.bottomissuecontainer}>
            <View style={styles.usernamecontainer}>
              <Icon name="user" style={styles.initiatoricon} />
              <Text styles={styles.initiatorusername}> {login} </Text>
            </View>
            <View style={styles.commentcontainer}>
              <Icon name="message-circle" style={styles.commenticon} />
              <Text styles={styles.comments}> Comments </Text>
            </View>
          </View>
          <View style={styles.labelcontainer}>
            <View style={styles.label}>
              <Text style={styles.labeltext}> label </Text>
            </View>
          </View>
        </View>
        <View style={styles.issuespace}></View>
        </Pressable>
    </View>
  );
};

export default Issue;
