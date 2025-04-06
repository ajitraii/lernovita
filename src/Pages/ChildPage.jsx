

import React, { useEffect, useRef, useState } from 'react';
import {
    Button,
    StatusBar,
    Text,
    TextInput,
    View,
} from 'react-native'; //Core Components


const ChildPage = () => {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState('');
    const countRef = useRef(null)
    const inputRef = useRef(null)

    console.log('inputRef', inputRef);
    // useEffect(() => {
    //     // console.log('child triggers')

    //     return () => {
    //         console.log('cleanUP Function')
    //     }
    // }, [])


    const calculation = () => {
        console.log('child-triggers');
        countRef.value += 1

        // setCount(prev => prev + 1)
    }

    useEffect(() => {
        calculation()

    })

    return (
        <View>
            <StatusBar barStyle={'dark-content'} />
            <Text>CHILD</Text>
            <TextInput ref={inputRef} value={input} placeholder='username' style={{ borderWidth: 1, borderColor: 'gray', padding: 10, width: '50%' }} onChangeText={(txt) => setInput(txt)} />
            {/* <Text>{count}</Text> */}
            <Button title={'SUBMIT'} onPress={() => { inputRef.current.setNativeProps({
                style:{
                    backgroundColor:'green'
                }
            }) }} />
        </View>
    )
}

export default ChildPage;
