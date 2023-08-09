import { StyleSheet, Text, TextInput, View, ScrollView } from 'react-native'
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
            <Text>Using ScrollView</Text>
            <View style={styles.listScroll}>
                <ScrollView>
                    {[1, 2, 3, 4, , 23, 1].map((value, index) => (
                        <View key={index} style={styles.list}>
                            <Text style={styles.Item}>{value}</Text>
                        </View>
                    ))}
                </ScrollView>
                <ScrollView>
                    {[1, 2, 3, 4, , 23, 1].map((value, index) => (
                        <View key={index} style={styles.list}>
                            <Text style={styles.Item}>{value}</Text>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    listScroll: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'orange',
        width: '70%',
    },
    list: {
        alignItems: 'center',
        height: 150,
    },
    Item: {
        color: 'white',
    },
})
