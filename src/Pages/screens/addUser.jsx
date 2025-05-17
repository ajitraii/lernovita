import React, { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import AppHeader from "../../Components/AppHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import { RadioButton } from "react-native-paper";
import { Formik } from "formik";
import * as yup from 'yup';
import { useDispatch } from "react-redux";
import { addUser, updateUser } from "../../redux/slices/UserSlice";
import { useNavigation, useRoute } from "@react-navigation/native";

const AddUser = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const route = useRoute()
    const { data, isEdit } = route.params
    const initialValues = {
        username: isEdit ? data.username : '',
        email: isEdit ? data.email : '',
        gender: isEdit ? data.gender : '',


    }


    const validationSchema = yup.object({
        username: yup.string().min(3, 'Name should be greater than 3').required('Name is required'),
        email: yup.string().email('Invalid email').required('Email is required'),
    });

    const successAlert = (msg) => {
        Alert.alert('Success', msg)
        initialValues = {
            username: '',
            email: '',
            gender: ''

        }
        navigation.goBack()
    }

    const onAddOrUpdateUser = (values) => {
        const _values = {
            ...values,
            id: isEdit ? data.id : Date.now()
        }
        if (isEdit) {
            dispatch(updateUser({ id: _values.id, data: _values }))
            successAlert('User Updated Successfully')
        } else {
            dispatch(addUser(_values))
            successAlert('User Registered Successfully')
        }

    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <AppHeader title="Add User" showBackButton={false} onPress={() => navigation.goBack()} />

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                enableReinitialize={true}
                onSubmit={(values) => {
                    onAddOrUpdateUser(values)
                }}>
                {
                    ({ values, setFieldValue, handleSubmit, errors, resetForm }) => {
                        return (
                            <View >
                                <TextInput
                                    value={values.username}
                                    style={styles.input}
                                    onChangeText={txt => setFieldValue('username', txt)}
                                    placeholder={'Enter Username'}
                                />
                                {errors.username && <Text style={{ fontSize: 16, color: 'red' }}>{errors.username}</Text>}
                                <TextInput
                                    value={values.email}
                                    style={styles.input}
                                    onChangeText={txt => setFieldValue('email', txt)}
                                    placeholder={'Enter Email'} />
                                {errors.email && <Text style={{ fontSize: 16, color: 'red' }}>{errors.email}</Text>}
                                <RadioButton.Group onValueChange={value => setFieldValue('gender', value)} value={values.gender}>
                                    <View style={{ flexDirection: 'row', backgroundColor: '#fff', width: '95%', alignSelf: 'center', borderRadius: 10, marginTop: 10 }}>
                                        <RadioButton.Item label="Male" value="male" />
                                        <RadioButton.Item label="Female" value="female" />
                                        <RadioButton.Item label="Other" value="other" />
                                    </View>
                                </RadioButton.Group>


                                <TouchableOpacity onPress={handleSubmit} style={styles.btn}>
                                    <Text style={{ alignSelf: 'center' }}>{'Submit'}</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    }
                }
            </Formik>
        </SafeAreaView>
    )
}

export default AddUser
const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: "gray",
        padding: 10,
        width: '90%',
        borderRadius: 10,
        margin: 10
    },
    btn: {
        width: '90%',
        alignSelf: 'center',
        backgroundColor: 'lightblue',
        padding: 15,
        borderRadius: 10,
        margin: 10
    },
})