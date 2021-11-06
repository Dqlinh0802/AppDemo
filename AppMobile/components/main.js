import React, {Component} from 'react'
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity
} from 'react-native'
import IntroComponent from './intro'
import Screen1 from './logo'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

export default RootComponent = function() {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="IntroComponent">
                <Stack.Screen name="IntroComponent" component={IntroComponent} />
                <Stack.Screen name="Screen1" component={Screen1} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}