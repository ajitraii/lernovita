import { Button, Text, View } from "react-native"
import React, { useMemo, useState } from 'react'




const UseMemoHook = () => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    // syntax:
    // useMemo(() => { }, [])

    const onVisibleClick = (x) => {
        for (let i = 0; i < 12000; i++) { }
        console.log('onVisibleClick-triggers')

        return x + 30
    }

    const calculateValue = useMemo(() => onVisibleClick(count), [count])

    return (
        <View style={{ marginTop: 200, alignItems: 'center' }}>
            <Text>UseMemoHook</Text>

            <Text>{count}</Text>
            <Text>{count2}</Text>
            <Text style={{ color: 'red' }}>{calculateValue}</Text>
            <Button title='Increment' onPress={() => { setCount(prev => prev + 1) }} />
            <Button title='Increment 2' onPress={() => { setCount2(prev => prev + 1) }} />
        </View>
    )
}

export default UseMemoHook