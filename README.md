npm install @react-navigation/native
npm install react-native-screens react-native-safe-area-context


npm install @react-navigation/stack
npm install react-native-gesture-handler


npm install @react-navigation/drawer    
npm install react-native-gesture-handler react-native-reanimated

npm install @react-navigation/bottom-tabs

plugins: ['react-native-reanimated/plugin'],



ELSE:
npm install @react-navigation/native @react-navigation/drawer react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context react-native-vector-icons


import React, { useState } from "react";
import { View } from "react-native";


const UseCallbackHook = () => {
   
    return(
        <View></View>
    )
}

export default UseCallbackHook


firebase setup 

https://rnfirebase.io/analytics/usage

1. @react-native-firebase/app
2. @react-native-firebase/analytics

2. firebase console
-> create a project 
Search for application id (android -> app -> build.gradlew (applicationId))
-> download google json file
-> place that file in app (android -> app)

 classpath 'com.google.gms:google-services:4.3.15' (android/build.gradle)
 apply plugin: 'com.google.gms.google-services' (android/app/build.gradle)

 dashboard : https://console.firebase.google.com/

 adb shell setprop debug.firebase.analytics.app com.reactnativebasic