import React,{Component} from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity
} from 'react-native'
import styles from "../styles/Styles1"

export default Screen1 = props => {
    setTimeout(() => {
      props.navigation.replace("Home");
    }, 1000);
    return(
        <View style={styles.container}>
          <Text style={styles.text}>
            Splash screen
          </Text>
          <View style={styles.logo}>
            <Text style={{fontSize: 18}}>
              Logo
            </Text>
          </View>
          <Text style={styles.text}>
            Splash screen
          </Text>
        </View>
    )
}
