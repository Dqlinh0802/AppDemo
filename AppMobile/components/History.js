import React,{Component} from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity
} from 'react-native'

export default History = () => {
    return(
        <SafeAreaView style={{height: '100%', width: '100%', backgroundColor: '#fca788'}}>
          <View style={{height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{height: '50%', width: '100%', justifyContent: 'flex-end', alignItems: 'center'}}>
              <Text style={{fontSize: 18}}>
                Webview - Page2
              </Text>
              <Text style={{fontSize: 16}}>
                Link: page1.html
              </Text>
            </View>
            <View style={{height: '50%', width: '100%', justifyContent: 'flex-start', alignItems: 'center'}}>
              <TouchableOpacity>
                  <Text>
                      Touch go to page 2
                  </Text>
              </TouchableOpacity>
            </View>
          </View>   
        </SafeAreaView>
    )
}