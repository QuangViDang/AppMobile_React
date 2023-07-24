import React, { useEffect, useRef, useState } from 'react'
import styles from './style.module.scss'
import Table_card from '../../components/card/cardTable_todo'
import { useStore } from '../../context/hooks'

const Table = () => {
    const arr_header = [
        { name: 'id', label: 'ID' },
        { name: 'name', label: 'Name' },
        { name: 'email', label: 'Email' },
        { name: 'website', label: 'Website' },
    ]

    const [listCheckUser, setListCheckUser] = useState([])
    const [stateGlobal, dispathGlobal] = useStore()
    const {
        listUser = [],
        isOpenModel_Edit,
        isOpenModel_Delete,
        isOpenModel_Detail,
        dataMoel,
    } = stateGlobal

    const GET_DATA_USER = async () => {
        try {
            const reponse = await fetch(
                'https://jsonplaceholder.typicode.com/users'
            )
            const resuft = await reponse.json()
            dispathGlobal({
                type: 'SET_USER',
                payload: {
                    listUser: resuft,
                },
            })
        } catch (error) {
            console.log('Error: ', error)
        }
    }
    useEffect(() => {
        GET_DATA_USER()
    }, [])

    const onDetailTable = (user) => {
        dispathGlobal({
            type: 'SHOW_MODAL',
            payload: { typeModal: 'DETAIL_USER', dataModal: user },
        })
    }

    const onEditTable = (user) => {
        // e.stopPropagation()
        dispathGlobal({
            type: 'SHOW_MODAL',
            payload: { typeModal: 'EDIT_USER', dataModal: user },
        })
    }

    const handleCheck = (e, type, item) => {
        e.stopPropagation()
        let listId = []
        if (type == 'ALL') {
            listId = stateGlobal.listUser.map((user) => user.id)
        }
        if (type === 'NONE') listId = []
        if (type === 'ITEM_CHECK') {
            const newList = [...listCheckUser, item.id]
            listId = newList
        }
        if (type === 'ITEM_UNCHECK') {
            const newList = [...listCheckUser].filter((id) => id !== item.id)

            listId = newList
        }
        setListCheckUser(listId)
    }

    return (
        <div>
            <form className={styles.todoapp}>
                <div>
                    <h1>Xin chào!</h1>
                    <h4>Dưới đây là danh sách người dùng!</h4>
                </div>

                <div className={styles.list}>
                    <Table_card
                        isCheck={true}
                        handleCheck={handleCheck}
                        listItem={arr_header}
                        arr_value={listUser}
                        handleDetai={onDetailTable}
                        handle_Edit={onEditTable}
                        handle_Delete={() => {
                            console.log('bạn Delete được rồi đó')
                        }}
                        listChecked={listCheckUser}
                        isCheckAll={listUser.length === listCheckUser.length}
                    />
                </div>
            </form>
        </div>
    )
}

export default Table
