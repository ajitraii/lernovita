import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, Button } from "react-native";


const AboutUsPage = () => {
    const navigation = useNavigation();
    // const route = useRoute();
    // const {data} = route.params;

    const obj ={
        name:'raja',
        age:26
    }
    // console.log(route)
    return(
        <View>
            <Text>Login Page </Text>
            {/* <Text style={{fontSize:20, color:'green'}}>{data?.name}</Text> */}
            <Button title='Login' onPress={() => { navigation.push('AboutUs', { data: obj }) }} />
        </View>
    )
}

export default AboutUsPage