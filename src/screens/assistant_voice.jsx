import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    StyleSheet,
} from 'react-native'
import { Audio } from 'expo-av'
import * as Permissions from 'expo-permissions'

const Assistant_voice = () => {
    const [recordings, setRecordings] = useState([])
    const [recording, setRecording] = useState()
    const [isRecording, setIsRecording] = useState(false)

    useEffect(() => {
        checkMicrophonePermissions()
    }, [])

    const checkMicrophonePermissions = async () => {
        const { status } = await Permissions.askAsync(
            Permissions.AUDIO_RECORDING
        )
        if (status !== 'granted') {
            console.log('Microphone permission denied')
        }
    }

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
        console.log(recordings)

        setIsRecording(false)
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
                    <Text>{`${index + 1}: ${item}`}</Text>
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

export default Assistant_voice
