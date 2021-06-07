import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LogIn from './components/LogIn';
import IssuePage from './components/IssuePage';
import IssueDescriptionPage from './components/IssueDescriptionPage';
import Issue from './components/Issue';
import IssueComment from './components/IssueComment';

export default function App() {
  return (
    <View style={styles.container}>
      <LogIn/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
