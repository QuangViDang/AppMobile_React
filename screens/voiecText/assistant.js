import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Voice from '@react-native-voice/voice'

export default function Assistant() {
    const [result, setResult] = useState('')
    const [error, setError] = useState('')
    const [isRecording, setIsRecording] = useState(false)

    Voice.onSpeechStart = () => setIsRecording(true)
    Voice.onSpeechEnd = () => setIsRecording(false)
    Voice.onSpeechError = (e) => setError(e.error)
    Voice.onSpeechResults = (re) => setResult(re.value[0])

    const startRecording = async () => {
        if (Voice) {
            try {
                await Voice.start('en-Us')
            } catch (error) {
                console.log(error)
            }
        }
    }
    const stopRecording = async () => {
        try {
            await Voice.stop()
        } catch (err) {
            setError(err)
        }
    }
    return (
        <View style={{ alignItems: 'center', margin: 20 }}>
            <Text style={{ fontSize: 20, color: 'green', fontWeight: '500' }}>
                Voice Input
            </Text>
            <Text>{result}</Text>
            <Text>{error}</Text>

            <TouchableOpacity
                onPress={isRecording ? stopRecording : startRecording}
            >
                <Text style={{ fontSize: 20, color: 'red' }}>
                    {isRecording ? 'Stop' : 'Start'}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({})
