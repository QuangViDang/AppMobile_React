import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

import React from 'react'
import { selectPostById } from './postsSlice'

const SinglePostPage = () => {
    const { postId } = useParams()
    // console.log(postId)
    const post = useSelector((state) => {
        selectPostById(state, postId)
    })
    if (!post) {
        return (
            <section>
                <h2>Post not found! </h2>
            </section>
        )
    }

    return (
        <section>
            <article>
                <h2>{post.title}</h2>
                <p className="post-content">{post.content}</p>
                <button>
                    <Link to={`/posts`}>Trở lại</Link>
                </button>
            </article>
        </section>
    )
}

export default SinglePostPage
