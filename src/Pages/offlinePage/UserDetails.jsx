import React, { useEffect, useState } from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppHeader from '../../Components/AppHeader'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import { getRealmDb } from '../../realm/Realm'


const UserDetails = () => {
    const navigation = useNavigation();
    const isFocused = useIsFocused()
    const [userList, setUserList] = useState([])

    const loadUser = async () => {
        const realm = await getRealmDb()
        // console.log('users', realm)
        const allUers = realm.objects('User').sorted('_id')
        console.log('users', allUers)
        setUserList([...allUers])
    }

    useEffect(() => {
        loadUser()
    }, [])

    const renderUserItem = (props) => {
        const { item } = props;

        return (
            <View style={{ width: '95%', padding: 10, backgroundColor: '#fff', borderRadius: 5, borderRadius: 3, alignSelf: 'center', margin: 5 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', }}>
                    <Image style={{ height: 70, width: 70, }} source={require('../../Asessts/Images/profile.png')} />

                    <View style={{ marginLeft: 30 }}>
                        <Text style={styles.heading}>{item ? item?.name : ''}</Text>
                        <Text style={styles.subHeading}>{item ? item?.email : ''}</Text>
                        <Text style={styles.subHeading}>{item ? item?.gender : ''}</Text>

                    </View>
                </View>

            </View>
        )
    }
    return (


        <SafeAreaView style={{ flex: 1 }}>
            <AppHeader title="Offline User" showBackButton={false} onPress={() => navigation.goBack()} />
            {userList.length > 0 ? <FlatList
                data={userList}
                keyExtractor={item => item.id}
                renderItem={renderUserItem}

            /> : <View>
                <Text>No User Found</Text></View>}

            <TouchableOpacity onPress={() => navigation.navigate('RegUser')} style={styles.addbtn}>
                <Text style={{ fontSize: 20 }}>+</Text>
            </TouchableOpacity>
        </SafeAreaView>

    )
}

export default UserDetails
const styles = StyleSheet.create({
    addbtn: {
        position: 'absolute',
        bottom: 40,
        right: 20,
        backgroundColor: 'lightblue',
        height: 60,
        width: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    heading: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold'
    },
    subHeading: {
        fontSize: 16,
        color: 'gray'
    }
})