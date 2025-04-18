import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import * as yup from 'yup';
import { getRequest, getRequestForCountry, postRequest } from '../../api/api';
import { useNavigation } from '@react-navigation/native';


const UserRegister = () => {
    // const [username, setUsername] = useState()
    const navigation = useNavigation()
    const [countryOpen, setCountryOpen] = useState(false);
    const [countryList, setCountryList] = useState([])
    const [stateOpen, setStateOpen] = useState(false);
    const [stateList, setStateList] = useState([])

    const validationSchema = yup.object({
        username: yup.string().min(3, 'Name should be greater than 3').required('Name is required'),
        email: yup.string().email('Invalid email').required('Email is required'),
    });

    let initialValues = {
        username: '',
        email: '',
        gender: '',
        country: '',
        state: ''
    }

    const fetchCountry = async () => {
        try {
            const res = await getRequestForCountry('v1/countries');

            const modifiedData = res.map((item) => {
                return {
                    // ...item,
                    label: item.name,
                    value: item.iso2
                }
            })

            setCountryList(modifiedData)
        } catch (error) {

        }
    }
    const fetchState = async (iso2) => {
        try {
            const res = await getRequestForCountry(`v1/countries/${iso2}/states`);
            const modifiedData = res.map((item) => {
                return {
                    // ...item,
                    label: item.name,
                    value: item.iso2
                }
            })
            // console.log("modifiedList", modifiedData)
            setStateList(modifiedData)
        } catch (error) {

        }
    }

    const onRegister = async (values) => {
        try {
            const payload = {
                ...values,
                id: Date.now()
            }
            console.log(payload)
            const res = await postRequest('data', payload);
            Alert.alert('Success', "User Registered Successfully")
            initialValues = {
                username: '',
                email: '',
                gender: '',
                country: '',
                state: ''
            }
            navigation.goBack()
        } catch (error) {

        }
    }


    useEffect(() => {
        fetchCountry()
    }, [])
    return (
        <View style={{ flex: 1, margin: 20 }}>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={(values) => {
                onRegister(values)
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
                                {countryList.length > 0 &&
                                    <View style={{ zIndex: countryOpen ? 3000 : 1 }}>
                                        <DropDownPicker
                                            open={countryOpen}
                                            value={values.country}
                                            items={countryList}
                                            setOpen={setCountryOpen}
                                            setValue={(callback) => {
                                                const selectedValue = typeof callback === 'function' ? callback(values.country) : callback;
                                                setFieldValue('country', selectedValue)
                                                fetchState(selectedValue)

                                            }}
                                            setItems={setCountryList}
                                            placeholder="Country"
                                            searchable={true}
                                            searchPlaceholder="search..."
                                            searchTextInputStyle={{
                                                borderRadius: 5,
                                                fontSize: 16,
                                                color: '#333',
                                            }}
                                            searchContainerStyle={{
                                                borderBottomColor: 'gray',
                                                borderBottomWidth: .5,
                                            }}
                                            style={{ width: '95%', alignSelf: 'center', marginTop: 10, borderWidth: 0 }}
                                        // dropDownContainerStyle={styles.dropdownContainer}
                                        />
                                    </View>}
                                {stateList.length > 0 &&
                                    <View style={{ zIndex: countryOpen ? 3000 : 1 }}>
                                        <DropDownPicker
                                            open={stateOpen}
                                            value={values.state}
                                            items={stateList}
                                            setOpen={setStateOpen}
                                            setValue={(callback) => {
                                                const selectedValue = typeof callback === 'function' ? callback(values.state) : callback;
                                                setFieldValue('state', selectedValue)

                                            }}
                                            setItems={setStateList}
                                            placeholder="State"
                                            searchable={true}
                                            searchPlaceholder="search..."
                                            searchTextInputStyle={{
                                                borderRadius: 5,
                                                fontSize: 16,
                                                color: '#333',
                                            }}
                                            searchContainerStyle={{
                                                borderBottomColor: 'gray',
                                                borderBottomWidth: .5,
                                            }}
                                            style={{ width: '95%', alignSelf: 'center', marginTop: 10, borderWidth: 0 }}
                                        // dropDownContainerStyle={styles.dropdownContainer}
                                        />
                                    </View>}

                                <TouchableOpacity onPress={handleSubmit} style={styles.btn}>
                                    <Text style={{ alignSelf: 'center' }}>Submit</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    }
                }
            </Formik>
        </View>
    )
}

export default UserRegister
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
