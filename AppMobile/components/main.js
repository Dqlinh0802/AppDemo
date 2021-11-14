import React, {Component} from 'react'
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity
} from 'react-native'
import {
    IntroComponent, 
    Screen1, 
    Page1, 
    Page2, 
    Page3, 
    History, 
    Messages, 
    HomePage, 
    Account, 
    vnexpress1, 
    vnexpress2} from './screens'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Tabs = () =>{
  return(
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="HomePage" component={HomePage} options={{
                tabBarIcon: ({ color, size }) => (
                    <Icon name="home" size={27} color="black" />
                )
            }}/>
            <Tab.Screen name="History" component={History} options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="history" size={27} color="black" />
                )
            }}/>    
            <Tab.Screen name="Messages" component={Messages} options={{
                tabBarIcon: ({ color, size }) => (
                    <AntDesign name="message1" size={20} color="black" />
                )
            }}/>    
            <Tab.Screen name="Account" component={Account} options={{
                tabBarIcon: ({ color, size }) => (
                    <Icon name="user" size={25} color="black" />
                )
            }}/>   
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
                <Stack.Screen name="Page2" component={Page2} />
                <Stack.Screen name="Page3" component={Page3} />
                <Stack.Screen name="vnexpress1" component={vnexpress1} />
                <Stack.Screen name="vnexpress2" component={vnexpress2} />
                <Stack.Screen name="Screen1" component={Screen1} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}