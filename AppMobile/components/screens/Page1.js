import React,{Component} from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity
} from 'react-native'
import styles from "../styles/Styles1"

export default Page1 = ({ navigation }) => {
  return(
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>
          Webview - Page1
        </Text>
        <Text style={styles.link}>
          Link: page1.html
        </Text>
      </View>
      <View style={styles.btn}>
        <TouchableOpacity onPress = {() => {
          navigation.navigate("Page2");
          }}>
            <Text style={styles.txt}>
                Touch go to Page2
            </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}