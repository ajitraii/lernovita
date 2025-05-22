import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, StatusBar, SafeAreaView, Button } from "react-native";
import AppHeader from "../../Components/AppHeader";
import { useDispatch } from "react-redux";
import { storeLoginData } from "../../redux/slices/UserSlice";
import { saveUserId } from "../../Utils/AsyncStorageHelper";
import { createNewTable, createTable } from "../../database/Userdb";
import { predefinedFun } from "../../Utils/TestAnalytics";
import { AppEvents } from "../../Utils/AppEvents";
import { db } from "../../database/db";


const LoginPage = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch()
    const obj = {
        name: 'ajit',
        age: 25
    }

    const saveUserData = async () => {
        let id = '123'
        await saveUserId(id)
    }
    const createUserTable = async () => {

        //  createNewTable(db)
        createTable(db)
    }

    const captureLoginEvent = async () => {
        await AppEvents('Login', {
            id: '1357',
            username: 'Ajit'
        })
    }
    return (
        <View style={{ flex: 1, }}>
            <StatusBar barStyle={'dark-content'} />
            <AppHeader title={'Login'} />
            <Text style={{ color: 'red', fontSize: 50 }}>Login Page</Text>
            {/* navigation.navigate('AboutUs',{data : obj}) */}
            {/* navigation.replace('AboutUs') */}
            <Button title='Login' onPress={() => {
                //navigation.navigate('AboutUs', { data: obj }) 
                // dispatch(storeLoginData(obj))
                // navigation.navigate('DrawerNavigator')

                // API CALLING THROUGH REDUX

                // saveUserData()
                // navigation.navigate('Product')

                // for offline 
                captureLoginEvent()
                createUserTable()
                navigation.navigate('imagePicker')

            }} />
        </View>
    )
}

export default LoginPage