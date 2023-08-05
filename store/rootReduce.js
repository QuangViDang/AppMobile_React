import { combineReducers } from 'redux'
import {
    ADD_POST_to_Favorite,
    REMOVE_ALL_POST_to_Favorite,
    REMOVE_POST_to_Favorite,
} from './actionTypes'

// userReducer.js
const initialState = {
    favoriteList: [],
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST_to_Favorite:
            return {
                ...state,
                favoriteList: [...state.favoriteList, action.payload],
            }
        case REMOVE_POST_to_Favorite:
            return {
                ...state,
                favoriteList: state.favoriteList.filter(
                    (item) => item !== action.payload
                ),
            }
        case REMOVE_ALL_POST_to_Favorite:
            return {
                ...state,
                favoriteList: favoriteList.splice(
                    action.payload,
                    favoriteList.length
                ),
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({ posts: postReducer })

export default rootReducer
