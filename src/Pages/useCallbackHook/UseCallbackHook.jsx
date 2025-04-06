import React, { useCallback, useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import ChildComp from "./ChildComp";


const UseCallbackHook = () => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    const [visible, setVisible] = useState(true);

    //Syntax:
    // useCallback(() => {}, [])

    const onVisibleClick = useCallback(() => {
        for (let i = 0; i < 12000; i++) { }
        console.log('onVisibleClick-triggers')
    }, [])

    // const onVisibleClick = () => {
    //     for(let i=0; i<12000; i++){}
    //     console.log('onVisibleClick-triggers')
    // }

    // useEffect(() => {
    //     onVisibleClick()

    // }, [onVisibleClick])
    return (
        <View style={{ marginTop: 200, justifyContent: 'center', alignItems: 'center' }}>
            <Text>UseCallbackHook</Text>
            <Text>{count}</Text>
            <Text>{count2}</Text>
            <ChildComp count={count} onVisibleClick={onVisibleClick}/>
            <Button title='Increment' onPress={() => { setCount(prev => prev + 1) }} />
            <Button title='Increment 2' onPress={() => { setCount2(prev => prev + 1) }} />
        </View>
    )
}

export default UseCallbackHook