import { Text, View } from 'react-native'
import React from 'react'
import InformationCard from '../components/card/infomationCard'

function InfomationScreen({name}) {
    return (
        <View>
            <Text>InformationCard by {name}</Text>
            <InformationCard nameUser={'Quang Đăng Vi'} />
        </View>
    )
}
export default InfomationScreen
