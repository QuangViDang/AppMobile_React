import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'

export default function FavoritesScreen() {
    const favoriteList = useSelector((state) => state.posts.postList)
    console.log(favoriteList)
    return (
        <View>
            <Text>Xin chào</Text>
        </View>
    )
}
