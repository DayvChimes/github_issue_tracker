import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Pressable,
  Linking,
  Platform,
} from "react-native";
import styles from "./styles";
import StyledButton from "../StyledButton";
import { IntlProvider, FormattedDate } from "react-intl";
import "intl";
import "intl/locale-data/jsonp/en";

const LaunchItem = (props) => {
  const {
    mission_name,
    flickr_images,
    mission_patch_small,
    rocket_name,
    launch_date_utc,
    id,
    article_link,
    video_link,
  } = props.car;

  var path = props.car.links.flickr_images;

  var article = props.car.links.article_link;

  var video = props.car.links.video_link;

  var rocket = props.car.rocket.rocket_name;

  var patch = props.car.links.mission_patch_small;

  const [shouldShow, setShouldShow] = useState(true);

  if ("__setDefaultTimeZone" in Intl.DateTimeFormat) {
    Intl.DateTimeFormat.__setDefaultTimeZone("America/Los_Angeles");
  }

  let launchdate = Date.parse(launch_date_utc);
  let ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(
    launchdate
  );
  let mo = new Intl.DateTimeFormat("en", { month: "short" }).format(launchdate);
  let da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(launchdate);
  launchdate = `${da}-${mo}-${ye}`;

  if (path.length !== 0 && patch !== null && video !== null) {
    path = path[0];
  } else {
    return null;
  }

  return (
    <View style={styles.carContainer}>
      <ImageBackground source={{ uri: path }} style={styles.image} />
      <View>
        <ImageBackground source={{ uri: patch }} style={styles.patch} />
      </View>
      <Pressable
        style={styles.pressContainer}
        onPress={() => setShouldShow(!shouldShow)}
      >
        {shouldShow ? (
          <View style={styles.container}>
            <View style={styles.titles}>
              <Text style={styles.title}>{mission_name}</Text>
              <Text style={styles.subtitle}>
                {rocket}
                {", "}
                <Text style={styles.subtitleCTA}>
                  {"Mission Id: "}
                  {id}
                </Text>
              </Text>
            </View>
            <View style={styles.dateContainer}>
              <View style={styles.smallDateContainer}>
                <Text style={styles.date}>{launchdate}</Text>
              </View>
            </View>
            <View style={styles.buttonsContainer}>
              <StyledButton
                type="primary"
                content={"Watch Launch"}
                onPress={() => {
                  Linking.openURL(video);
                }}
              />
            </View>
          </View>
        ) : null}
      </Pressable>
    </View>
  );
};

export default LaunchItem;
