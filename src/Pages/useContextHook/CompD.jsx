import React, { useContext, useEffect, useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View, FlatList, SectionList } from 'react-native'
import { UserContext } from './UseContextHook'


const ChildD = (props) => {
    // const [data, updateUserData] = useContext(UserContext);
    // const [name, setName] = useState(data.name)
    // const [email, setEmail] = useState(data.email)

  
    
    return (
        <View style={{ marginTop: 50 }}>
            <Text>CHILD D</Text>
            {/* <Text style={{ color: 'black', fontSize: 20 }}>CHILD D : {data.name}</Text>
            <Text style={{ color: 'black', fontSize: 20 }}>CHILD D: {data.email}</Text> */}

            {/* <TextInput value={name}
                onChangeText={(txt) => { setName(txt) }}
                placeholder='User Name'
                style={{
                    width: '80%', borderWidth: 1, borderColor: "gray", padding: 10

                }} /> */}



            {/* <TextInput value={email} onChangeText={(txt) => { setEmail(txt) }} placeholder='Email' style={{ width: '80%', borderWidth: 1, borderColor: "gray", padding: 10 }} /> */}


            {/* <Button title={'Update D'} onPress={() => {
                updateUserData({
                    name,
                    email
                })
            }} /> */}
        </View>
    )

}

export default ChildD;