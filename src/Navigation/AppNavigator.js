import { createStackNavigator } from "@react-navigation/stack"
import React from 'react'
import LoginPage from "../Pages/Login/LoginPage"
import DrawerNavigator from "./DrawerNavigation"

const Stack = createStackNavigator()
const AppNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown : false}} initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginPage} />
            <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
        </Stack.Navigator>
    )
}

export default AppNavigator