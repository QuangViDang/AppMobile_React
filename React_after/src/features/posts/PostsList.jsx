import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import PostAuthor from './PostAuthor'
import TimeAgo from './TimeAgo'
import { ReactionButtons } from './ReactionButtons'
import { fetchPosts, selectAllPosts } from './postsSlice'
import { useEffect } from 'react'
import { Spinner } from '../../components/Spinner'

export const PostsList = () => {
    const dispatch = useDispatch()
    const posts = useSelector(selectAllPosts)
    // console.log(posts)
    let sortedPost = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    const postStatus = useSelector((state) => state.posts.status)
    const error = useSelector((state) => state.posts.error)
    // console.log(postStatus, error)

    useEffect(() => {
        if (postStatus === 'idle') {
            dispatch(fetchPosts())
            console.log('postStatus:', postStatus)
        }
    }, [postStatus, dispatch])

    let tempContent = []
    let count = 1;
    if (postStatus === 'loading') {
        tempContent = <Spinner text="loading" />
    } else if (postStatus === 'success') {
        tempContent = sortedPost.map((post) => (
            <article
                className="post-excerpt contentList"
                key={post.id}
            >
                <div className="postsList_row">
                    <h3>{post.title}</h3>
                    <p>{count++}</p>
                </div>
                <p className="post-content">{post.content.substring(0, 100)}</p>
                <PostAuthor userId={post.user} />
                <TimeAgo timetamp={post.date} />
                <ReactionButtons post={post} />

                <Link to={`/posts/${post.id}`} className="button muted-button">
                    <button>View post</button>
                </Link>
                <Link
                    to={`/edit-post/${post.id}`}
                    className="button muted-button"
                >
                    <button>Edit post</button>
                </Link>
            </article>
        ))
    }
    return (
        <section className="posts-list">
            <div className="postsList_row">
                <h2>Posts List</h2>
                <p>Tatol: {tempContent.length}</p>
            </div>
            {tempContent}
        </section>
    )
}
