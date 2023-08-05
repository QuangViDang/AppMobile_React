import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import IconButton from './IconButton'

import { useDispatch, useSelector } from 'react-redux'
import {
    ADD_POST_to_Favorite,
    REMOVE_POST_to_Favorite,
} from '../store/actionTypes'

export default function MealItem({
    id,
    title,
    imageUrl,
    duration,
    complexity,
    affordability,
    pressAddToFavorite,
}) {
    const favoriteList = useSelector((state) => state.posts.favoriteList)
    const dispatch = useDispatch()

    function pressAddToFavorite() {
        console.log('==========', favoriteList.includes(id))
        
        if (favoriteList.includes(id)) {
            console.log('REMOVE', favoriteList)
            dispatch({ type: REMOVE_POST_to_Favorite, payload: id })
        } else {
            dispatch({ type: ADD_POST_to_Favorite, payload: id })
            console.log('ADD', favoriteList)
        }
    }
    const navigation = useNavigation()

    function selectMealItemHandler() {
        navigation.navigate('MealDetail', { mealId: id })
    }
    return (
        <View>
            <View style={styles.innerContainer}>
                <View>
                    <Pressable
                        android_ripple={{ color: '#ccc' }}
                        style={({ pressed }) =>
                            pressed ? styles.buttonPressed : null
                        }
                        onPress={selectMealItemHandler}
                    >
                        <Image
                            source={{ uri: imageUrl }}
                            style={styles.image}
                        />
                    </Pressable>
                    <View style={styles.title}>
                        <Pressable
                            android_ripple={{ color: '#ccc' }}
                            style={({ pressed }) =>
                                pressed ? styles.buttonPressed : null
                            }
                            onPress={selectMealItemHandler}
                        >
                            <Text
                                style={styles.titleText}
                                onPress={selectMealItemHandler}
                            >
                                {title}
                            </Text>
                        </Pressable>
                        <IconButton
                            icon="heart"
                            color={favoriteList.includes(id) ? 'red' : 'gray'}
                            onPress={pressAddToFavorite}
                        />
                    </View>
                </View>
                <View style={styles.details}>
                    <Text style={styles.detailItem}>{duration}m</Text>
                    <Text style={styles.detailItem}>
                        {complexity?.toUpperCase()}
                    </Text>
                    <Text style={styles.detailItem}>
                        {affordability?.toUpperCase()}
                    </Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
    },
    buttonPressed: {
        opacity: 0.5,
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 18,
        margin: 8,
    },
    like: {
        marginRight: 5,
        paddingRight: 8,
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
    },
})
