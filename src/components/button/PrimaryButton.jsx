import { View, Image, Button, Text, Pressable, StyleSheet } from 'react-native'

function PrimaryButton({
    Children,
    imgButton,
    backgroundColorInput = 'blue',
    onPressHandel,
}) {
    const styles = StyleSheet.create({
        buttonOuterContainera: {
            margin: 4,
            borderRadius: 28,
            overflow: 'hidden',
        },
        buttonInnerContainer: {
            backgroundColor: backgroundColorInput,
            paddingVertical: 8,
            paddingHorizontal: 16,
        },
        buttonText: {
            color: 'white',
            textAlign: 'center',
        },
        pressed: {
            opacity: 0.75,
        },
    })
    return (
        <View style={styles.buttonOuterContainera}>
            <Pressable
                style={({ pressed }) =>
                    pressed
                        ? [styles.buttonInnerContainer, styles.pressed]
                        : styles.buttonInnerContainer
                }
                onPress={onPressHandel}
                android_ripple={{ color: 'white' }}
            >
                <Text style={styles.buttonText}>{Children}</Text>
            </Pressable>
            <Image source={imgButton} />
        </View>
    )
}

export default PrimaryButton
