import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View, FlatList, SectionList } from 'react-native'
import ChildB from './CompB';


const ChildA = (props) => {

//    const {data} = props;

    return (
        <View style={{  marginTop: 50 }}>

            <Text>CHILDA</Text>
           
        
           {/* <ChildB data={data}/> */}
           <ChildB />
        </View>
    )

}

export default ChildA;