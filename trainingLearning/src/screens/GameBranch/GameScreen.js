import { useState } from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
import Title from '../../components/ui/Title'
import NumberContainer from '../../components/game/NumberContainer'
import PrimaryButton from '../../components/button/PrimaryButton'

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude)
    } else {
        return rndNum
    }
}

let minBoundary = 1
let maxBoundary = 100
function GameScreen({ userNumber }) {
    const initialGuess = generateRandomBetween(
        minBoundary,
        maxBoundary,
        userNumber
    )
    const [currentGuess, setCurrentGuess] = useState(initialGuess)

    const nextGuessHandler = (direction_phuonghuong) => {
        // direction => 'lower', 'greater'
        if (
            (direction_phuonghuong === 'lower' && currentGuess < userNumber) ||
            (direction_phuonghuong === 'greater' && currentGuess > userNumber)
        ) {
            Alert.alert("Don't lie!", 'You know that this is wrong...', [
                { text: 'Sorry!', style: 'cancel' },
            ])
            return
        }

        if (direction_phuonghuong === 'lower') {
            maxBoundary = currentGuess
        } else {
            minBoundary = currentGuess + 1
        }

        const newRndNumber = generateRandomBetween(
            minBoundary,
            maxBoundary,
            currentGuess
        )
        setCurrentGuess(newRndNumber)
    }
    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <Text>Higher or lower?</Text>
            <NumberContainer>{currentGuess}</NumberContainer>

            <View>
                <PrimaryButton
                    onPressHandel={nextGuessHandler.bind(this, 'lower')}
                    Children={'-'}
                />
                <PrimaryButton
                    onPressHandel={nextGuessHandler.bind(this, 'greater')}
                    Children={'+'}
                />
            </View>
        </View>
    )
}

export default GameScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    },
})
