import MealItem from '../components/MealItem'
import { MEALS } from '../data/dummy-data'

import { View, Text, FlatList, StyleSheet } from 'react-native'

const MealsOverviewScreen = ({ route }) => {
    const cardId = route.params.categoryId

    const displayerMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(cardId) >= 0
    })
    console.log(displayerMeals)

    const renderMealItem = (itemData) => {
        const item = itemData.item
        const mealItemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration,
        }
        return <MealItem {...mealItemProps} />
    }
    return (
        <View style={styles.header}>
            <Text>MealsOverviewScreen - {cardId}</Text>
            <FlatList
                style={styles.flatList}
                data={displayerMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    )
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
    flatList: { margin: 20 },
    header: { alignItems: 'center' },
})
