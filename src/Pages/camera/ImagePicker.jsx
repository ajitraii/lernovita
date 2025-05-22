import React, { useState } from 'react'
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import AppHeader from '../../Components/AppHeader';

const ImagePicker = () => {
    const [selectedImage, setSelectedImage] = useState(null)

    const openImagePicker = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        };

        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('Image picker error: ', response.error);
            } else {
                let imageUri = response.uri || response.assets?.[0]?.uri;
                console.log('image res', response.assets?.[0])
                setSelectedImage(imageUri);
            }
        });
    };

    const handleCameraLaunch = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        };

        launchCamera(options, response => {
             console.log('response', response);
            if (response.didCancel) {
                console.log('User cancelled camera');
            } else if (response.error) {
                console.log('Camera Error: ', response.error);
            } else {
                let imageUri = response.uri || response.assets?.[0]?.uri;
                setSelectedImage(imageUri);
                console.log(response);
            }
        });
    }

    const chooseOption = () => {
        Alert.alert('Camera', 'Choose option you want to go with !', [
            {
                text:'Camera',
                onPress:()=> handleCameraLaunch()
            },  {
                text:'Gallery',
                onPress:()=> openImagePicker()
            },  {
                text:'Cancel',
                onPress:()=> {return}
            }
        ])
    }
    return (
        <View style={{ flex: 1 }}>
            <AppHeader title="Camera" />
            {selectedImage == null ?<Image style={{ height: 140, width: 140, }} source={require('../../Asessts/Images/profile.png')} /> : <Image style={{ height: 140, width: 140, }} source={{uri : selectedImage}} />}
            <TouchableOpacity onPress={chooseOption} style={styles.btn}>
                <Text style={{ alignSelf: 'center' }}>{'Choose Image'}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ImagePicker
const styles = StyleSheet.create({
  
    btn: {
        width: '90%',
        alignSelf: 'center',
        backgroundColor: 'lightblue',
        padding: 15,
        borderRadius: 10,
        margin: 10
    },
})