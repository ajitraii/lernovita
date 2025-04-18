import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { getRequest } from '../../api/api';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useIsFocused } from '@react-navigation/native';



const UserList = () => {

  const isFocused = useIsFocused()
  const [usersData, setUsersData] = useState([])


  const fetchUserList = async () => {

    try {

      const res = await getRequest('/data')
      setUsersData(res)
    } catch (error) {
      console.log('error', error)
    }
  }

  useEffect(() => {
    fetchUserList()
  }, [isFocused])

  const renderUserItem = (props) => {
    const { item } = props;

    return (
        <View style={{ width: '95%', padding: 10, backgroundColor: '#fff', borderRadius: 5, borderRadius: 3, alignSelf: 'center', margin: 5 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', }}>
                <Image style={{ height: 70, width: 70, }} source={require('../../Asessts/Images/profile.png')} />

                <View style={{ marginLeft: 30 }}>
                    <Text style={styles.heading}>{item ? item?.username : ''}</Text>
                    <Text style={styles.subHeading}>{item ? item?.email : ''}</Text>
                    <Text style={styles.subHeading}>{item ? item?.gender : ''}</Text>
                    <Text style={styles.subHeading}>{item ? item?.country : ''}</Text>
                    <Text style={styles.subHeading}>{item ? item?.state : ''}</Text>
                    <Text style={styles.subHeading}>{item ? item?.city : ''}</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                <View style={styles.iconContainer}>
                    <Feather onPress={() => navigation.navigate('AddUser', { data: item, isEdit: true })} name="edit" size={30} color="black" />
                </View>
                <View style={styles.iconContainer}>
                    <AntDesign onPress={() => onDeleteUser(item.id)} name="delete" size={30} color="black" />
                </View>
            </View>
        </View>
    )
}
  return (
    <SafeAreaView style={{ flex: 1, }}>
    {/* <AppHeader title={'Users'} showBackButton={true} /> */}
    <View style={{}}>
        <FlatList
            data={usersData}
            keyExtractor={item => item.id}
            renderItem={renderUserItem}

        />

    </View>




    {/* <TouchableOpacity onPress={() => { navigation.navigate('AddUser', { data: [], isEdit: false }) }} style={styles.add}>
        <View style={styles.iconContainer}>
            <Feather name="plus-circle" size={30} color="white" />
        </View>
    </TouchableOpacity> */}
</SafeAreaView>
  )
}

export default UserList
const styles = StyleSheet.create({
  add: {
      position: 'absolute',
      bottom: 100,
      right: 30,
      backgroundColor: 'lightblue',
      height: 60,
      width: 60,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center'
  },
  heading: {
      fontSize: 20,
      color: 'black',
      fontWeight: 'bold'
  },
  subHeading: {
      fontSize: 16,
      color: 'gray'
  }

})