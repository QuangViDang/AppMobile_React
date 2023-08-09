import { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { ImageBackground, StyleSheet } from 'react-native'
import StartGameScreen from './src/screens/GameBranch/StartGameScreen'
import GameScreen from './src/screens/GameBranch/GameScreen'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function App() {
    const [inputNumber, setInputNumber] = useState('')
    function pickedNumberHandler(picked) {
        setInputNumber(picked)
    }
    let screen = <StartGameScreen onChangeInput={pickedNumberHandler} />
    if (inputNumber) {
        screen = <GameScreen userNumber={inputNumber} />
    }
    return (
        <LinearGradient colors={['blue', 'red']} style={styles.rootScreen}>
            <ImageBackground
                source={require('./src/assets/images/background.png')}
                resizeMode="cover"
                style={styles.rootScreen}
                imageStyle={styles.backgoundImage}
            >
                <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
            </ImageBackground>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
    },
    backgoundImage: { opacity: 0.6 },
})
