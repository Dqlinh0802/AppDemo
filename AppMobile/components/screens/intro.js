import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { NavigationContainer } from '@react-navigation/native';
import styles from "../styles/Styles_intro"
 

export default class IntroComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false,
    };
  }
  _renderItem = ({item}) => {
    return (
      <View style={styles.container}>
      <View  style={styles.circle}>
          <Text style={styles.text_in_circle}>{item.text_in_circle}</Text>
      </View>
      <Text style={styles.title}>{item.title}</Text>
      <View style={{height: '20%', width: '100%'}}>
      <Text style={styles.text}>{item.text}</Text>
  </View>
  </View>
    );
  };
  _renderNextButton = () => {
    return (
      <View style={styles.next_button}>
        <View style={styles.buttonCircle}>
        <Text style={{fontSize: 18, color: 'black'}}>
          Next
        </Text>
        </View>
      </View>
      
    );
  };
  _renderDoneButton = () => {
    return (
      <View style={styles.done_button}>
        <TouchableOpacity style={styles.buttonCircle} onPress = {() => {
          this.props.navigation.navigate("Screen1");
          this.setState({isBottomShert: true});
          }}>
          <Text  style={{fontSize: 18, color: 'black'}}>
            Start
          </Text>
    </TouchableOpacity> 
      </View>

    );
  };

  render() {
    if (this.state.showRealApp) {
      return <App />;
    } else {
      return (
        <AppIntroSlider
          activeDotStyle = {{width: 30, borderRadius: 20, backgroundColor: 'green' }}
          dotStyle = {{width:20, backgroundColor:'green'}}
          renderItem={this._renderItem}
          bottomButton
          renderDoneButton={this._renderDoneButton}
          renderNextButton={this._renderNextButton}
          data={slides}
        />
      );
    }
  }
}

  const slides = [
    {
      key: 'one',
      title: 'EXCLUSIVELY\nON xxxx',
      text: 'Enter you phone number to continue',
      text_in_circle: 'H',
    },
    {
      key: 'two',
      title: 'ALLOW PUSH\nNOTIFICATION?',
      text: 'xxxxxx',
      text_in_circle: 'Push Notification',
    },
    {
      key: 'three',
      title: 'ALLOW PUSH\nNOTIFICATION?',
      text: 'Grant the "Alway in use" permission\n will allow us access to you background',
      text_in_circle: 'Location',
    },
    {
      key: 'four',
      title: 'READY TO\n START?',
      text: 'Grant the "Alway in use" permission\n will allow us access to you background',
      text_in_circle: 'Ready',
    },
  ];