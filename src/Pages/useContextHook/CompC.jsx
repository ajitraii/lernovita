import React, { useContext, useEffect, useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View, FlatList, SectionList } from 'react-native'
import ChildD from './CompD'
import { UserContext } from './UseContextHook'


const ChildC = (props) => {
    // const {data} = props
    const [data, updateFun] = useContext(UserContext)
    // console.log(data)
    const [name, setName] = useState(data.name)
    const [email, setEmail] = useState(data.email)

    return (
        <View style={{ marginTop: 50 }}>
            <Text>CHILDC</Text>
            {/* <Text style={{ color: 'black', fontSize: 20 }}>CHILD c : {data.name}</Text>
            <Text style={{ color: 'black', fontSize: 20 }}>CHILD c: {data.email}</Text> */}
            <TextInput value={name}
                onChangeText={(txt) => { setName(txt) }}
                placeholder='User Name'
                style={{
                    width: '80%', borderWidth: 1, borderColor: "gray", padding: 10

                }} />



            <TextInput value={email} onChangeText={(txt) => { setEmail(txt) }} placeholder='Email' style={{ width: '80%', borderWidth: 1, borderColor: "gray", padding: 10 }} />

            <Button title={'Update C'} onPress={() => {
                updateFun({
                    name,
                    email
                })
            }} />
            <ChildD />
        </View>
    )

}

export default ChildC;