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
import { SpeechClient } from '@google-cloud/speech'

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

        // Trích xuất văn bản từ giọng trực tiếp, không cần lưu file
        try {
            const [operation] = await SpeechClient.recognize({
                config: {
                    encoding: 'LINEAR16',
                    sampleRateHertz: 44100,
                    languageCode: 'en-US', // Thay đổi thành mã ngôn ngữ phù hợp
                },
                audio: {
                    uri: recording.getURI(),
                },
            })

            const [response] = await operation.promise()

            const transcription = response.results
                .map((result) => result.alternatives[0].transcript)
                .join('\n')

            setTranscriptions(transcription)
        } catch (error) {
            console.error('Error converting audio to text:', error)
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

    const convertAudioToText = async (url_audio) => {
        try {
            const [operation] = await SpeechClient.recognize({
                config: {
                    encoding: 'LINEAR16',
                    sampleRateHertz: 44100,
                    languageCode: 'en-US',
                },
                audio: {
                    uri: url_audio,
                },
            });
    
            const [response] = await operation.promise();
    
            const transcription = response.results
                .map((result) => result.alternatives[0].transcript)
                .join('\n');
    
            setTranscriptions((prevTranscriptions) => [
                ...prevTranscriptions.slice(0, index),
                transcription,
                ...prevTranscriptions.slice(index + 1),
            ]);
        } catch (error) {
            console.error('Error converting audio to text:', error);
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
