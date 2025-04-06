import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View, FlatList, SectionList } from 'react-native'
import ChildC from './CompC'


const ChildB = (props) => {
    //const {data} = props;

    return (
        <View style={{  marginTop: 50 }}>
            <Text>CHILDB</Text>


            {/* <ChildC data={data}/> */}
            <ChildC />
        </View>
    )

}

export default ChildB;