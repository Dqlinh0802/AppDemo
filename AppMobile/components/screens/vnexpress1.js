import React from "react";
import{StyleSheet, view, Text, TouchableOpacity, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import styles from "../styles/Styles1"


export default class vnexpress1 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            vnexpress1: false
        }
    }

    render(){
        if(this.state.vnexpress1){
            return <App/>
        } else {
            return(
                <View style={styles.container}>
                    <Text style={styles.title}>
                        WEB VIEW - VNExpress
                    </Text>
                    <Text style={styles.text}>
                        Link: vnexpress.next
                    </Text>
                    <TouchableOpacity style={styles.link} onPress = {() => {
                        this.props.navigation.navigate("vnexpress2");
                    }} >
                        <Text style={styles.text}>
                            Press to go next page...
                        </Text>
                    </TouchableOpacity>
                </View>
            );
        }
    }
}