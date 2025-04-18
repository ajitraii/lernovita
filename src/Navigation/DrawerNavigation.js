
import React from 'react'
import { createDrawerNavigator } from "@react-navigation/drawer"
import Home from '../Pages/screens/Home'
import Profile from '../Pages/screens/profile'
import Icon from 'react-native-vector-icons/Entypo';
import { Text, View } from 'react-native';
import CustomDrawer from '../Components/CustomDrawer/CustomDrawer';
import BottomTab from './BottomTab';


const Drawer = createDrawerNavigator()
const DrawerNavigator = () => {
    return (
        <Drawer.Navigator screenOptions={{
            drawerActiveBackgroundColor: "red",
            drawerStyle: {
                backgroundColor: 'pink'
            }
        }} initialRouteName="Home" drawerContent={props => <CustomDrawer {...props} />}>
            <Drawer.Screen name="Home" component={BottomTab} options={{
                drawerIcon: () => {
                    return (
                        <Icon name="home" size={30} color="#000" />
                    )
                },
                drawerLabel: () => {
                    return (
                        <View>
                            <Text>HOME</Text>
                        </View>
                    )
                }
            }} />
            <Drawer.Screen name="Profile" component={Profile} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator