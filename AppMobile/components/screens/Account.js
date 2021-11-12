import React,{Component} from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity
} from 'react-native'
import styles from "../styles/Styles1"

export default Account = () => {
  return(
    <View style={styles.container}>
        <Text style={styles.title}>
            Account
        </Text>
        <Text style={styles.text}>
            Link:  . . .
        </Text>

    </View>
);
}