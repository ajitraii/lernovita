import { createStackNavigator } from "@react-navigation/stack"
import React from 'react'
import LoginPage from "../Pages/Login/LoginPage"
import DrawerNavigator from "./DrawerNavigation"
import ProductPage from "../Pages/productPage/ProductPage"
import UserDetails from "../Pages/offlinePage/UserDetails"
import RegUser from "../Pages/offlinePage/RegUser"

const Stack = createStackNavigator()
const AppNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginPage} />
            <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
            <Stack.Screen name="Detail" component={UserDetails} />
            <Stack.Screen name="RegUser" component={RegUser} />

            {/* <Stack.Screen name="Product" component={ProductPage} /> */}
            {/* <Stack.Screen name="ProductDetail" component={DrawerNavigator} /> */}
        </Stack.Navigator>
    )
}

export default AppNavigator