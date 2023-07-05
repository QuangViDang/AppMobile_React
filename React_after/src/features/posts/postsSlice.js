import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit'
import { sub } from 'date-fns'
import { client } from '../../api/client'

const initialState = {
    posts: [
        {
            id: '1',
            title: 'First Post!',
            content: 'Hello!',
            user: '2',
            date: sub(new Date(), { minutes: 16 }).toISOString(),
            reactions: {
                thumbsUp: 0,
                hooray: 0,
                heart: 0,
                rocket: 0,
                eyes: 0,
            },
        },
        {
            id: '2',
            title: 'Second Post',
            content: 'More text',
            user: '1',
            date: sub(new Date(), { minutes: 10 }).toISOString(),
            reactions: {
                thumbsUp: 0,
                hooray: 0,
                heart: 0,
                rocket: 0,
                eyes: 0,
            },
        },
    ],
    status: 'idle',
    error: null,
}

export const selectAllPosts = (state) => state.posts.posts
export const selectPostById = (state, postId) => {
    return state.posts.posts.find((post) => {
        return post.id === postId
    })
}
const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        reactionAdded(state, action) {
            const { postId, reaction } = action.payload
            const existingPost = state.posts.find((post) => post.id === postId)
            if (existingPost) {
                // console.log(existingPost.reactions[reaction])
                existingPost.reactions[reaction]++
                if (
                    reaction === 'thumbsUp' &&
                    existingPost.reactions[reaction] === 2
                ) {
                    existingPost.reactions[reaction] = 0
                }
            }
        },
        postAdded: {
            reducer(state, action) {
                state.posts.push(action.payload)
            },
            prepare(title, content, user) {
                return {
                    payload: {
                        id: nanoid(),
                        date: new Date().toISOString(),
                        title,
                        content,
                        user,
                        reactions: {
                            thumbsUp: 0,
                            hooray: 0,
                            heart: 0,
                            rocket: 0,
                            eyes: 0,
                        },
                    },
                }
            },
        },
        postUpdated(state, action) {
            const { id, title, content, user } = action.payload
            const existingPost = state.posts.find((post) => post.id === id)
            if (existingPost) {
                existingPost.title = title
                existingPost.content = content
                existingPost.user = user
            }
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'success'
                // Add any fetched posts to the array
                state.posts = state.posts.concat(action.payload)
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    },
})

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await client.get('/fakeApi/posts')
    // console.log(response)
    return response.data
})
export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions

export default postsSlice.reducer
