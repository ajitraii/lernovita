import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, StatusBar, SafeAreaView, Button } from "react-native";


const LoginPage = () => {
    const navigation = useNavigation();
    const obj = {
        name: 'ajit',
        age: 25
    }
    return (
        <View style={{ flex: 1, }}>
            <StatusBar barStyle={'dark-content'} />
            <Text style={{ color: 'red', fontSize: 50 }}>Login Page</Text>
            {/* navigation.navigate('AboutUs',{data : obj}) */}
            {/* navigation.replace('AboutUs') */}
            <Button title='Login' onPress={() => { 
                //navigation.navigate('AboutUs', { data: obj }) 
                navigation.navigate('DrawerNavigator')
                }} />
        </View>
    )
}

export default LoginPage