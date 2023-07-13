import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { selectUserById } from './usersSlice'
import { selectAllPosts } from '../posts/postsSlice'

export default function UserPage() {
    const { userId } = useParams()
    const user = useSelector((state) => selectUserById(state.users, userId))
    console.log(user)

    const postsForUser = useSelector((state) => {
        // console.log('postsForUser', state)
        const AllPosts = selectAllPosts(state)
        // console.log(AllPosts)
        return AllPosts.filter((post) => {
            post.id === userId
        })
    })

    const postTitles = (posts) =>
        posts.map((post) => (
            <li key={post.id}>
                <Link to={`posts/${post.id}`}>{post.title}</Link>
            </li>
        ))

    return (
        <div>
            <h3>{user}</h3>
            {postTitles(postsForUser)}
        </div>
    )
}
