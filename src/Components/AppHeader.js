import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const AppHeader = ({ title, showBackButton = true, onPress }) => {
    const navigation = useNavigation();
    // console.log(navigation)
    return (
        <View style={styles.headerContainer}>
            {/* Back Button */}
            {showBackButton ? (
                <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.iconContainer}>
                    <Icon name="menu" size={24} color="#fff" />
                </TouchableOpacity>
            ) : (

                < TouchableOpacity onPress={ onPress} style={styles.iconContainer}>
                    <Icon name="keyboard-backspace" size={24} color="#fff" />
                </TouchableOpacity>
            )
            }

            {/* Title */}
            <Text style={styles.title}>{title}</Text>

            {/* Right Icon (Menu/Profile) */}
            <TouchableOpacity onPress={() => alert('Menu clicked')} style={styles.iconContainer}>
                {/* <Icon name="search" size={24} color="#fff" /> */}
            </TouchableOpacity>
        </View >
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 60,
        backgroundColor: '#83cefc',
        paddingHorizontal: 15,
       
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    iconContainer: {
        padding: 10,
    },
    placeholder: {
        width: 44, // Same as icon width to balance layout
    },
});

export default AppHeader;