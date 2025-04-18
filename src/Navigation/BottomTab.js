
import React from 'react'
import { createDrawerNavigator } from "@react-navigation/drawer"
import Home from '../Pages/screens/Home'
import Profile from '../Pages/screens/profile'
import Icon from 'react-native-vector-icons/Entypo';
import { Text, View } from 'react-native';
import CustomDrawer from '../Components/CustomDrawer/CustomDrawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserList from '../Pages/screens/UserList';
import Dashboard from '../Pages/screens/Dashboard';
import UserRegister from '../Pages/screens/UserRegister';


const Bottom = createBottomTabNavigator()
const BottomTab = () => {
    return (
        <Bottom.Navigator screenOptions={{ headerShown: false }}>
            <Bottom.Screen name="UserList" component={UserList} options={{
                tabBarIcon: () => {
                    return (
                        <Icon name="home" size={30} color="#000" />
                    )
                },
                tabBarLabel: () => {
                    return (
                        <View>
                            <Text>User List</Text>
                        </View>
                    )
                }
            }} />
            <Bottom.Screen name="Dashboard" component={Dashboard} />
            <Bottom.Screen name="UserRegister" component={UserRegister} />
        </Bottom.Navigator>
    )
}

export default BottomTab