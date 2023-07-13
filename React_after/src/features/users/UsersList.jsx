import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers, selectAllUsers } from './usersSlice'
import { Link } from 'react-router-dom'
import { Spinner } from '../../components/Spinner'

export default function UsersList() {
    const dispatch = useDispatch()

    const userStatus = useSelector((state) => state.users.status)
    const userError = useSelector((state) => state.users.error)
    // console.log('Status: ', userStatus)

    useEffect(() => {
        if (userStatus === 'idle') {
            dispatch(fetchUsers())
        }
    }, [userStatus, dispatch])

    let users = useSelector(selectAllUsers)
    // console.log(users)

    let renderList = []
    let count = 1
    console.log(userStatus)
    if (userStatus === 'idle') {
        console.log(userStatus)
        renderList = <Spinner text="loading" />
    } else{
        renderList = users.map((user) => (
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <h4 style={{ padding: '0.5rem' }}>{count++}</h4>
                <Link key={user.id} to={`${user.id}`}>
                    {user.name}
                </Link>
            </div>
        ))
    }

    console.log(users)
    // console.log("Hi", renderList)
    return (
        <section className="contentList">
            <h1>Author - Tác giả</h1>
            {renderList}
        </section>
    )
}
