import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { MEALS } from '../data/dummy-data'
import MealDetails from '../components/MealDetail'
import Subtitle from '../components/MealDetail/SubTitle'
import List from '../components/MealDetail/List'
import { useLayoutEffect } from 'react'
import IconButton from '../components/IconButton'

function MealDetailScreen({ route, navigation }) {
    const mealId = route.params.mealId
    const selectedMeal = MEALS.find((meal) => meal.id === mealId)

    function headerButtonPressHandler() {
        console.log('Added to favorites')
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <IconButton
                        icon="star"
                        color="black"
                        onPress={headerButtonPressHandler}
                    />
                )
            },
        })
    }, [navigation, headerButtonPressHandler])
    return (
        <ScrollView style={styles.rootContainer}>
            <Image
                style={styles.image}
                source={{ uri: selectedMeal.imageUrl }}
            />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
                textStyle={styles.detailText}
            />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients} />
                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    )
}

export default MealDetailScreen
const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32,
        // alignItems: 'center',
    },
    image: {
        margin: '10%',
        height: 250,
        borderRadius: 15,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white',
    },
    detailText: {
        color: 'white',
    },
    listOuterContainer: {
        alignItems: 'center',
    },
    listContainer: {
        width: '80%',
    },
})
