import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

const CustomDrawer = (props) => {

    const { navigation } = props;
    // console.log(navigation)
    return (
        <View style={{ flex: 1, backgroundColor: '#83cefc', }}>
            <View style={{ alignItems: 'center' }}>
                <Image style={{ height: 140, width: 140, }} source={require('../../Asessts/Images/profile.png')} />
                <Text style={{ fontSize: 16, padding: 10 }}>Ajit</Text>
            </View>

            <View style={{ flex: 1 }}>
                <TouchableOpacity onPress={() => { navigation.navigate('Home') }} style={styles.placeholder}>
                    <View style={styles.iconContainer}>
                        <Icon name="home" size={30} color="black" />
                    </View>
                    <Text style={styles.text}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate('Profile') }} style={styles.placeholder}>
                    <View style={styles.iconContainer}>
                        {/* <Icon name="user" size={30} color="black" /> */}
                        <Feather name="user" size={30} color="black" />
                    </View>
                    <Text style={styles.text}>Profile</Text>
                </TouchableOpacity>



                <TouchableOpacity onPress={() => { }} style={[styles.placeholder, { position: 'absolute', bottom: 20, alignSelf: 'center', padding: 10 }]}>
                    <View style={styles.iconContainer}>

                        <Feather name="log-out" size={30} color="black" />
                    </View>
                    <Text style={styles.text}>Logout</Text>
                </TouchableOpacity>
            </View>


        </View>
    )

}

export default CustomDrawer
const styles = StyleSheet.create({
    placeholder: {

        flexDirection: "row",
        alignItems: 'center',
        marginHorizontal: 10,
        padding: 5
    },
    text: {
        fontSize: 20
    },
    iconContainer: {
        padding: 10,
    },
})