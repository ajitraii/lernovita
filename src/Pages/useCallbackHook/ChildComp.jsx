import React, { useState } from "react";
import { Text, View } from "react-native";

//  React.memo
const ChildComp = React.memo((props) => {
    const { count, onVisibleClick } = props
    // const [count2, setCount2] = useState(0)
    
    console.log('child re-render')
    return (
        <View>

            <Text>UseCallbackHook child</Text>
            <Text>{count}</Text>
        </View>
    )
})

export default ChildComp