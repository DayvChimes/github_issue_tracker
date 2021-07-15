import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Pressable,
  Image,
  TextInput,
  ActivityIndicator,
  Keyboard,
  ScrollView,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import { Formik } from "formik";
import TextInputField from "../TextInputField/index";
import Issue from "../Issue";
import { SearchBar } from "react-native-elements";
import { Feather as Icon } from "@expo/vector-icons";
import { connect } from "react-redux";
import {
  getIssues,
  getMoreIssues,
  userRequest,
  setIssuesEdges,
  getFilteredIssues,
} from "../../actions/username";
import {
  getMoreRepoIssues,
  getRepositoryIssues,
  repositoryRequest,
  getFilteredRepoIssues,
} from "../../actions/repository";
import {
  setLoading,
  setFilterby,
  setLabel,
  setStatus,
} from "../../actions/main";
import {
  setSearchRequest,
  getSearchIssues,
  setSearch,
} from "../../actions/search";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Picker } from "@react-native-picker/picker";
import filter from "lodash.filter";
import { debounce } from "lodash";
import { Avatar, Input } from "@ui-kitten/components";
import { Map } from "immutable";
import produce from "immer";
import { MaterialIcons } from "@expo/vector-icons";

import styles from "./styles";

const IssueList = (props) => {
  const {
    loading,
    status,
    Search,
    label,
    search,
    navigation,
    issues,
    username,
    userIssues,
    moreUserIssues,
    repoIssues,
    repository,
    repouser,
    getRepoIssues,
    getMoreRepoIssues,
    error,
    reporequest,
    userrequest,
    getsearchIssues,
    usernameRequest,
    repoRequest,
    filterValue,
    setFilter,
    getFilteredUserIssues,
    getFilteredRepositoryIssues,
    searchRequest,
    setNewLabel,
    setNewStatus,
  } = props;

  const state = {
    data: [...issues.edges],
    error: null,
    query: "",
    fullData: { issues },
    search: false,
    refreshing: false,
  };

  const first = 10;
  const type = "ISSUE";
  const after = null;
  const field = "CREATED_AT";
  const labelnew = null;
  const statusnew = null;

  const [newData = issues.edges, setNewData] = useState();

  const [modalOpen, setModalOpen] = useState(false);

  const [localLoading, setLocalLoading] = useState(false);

  const backgroundColor = "#3E4DC3";
  const textColor = "#FFFFFF";

  useEffect(() => {
    setLocalLoading(false);
  }, [localLoading]);

  const logInSubmit = (values) => {
    console.log(values);
    console.log("logInSubmit");
    //console.log("The User Request in LogIn is: "+userrequest);
    //console.log("The Repo Request in LogIn is: "+reporequest);
    repoRequest(false);
    usernameRequest(false);
    setFilter(field);
    setNewLabel(labelnew);
    setNewStatus(statusnew);
    searchRequest(false);
    //console.log("The User Request in LogIn is now: "+userrequest);
    //console.log("The Repo Request in LogIn is now: "+reporequest);
    values.repository == ""
      ? props.userIssues(values.username, first, after, navigation)
      : props.getRepoIssues(
          values.username,
          values.repository,
          first,
          after,
          navigation
        );
  };

  const onChangeSearchInput = (e) => {
    console.log(e);
    setLocalLoading(true);
    debouncedSearch(e);
  };

  const debouncedSearch = debounce(function (query) {
    const data = filter(state.fullData.issues.edges, (issue) => {
      return contains(issue, query);
    });
    Search(query);
    setNewData((prevState) => {
      prevState = data;
      return [...prevState];
    });
  }, 500);

  const contains = ({ node }, query) => {
    const {
      author: { login },
      repository: { name },
      state,
      title,
    } = node;
    if (
      name.includes(query) ||
      state.includes(query) ||
      login.includes(query) ||
      title.includes(query)
    ) {
      return true;
    }
    return false;
  };

  var afterUser = null;

  var onEndReachedCalledDuringMomentum = true;

  (function () {
    var days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    var months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    Date.prototype.getMonthName = function () {
      return months[this.getMonth()];
    };
    Date.prototype.getDayName = function () {
      return days[this.getDay()];
    };
  })();

  var now = new Date();

  var day = now.getDayName();
  var month = now.getMonthName();
  var date = new Date().getDate();

  const handleLoadMore = () => {
    afterUser = issues.pageInfo.endCursor;
    Search("");
    setLocalLoading(true);
    setNewData(issues.edges);
    if (userrequest == true) {
      moreUserIssues(username, first, afterUser, filterValue, label, status);
    } else {
      getMoreRepoIssues(
        repouser,
        repository,
        first,
        afterUser,
        filterValue,
        label,
        status
      );
    }
  };

  const handleRefresh = () => {
    setNewData(issues.edges);
    if (userrequest == true) {
      userIssues(username, first, after, navigation);
    } else {
      getRepoIssues(repouser, repository, first, after, navigation);
    }
  };

  const filterType = (item) => {
    setFilter(item);
    switch (item) {
      case "CREATED_AT":
        if (userrequest) {
          getFilteredUserIssues(username, first, after, item, label, status);
        } else {
          getFilteredRepoIssues(
            repouser,
            repository,
            first,
            after,
            item,
            label,
            status
          );
        }
        break;
      case "UPDATED_AT":
        if (userrequest) {
          getFilteredUserIssues(username, first, after, item, label, status);
        } else {
          getFilteredRepoIssues(
            repouser,
            repository,
            first,
            after,
            item,
            label,
            status
          );
        }
        break;
      case "COMMENTS":
        if (userrequest) {
          getFilteredUserIssues(username, first, after, item, label, status);
        } else {
          getFilteredRepoIssues(
            repouser,
            repository,
            first,
            after,
            item,
            label,
            status
          );
        }
        break;
    }
  };

  const getHeader = () => {
    return (
      <View>
        <View style={styles.header}>
          <View style={styles.datecontainer}>
            <Text style={styles.present}>Today</Text>
            <Text styles={styles.date}>
              {day}, {date} {month}
            </Text>
          </View>
          <Modal visible={modalOpen} animationType="slide">
            <KeyboardAwareScrollView>
              <View style={styles.modalcontainer}>
                {loading == true ? (
                  <View style={styles.loading2}>
                    <ActivityIndicator size="large" color="#000FFF" />
                    <Text style={styles.subtitle}>Fetching Issues...</Text>
                  </View>
                ) : (
                  <View>
                    <View style={styles.modalClose}>
                      <MaterialIcons
                        name="close"
                        size={30}
                        onPress={() => setModalOpen(false)}
                      />
                    </View>
                    <Text style={styles.title}>Track More GitHub Issues</Text>
                    <Formik
                      initialValues={{ username: "", repository: "" }}
                      onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                          logInSubmit(values);
                          setSubmitting(false);
                        }, 400);
                      }}
                    >
                      {(props) => (
                        <View>
                          <View style={styles.inputcontainer}>
                            <TextInputField
                              icon="user"
                              placeholder="Github Username"
                              value={props.values.username}
                              onChangeText={props.handleChange("username")}
                            />
                            <TextInputField
                              icon="git-branch"
                              placeholder="Enter Repository Name"
                              value={props.values.repository}
                              onChangeText={props.handleChange("repository")}
                            />
                          </View>
                          <View style={styles.containerlogin}>
                            <Pressable
                              style={[
                                styles.button,
                                { backgroundColor: backgroundColor },
                              ]}
                              onPress={props.handleSubmit}
                            >
                              <Text
                                style={[styles.subtitle, { color: textColor }]}
                              >
                                View
                              </Text>
                            </Pressable>
                          </View>
                        </View>
                      )}
                    </Formik>
                  </View>
                )}
              </View>
            </KeyboardAwareScrollView>
          </Modal>
          <MaterialIcons
            name="settings"
            size={30}
            style={styles.settings}
            onPress={() => setModalOpen(true)}
          />
        </View>
        <View style={styles.searchcontainer}>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={onChangeSearchInput}
            status="info"
            placeholder="Search"
            clearButtonMode="always"
            style={styles.searchinput}
            textStyle={{ color: "#000" }}
          />
        </View>
        <View style={styles.topbar}>
          <Picker
            selectedValue={filterValue}
            onValueChange={(itemValue, itemIndex) => {
              console.log(itemValue);
              filterType(itemValue);
            }}
            style={styles.dropdown}
          >
            <Picker.Item label="Created At" value="CREATED_AT" />
            <Picker.Item label="Updated At" value="UPDATED_AT" />
            <Picker.Item label="Comments" value="COMMENTS" />
          </Picker>
        </View>
        <View style={styles.space}></View>
      </View>
    );
  };

  const getFooter = () => {
    return (
      <View style={styles.loading}>
        {localLoading == false ? null : (
          <View style={styles.indicator}>
            <ActivityIndicator size="large" color="#0000ff" />
            <Text style={[styles.loadingtext]}>Fetching Issues...</Text>
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {console.log(
        "The Repo Request is: " + reporequest + " in the IsssueList"
      )}
      {console.log(
        "The User Request is: " + userrequest + " in the IsssueList"
      )}
      <FlatList
        data={newData}
        renderItem={({ item }) => (
          <Issue issue={item.node} navigation={navigation} />
        )}
        keyExtractor={(item, index) => {
          return item.node.id;
        }}
        onMomentumScrollBegin={() => {
          onEndReachedCalledDuringMomentum = false;
        }}
        onEndReached={() => {
          if (!onEndReachedCalledDuringMomentum) {
            handleLoadMore();
            onEndReachedCalledDuringMomentum = true;
          }
        }}
        onEndReachedThreshold={0.05}
        initialNumToRender={50}
        ListHeaderComponent={getHeader}
        ListFooterComponent={getFooter}
        extraData={state.search}
        onRefresh={handleRefresh}
        refreshing={state.refreshing}
      />
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    filterValue: state.main.filter,
    status: state.main.status,
    label: state.main.label,
    loading: state.main.loading,
    search: state.search.search,
    userrequest: state.username.userRequest,
    reporequest: state.repository.repoRequest,
    username: state.username.username,
    repository: state.repository.repository.repository,
    repouser: state.repository.repository.username,
    moreIssues: state.username.moreIssues,
    repoIssues: state.repository.repositoryIssues,
    issues:
      state.username.userRequest == true
        ? state.username.userIssues
        : state.repository.repositoryIssues,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userIssues: (username, first, after, navigation) => {
      dispatch(getIssues(username, first, after, navigation));
    },
    getsearchIssues: (labels, first, after, type) => {
      dispatch(getSearchIssues(labels, first, after, type));
    },
    moreUserIssues: (username, first, after, field, labels, status) => {
      dispatch(getMoreIssues(username, first, after, field, labels, status));
    },
    getFilteredUserIssues: (username, first, after, field, labels, status) => {
      dispatch(
        getFilteredIssues(username, first, after, field, labels, status)
      );
    },
    getRepoIssues: (username, repository, first, after, navigation) => {
      dispatch(
        getRepositoryIssues(username, repository, first, after, navigation)
      );
    },
    getMoreRepoIssues: (
      username,
      repository,
      first,
      after,
      field,
      labels,
      status
    ) => {
      dispatch(
        getMoreRepoIssues(
          username,
          repository,
          first,
          after,
          field,
          labels,
          status
        )
      );
    },
    getFilteredRepositoryIssues: (
      username,
      repository,
      first,
      after,
      field,
      labels,
      status
    ) => {
      dispatch(
        getFilteredRepoIssues(
          username,
          repository,
          first,
          after,
          field,
          labels,
          status
        )
      );
    },
    Search: (search) => {
      dispatch(setSearch(search));
    },
    searchRequest: (request) => {
      dispatch(setSearchRequest(request));
    },
    repoRequest: (request) => {
      dispatch(repositoryRequest(request));
    },
    usernameRequest: (request) => {
      dispatch(userRequest(request));
    },
    setFilter: (filter) => {
      dispatch(setFilterby(filter));
    },
    setNewLabel: (label) => {
      dispatch(setLabel(label));
    },
    setNewStatus: (status) => {
      dispatch(setStatus(status));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IssueList);
