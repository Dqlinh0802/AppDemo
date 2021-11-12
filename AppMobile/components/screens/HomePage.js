import React,{Component} from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity
} from 'react-native'
// import Tabs from './MennuBar'
import styles from "../styles/Styles1"


export default HomePage = ({ navigation }) => {
  return(
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>
          Webview - HomePage
        </Text>
        <Text style={styles.link}>
          Link: page1.html
        </Text>
      </View>
      <View style={styles.btn}>
        <TouchableOpacity onPress = {() => {
          navigation.navigate("Page1");
          }}>
            <Text style={styles.txt}>
                Touch go to Page1
            </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
