import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity,SafeAreaView, Button} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { NavigationContainer } from '@react-navigation/native';
// Add icon
import Icon from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
import Material from 'react-native-vector-icons/MaterialCommunityIcons'
//import style
import styles from "../styles/Styles1"


export default Page3 = ({ navigation }) => {
  
  return(
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>
          Webview - Page3
        </Text>
        <Text style={styles.link}>
          Link: page1.html
        </Text>
      </View>
      <View style={styles.btn}>
        <TouchableOpacity onPress = {() => {
          navigation.navigate("Home");
          }}>
            <Text style={styles.txt}>
                Touch go to HomePage
            </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}