import { createStackNavigator } from "@react-navigation/stack"
import React from 'react'
import AboutUsPage from "../Pages/aboutUs/AboutUsPage"
import LoginPage from "../Pages/Login/LoginPage"

const Stack = createStackNavigator()
const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginPage} />
            <Stack.Screen name="AboutUs" component={AboutUsPage} />
        </Stack.Navigator>
    )
}

export default AppNavigator