import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router-dom'

import { postAdded } from './postsSlice'
import usersSlice from '../users/usersSlice'

export const AddPostForm = () => {
    const navigate = useNavigate()

    const users = useSelector((state) => state.users)
    let default_ = users[0].id

    const [post, setPost] = useState({
        title: '',
        content: '',
        user: default_,
    })

    const onTitleChanged = (e) => setPost({ ...post, title: e.target.value })

    const onContentChanged = (e) =>
        setPost({ ...post, content: e.target.value })
    const onUserChanged = (e) => setPost({ ...post, user: e.target.value })

    const dispatch = useDispatch()
    const onSavePostClicked = () => {
        console.log(post)
        if (Object.values(post).some((value) => !value)) {
            console.log('Bạn thiếu thông tin', post)
        } else {
            console.log(post)
            dispatch(postAdded(post.title, post.content, post.user))
            navigate('/posts')
        }
    }

    return (
        <section>
            <h2>Add a New Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    id="postTitle"
                    name="postTitle"
                    onChange={onTitleChanged}
                />
            </form>
            <form>
                <label htmlFor="postContent">Content:</label>
                <input
                    id="postContent"
                    name="postContent"
                    onChange={onContentChanged}
                />
            </form>
            <form>
                <label htmlFor="tac_gia">Người đăng bài "0_0"</label>
                <select id="tac_gia" onChange={onUserChanged}>
                    {users.map((value, index) => {
                        return (
                            <option value={value.id} key={index}>
                                {value.name}
                            </option>
                        )
                    })}
                </select>
            </form>{' '}
            <button type="button" onClick={onSavePostClicked}>
                Add Post
            </button>
        </section>
    )
}
