import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { postUpdated, selectPostById } from './postsSlice'
import usersSlice from '../users/usersSlice'
import { ReactionButtons } from './ReactionButtons'

const EditPostForm = () => {
    const navigate = useNavigate()
    const { postId } = useParams()

    //getData of postId
    const postData = useSelector((state) => {
        return selectPostById(state, postId)
    })
    console.log(postData)
    // Show author name
    const users = useSelector((state) => state.users)

    // Set Change
    const [post, setPost] = useState({
        title: postData.title,
        content: postData.content,
        user: postData.user,
    })

    const onTitleChanged = (e) => setPost({ ...post, title: e.target.value })

    const onContentChanged = (e) =>
        setPost({ ...post, content: e.target.value })
    const onUserChanged = (e) => {
        document.getElementById(postData.user).selected = false
        console.log(e.target.value)
        return setPost({ ...post, user: e.target.value })
    }

    const dispatch = useDispatch()
    const onSavePostClicked = () => {
        if (Object.values(post).some((value) => !value)) {
            console.log('Bạn thiếu thông tin', post)
        } else {
            console.log(post)
            dispatch(
                postUpdated({
                    id: postId,
                    title: post.title,
                    content: post.content,
                    user: post.user,
                })
            )
            navigate('/posts')
        }
    }
    return (
        <section>
            <h2>Edit post</h2>
            <div>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    placeholder="What's on your mind?"
                    value={post.title}
                    onChange={onTitleChanged}
                />
            </div>
            <div>
                <label htmlFor="postContent">Post Content:</label>
                <input
                    type="text"
                    id="postContent"
                    name="postContent"
                    placeholder="What's on your mind?"
                    value={post.content}
                    onChange={onContentChanged}
                />
            </div>
            <form>
                <label htmlFor="tac_gia">Người đăng bài "0_0"</label>
                <select id="tac_gia" onChange={onUserChanged}>
                    {users.map((value, index) => {
                        return (
                            <option
                                id={value.id}
                                selected={value.id === postData.user}
                                value={value.id}
                                key={index}
                            >
                                {value.name}
                            </option>
                        )
                    })}
                </select>
            </form>{' '}
            <ReactionButtons post={postData} />
            <button onClick={onSavePostClicked}>
                <Link to={`/posts/${post.id}`}>Save Edit</Link>
            </button>
        </section>
    )
}

export default EditPostForm
