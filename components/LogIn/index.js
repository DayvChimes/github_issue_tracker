import React from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
} from 'react-native';
import styles from './styles';
import TextInputField from '../TextInputField/index'

const LogIn = (props) =>{

const handleClick=(e)=>{
  console.log(e.target);
};

const backgroundColor='#171A20CC';
const textColor = '#FFFFFF';

  return(
<View style={styles.page}>
<View style={styles.logo}> 
<Image source={require('../../assets/drone.png')} style={styles.image} />
</View>
<Text style={styles.title}>
Welcome to The Github issue Tracker
</Text>
<View style={styles.inputcontainer}>
  <TextInputField
  icon="user"
  placeholder="Github Username"
  />
  <TextInputField
  icon="github"
  placeholder="Enter Repository Name"
  />
</View>
<View style = {styles.container}>
  <Pressable
  style= {[styles.button, {backgroundColor: backgroundColor}]}
      onPress={() => handleClick()}>
      <Text style= {[styles.subtitle, {color: textColor}]}>View</Text>
  </Pressable>
 </View>
</View>
  );
};

export default LogIn;