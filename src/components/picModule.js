import React from 'react'
import { Image, Dimensions, SafeAreaView, StyleSheet, Text } from 'react-native'

const pictureDisplay = () => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    return (
        <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
            <Image style={{width: windowWidth, height: windowHeight/2.5, borderRadius: 360}} source={{ uri: 'https://i.pinimg.com/originals/89/ce/42/89ce42a9a01a1d9a742194b1c13302ee.jpg'}} />
            <Text style={{fontSize: 30, color: 'red'}}>Our supreme leader</Text>
        </SafeAreaView>
    )
}

export default pictureDisplay