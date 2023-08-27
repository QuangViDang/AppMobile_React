import { PermissionsAndroid } from 'react-native'

export default requestMicrophonePermission = async () => {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
            {
                title: 'Microphone Permission',
                message: 'App needs access to your microphone.',
                buttonPositive: 'OK',
                buttonNegative: 'Cancel',
            }
        )
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('Microphone permission granted')
            // Tiếp tục xử lý sau khi có quyền sử dụng microphone
        } else {
            console.log('Microphone permission denied')
            // Xử lý khi bị từ chối quyền sử dụng microphone
        }
    } catch (error) {
        console.log('Error while requesting microphone permission:', error)
    }
}
