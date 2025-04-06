

import React, { useEffect, useState } from 'react';
import {
    Button,
    FlatList,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { Styles } from '../../Utils/styles/Styling';
import ChildPage from '../ChildPage';


const Components = () => {
    const [username, setUserName] = useState('RAJA');
    const [count, setCount] = useState(0);
    const [visible, setVisible] = useState(true);

    const apiCall = () => {
        console.log('api call is being triggered')
    }
    //UPDATING PHASE
    // useEffect(() => {

    //     apiCall()
    // }, [count])



    const DATA = [
        {
            id: 1,
            name: 'Ajit',
            email: 'ajitrai@gmail.com',
            age: 20
        },
        {
            id: 2,
            name: 'John',
            email: 'ajitrai@gmail.com',
            age: 20
        },
        {
            id: 3,
            name: 'Ugan',
            email: 'ugan@gmail.com',
            age: 20
        },
        {
            id: 4,
            name: 'Vivek',
            email: 'ajitrai@gmail.com',
            age: 22
        },
    ]
    let name = 'RAJA'
    const UserList = ({ item, index }) => {
        return (
            <View style={Styles.list}>
                <Text>{item.name}</Text>
                <Text>{item.email}</Text>
                <Text>{item.age}</Text>
            </View>
        )
    }

    // function onSubmit (){
    //     alert('function called')
    // }

    const onSubmit = (name) => {
        name = 'AJIT'
        setUserName('AJIT')
    }

    return (
        <View>
            <Text>Components</Text>
            <Text style={{ color: 'red', fontSize: 20 }}>{name}</Text>
            <Text style={{ color: 'red', fontSize: 20 }}>{username}</Text>
            <Text style={{ color: 'red', fontSize: 20 }}>{count}</Text>
            {/* <FlatList
                data={DATA}
                keyExtractor={item => item.id}
                renderItem={UserList}

            /> */}
            <Button title={'SUBMIT'} onPress={() => { setVisible(!visible) }} />
            {visible && <ChildPage />}
        </View>
    )
}



export default Components;


//Named Export

export const Login = () => {
    return (
        <View>
            <Text>Login</Text>
        </View>
    )
}

export const Height = 120