import { combineReducers } from 'redux'
import { ADD_POST_to_Favorite, REMOVE_POST_to_Favorite } from './actionTypes'

// userReducer.js
const initialState = {
    postList: [],
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST_to_Favorite:
            return {
                ...state,
                postList: [...state.postList, action.payload],
            }
        case REMOVE_POST_to_Favorite:
            return {
                ...state,
                postList: state.postList.filter(
                    (user) => user.id !== action.payload
                ),
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({ posts: postReducer })

export default rootReducer
