import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

export default function GameStartScreen() {
    const [inputNumber, setInputNumber] = useState()
    const handleInpuut = () => {}
    return (
        <View>
            <TextInput
                placeholder=". . ."
                value={inputNumber}
                onChange={(e) => setInputNumber(e)}
            />
            <Text>Using Flast List</Text>
            <Text>Using Flast List</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
