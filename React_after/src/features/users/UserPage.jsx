import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { selectAllUsers, selectUserById } from './usersSlice'
import { selectAllPosts } from '../posts/postsSlice'

export default function UserPage() {
    const { userId } = useParams()
    const user = useSelector((state) => selectUserById(state, userId))

    const postsForUser = useSelector((state) => {
        const AllPosts = selectAllPosts(state)
        // console.log('AllPosts', AllPosts)
        return AllPosts.filter((post) => post.user === userId)
    })

    const postTitles = () => {
        // console.log(postsForUser, typeof postsForUser)
        return postsForUser.map((post) => {
            console.log(post.id)
            return (
                <li key={post.id}>
                    <Link to={`/edit-post/${post.id}`}>{post.title}</Link>
                </li>
            )
        })
    }

    return (
        <div>
            <h3>{user.name}</h3>
            {postTitles()}
        </div>
    )
}
