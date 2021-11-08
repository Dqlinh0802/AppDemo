import React, {Component} from 'react'
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity
} from 'react-native'
import IntroComponent from './intro'
import Screen1 from './logo'
import Page1 from './Page1'
import History from './History'
import Messages from './Messages'
import HomePage from './HomePage'
import Account from './Account'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () =>{
  return(
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="HomePage" component={HomePage}/>
            <Tab.Screen name="History" component={History} />    
            <Tab.Screen name="Messages" component={Messages} />    
            <Tab.Screen name="Account" component={Account} />   
        </Tab.Navigator>
  );
}

export default RootComponent = function() {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="IntroComponent">
                <Stack.Screen name="IntroComponent" component={IntroComponent} />
                <Stack.Screen name="Home" component={Tabs} />
                <Stack.Screen name="Page1" component={Page1} />
                <Stack.Screen name="Screen1" component={Screen1} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}