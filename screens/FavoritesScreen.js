import { View, Text, FlatList, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import MealItem from '../components/MealItem'
import { MEALS } from '../data/dummy-data'

export default function FavoritesScreen() {
    const favoriteList = useSelector((state) => state.posts.favoriteList)
    // console.log(favoriteList)

    const displayerMeals = []
    favoriteList.map((value, index) => {
        item = MEALS.find((meal) => meal.id === favoriteList[index])
        return displayerMeals.push(item)
    })
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
          {favoriteList.length ? <FlatList
                style={styles.flatList}
                data={displayerMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />: <Text>Bạn vẫn alone</Text>}
            
        </View>
    )
}

const styles = StyleSheet.create({
    flatList: { margin: 20 },
    header: { alignItems: 'center' },
})
