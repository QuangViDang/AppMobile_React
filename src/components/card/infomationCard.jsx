import { StyleSheet, View, Text, Image } from 'react-native'
import React from 'react'
// import { TouchableOpacity } from 'react-native-gesture-handler'
import {
    iconFB,
    iconTwitter,
    iconInstagram,
} from '../../assets/images.assets.js'

const InformationCard = ({
    imgUser,
    nameUser,
    detailUser,
    onChangeFB = () => {},
    onChangeTW = () => {},
    onChangeINS = () => {},
}) => {
    return (
        <View>
            <Text>Client {nameUser}</Text>
        </View>
    )
}
export default InformationCard
