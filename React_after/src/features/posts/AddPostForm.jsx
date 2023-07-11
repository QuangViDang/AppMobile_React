import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addNewPost } from './postsSlice'

export const AddPostForm = () => {
    const navigate = useNavigate()

    const users = useSelector((state) => {
        return state.users
    })
    // console.log(users)

    const [post, setPost] = useState({
        title: '',
        content: '',
        user: users[0].id,
    })
    const [Status, setStatus] = useState('idle')

    const onTitleChanged = (e) => setPost({ ...post, title: e.target.value })

    const onContentChanged = (e) =>
        setPost({ ...post, content: e.target.value })
    const onUserChanged = (e) => {
        // console.log(e.target.value)
        return setPost({ ...post, user: e.target.value })
    }

    const dispatch = useDispatch()

    const onSavePostClicked = async () => {
        // console.log(post)
        if (Object.values(post).some((value) => !value) && Status !== 'idle') {
            console.log('Bạn thiếu thông tin', post)
        } else {
            console.log("Chúc bạn thành công!", post)
            try {
                setStatus('pending')
                await dispatch(
                    addNewPost({
                        title: post.title,
                        content: post.content,
                        user: post.user,
                    })
                ).unwrap()
            } catch (error) {
                console.log("Failed to save the post: ", error)
            } finally {
                // console.log(post)
                setStatus('idle')
                navigate('/posts')
            }
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
