import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers, selectAllUsers } from './usersSlice'
import { Link } from 'react-router-dom'

export default function UsersList() {
    const dispatch = useDispatch()
    const users = useSelector(selectAllUsers)
    console.log(users)

    const userStatus = useSelector((state) => state.users.status)
    const userError = useSelector((state) => state.users.error)
    console.log('Status: ', userStatus)

    useEffect(() => {
        dispatch(fetchUsers())
        console.log('Status: ', userStatus)
    }, [userStatus, userError])

    let renderList = []
    let count = 1
    if (userStatus === 'loading') {
        renderList = <Spinner text="loading" />
    } else if (userStatus === 'success') {
        renderList = users.map((user) => (
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <h4 style={{ padding: '0.5rem' }}>{count++}</h4>
                <Link key={user.id} to={`${user.id}`}>
                    {user.name}
                </Link>
            </div>
        ))
    }
    return (
        <section className="contentList">
            <h1>Author - Tác giả</h1>
            {renderList(users)}
        </section>
    )
}
