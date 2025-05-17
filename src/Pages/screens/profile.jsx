import React from 'react';
import { Alert, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppHeader from '../../Components/AppHeader';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { deleteUser } from '../../redux/slices/UserSlice';

const Profile = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch()
  const { isLoading, userList, loginData } = useSelector(state => state.user);
  const onDeleteUser = (id) => {
    dispatch(deleteUser(id))
      Alert.alert('Success', 'User Deleted Successfully')
  }

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
                   
                  </View>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                  <View style={styles.iconContainer}>
                      <Feather onPress={() => navigation.navigate('AddUser', { data: item, isEdit: true })} name="edit" size={30} color="black" />
                  </View>
                  <View style={styles.iconContainer}>
                      <AntDesign onPress={() => onDeleteUser(item.id)} name="delete" size={30} color="red" />
                  </View>
              </View>
          </View>
      )
  }


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AppHeader title="User" showBackButton={false} onPress={() => navigation.goBack()} />
      <FlatList
        data={userList}
        keyExtractor={item => item.id}
        renderItem={renderUserItem}

      />

      <TouchableOpacity onPress={() => navigation.navigate('AddUser', { data: [], isEdit: false })} style={styles.addbtn}>
        <Text style={{ fontSize: 20 }}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Profile
const styles = StyleSheet.create({
  addbtn: {
    position: 'absolute',
    bottom: 40,
    right: 20,
    backgroundColor: 'lightblue',
    height: 60,
    width: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center'
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