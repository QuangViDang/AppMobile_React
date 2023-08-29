import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    Button,
} from 'react-native'
import { Audio } from 'expo-av'
import * as Permissions from 'expo-permissions'
import axios from 'axios'

export default Assistant_voice = () => {
    const [recordings, setRecordings] = useState([])
    const [recording, setRecording] = useState()
    const [isRecording, setIsRecording] = useState(false)
    const [transcriptions, setTranscriptions] = useState([])

    const checkMicrophonePermissions = async () => {
        const { status } = await Permissions.askAsync(
            Permissions.AUDIO_RECORDING
        )
        if (status !== 'granted') {
            console.log('Microphone permission denied')
        }
    }
    useEffect(() => {
        checkMicrophonePermissions()
    }, [])

    const startRecording = async () => {
        try {
            const { recording, status } = await Audio.Recording.createAsync(
                Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
            )
            setRecording(recording)
            setIsRecording(true)
        } catch (error) {
            console.error('Failed to start recording', error)
        }
    }

    const stopRecording = async () => {
        if (!recording) {
            return
        }

        try {
            await recording.stopAndUnloadAsync()
            setRecordings((prevRecordings) => [
                ...prevRecordings,
                recording.getURI(),
            ])
        } catch (error) {
            console.error('Failed to stop recording', error)
        }

        setIsRecording(false)
    }

    const [sound, setSound] = useState()

    const playSound = async (url_audio) => {
        const { sound } = await Audio.Sound.createAsync({
            uri: url_audio,
        })
        setSound(sound)
        await sound.playAsync()
    }

    const convertFileToBase64 = async (filePath) => {
        try {
            const response = await fetch(filePath)
            const blob = await response.blob()
            const reader = new FileReader()

            return new Promise((resolve, reject) => {
                reader.onload = () => {
                    const base64Data = reader.result.split(',')[1]
                    resolve(base64Data)
                }
                reader.onerror = (error) => {
                    reject(error)
                }

                reader.readAsDataURL(blob)
            })
        } catch (error) {
            console.error('Error:', error)
            throw error
        }
    }

    const convertAudioToText = async (audioData) => {
        try {
            const base64Audio = await convertFileToBase64(audioData)
            console.log('Say hi ====> ', base64Audio)
            const response = await axios.post(
                'https://speech.googleapis.com/v1/speech:recognize?key=AIzaSyBadi4642tSkHn19DZuHCem2mCmlulw2VM',
                {
                    config: {
                        encoding: 'LINEAR16',
                        sampleRateHertz: 44100,
                        languageCode: 'en-US',
                    },
                    audio: {
                        content: base64Audio,
                    },
                }
            )

            // Xử lý phản hồi từ dịch vụ
            const transcription = response.data.results
                .map((result) => result.alternatives[0].transcript)
                .join('\n')

            setTranscriptions(transcription)
        } catch (error) {
            if (error.response) {
                // Phản hồi từ máy chủ
                console.log('Error internet')
                console.log('Error 1', error.response.data)
                console.log('Error 2', error.response.status)
                console.log('Error 3', error.response.headers)
            } else {
                // Lỗi không có phản hồi từ máy chủ
                console.log('Error not internet:', error.message)
            }
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>Voice Recorder</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={isRecording ? stopRecording : startRecording}
            >
                <Text style={styles.buttonText}>
                    {isRecording ? 'Stop Recording' : 'Start Recording'}
                </Text>
            </TouchableOpacity>

            <FlatList
                data={recordings}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <View style={styles.container}>
                        <Text>{`Bản ghi ${index + 1}: `}</Text>
                        <Button
                            title="Play Recording"
                            onPress={() => playSound(item)}
                        />
                        <Button
                            title="Read File"
                            onPress={() => convertAudioToText(item)}
                        />
                        <Text>{transcriptions[index]}</Text>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    button: {
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
})
