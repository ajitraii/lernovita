import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import AppHeader from '../../Components/AppHeader'
import { SafeAreaView } from 'react-native-safe-area-context'
import { insertUsers, getDBConnection } from '../../database/Userdb'
import { getRealmDb } from '../../realm/Realm'
import { useNavigation } from '@react-navigation/native'

const RegUser = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const navigation = useNavigation()
    const handleSubmit = async () => {
        const realm = await getRealmDb()
        const payload = {
            _id: Date.now(),
            name: name,
            email: email,
            address: address
        }
        realm.write(() => {
            realm.create('User', payload)
        })
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <AppHeader title="Offline Register" showBackButton={false} onPress={() => navigation.goBack()} />
            <View>
                <TextInput
                    value={name}
                    style={styles.input}
                    onChangeText={txt => setName(txt)}
                    placeholder={'Enter Username'}
                />
                <TextInput
                    value={email}
                    style={styles.input}
                    onChangeText={txt => setEmail(txt)}
                    placeholder={'Enter Email'}
                />
                <TextInput
                    value={address}
                    style={styles.input}
                    onChangeText={txt => setAddress(txt)}
                    placeholder={'Enter Address'}
                />
                <TouchableOpacity onPress={handleSubmit} style={styles.btn}>
                    <Text style={{ alignSelf: 'center' }}>{'Submit'}</Text>
                </TouchableOpacity>
            </View>


        </SafeAreaView>
    )
}

export default RegUser
const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: "gray",
        padding: 10,
        width: '90%',
        borderRadius: 10,
        margin: 10
    },
    btn: {
        width: '90%',
        alignSelf: 'center',
        backgroundColor: 'lightblue',
        padding: 15,
        borderRadius: 10,
        margin: 10
    },
})