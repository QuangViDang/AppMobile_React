import React from 'react'
import styles from './style.module.scss'
import { useStore } from '../../context/hooks'

const Table_card = ({ arr_header, arr_value, handle_Edit, handle_Delete }) => {
    const [state, dispatch] = useStore()
    const {
        listUser,
        isOpenModel_Edit,
        isOpenModel_Delete,
        isOpenModel_Detail,
        dataModal,
    } = state
    let counter = 0

    return (
        <table border="1" className={styles.table}>
            <tr>
                {arr_header.map((value, index) => {
                    return (
                        <th className={styles.tr} key={index}>
                            {value}
                        </th>
                    )
                })}
            </tr>
            {arr_value.map((value, index) => {
                return (
                    <tr key={index} className={styles.hover}>
                        <th>{++counter}</th>

                        <th
                            className={styles.button}
                            onClick={() => {
                                const new_obj = {
                                    id: value.id,
                                    name: value.name,
                                    email: value.email,
                                }
                                dispatch({
                                    type: 'USER_DETAIL',
                                    payload: new_obj,
                                })
                            }}
                        >
                            {value.id}
                        </th>
                        <th
                            onClick={() => {
                                handle_Delete(value, index)
                                const new_obj = {
                                    id: value.id,
                                    name: value.name,
                                    email: value.email,
                                }
                                dispatch({
                                    type: 'USER_DETAIL',
                                    payload: new_obj,
                                })
                            }}
                        >
                            {value.name}
                        </th>
                        <th
                            onClick={() => {
                                handle_Delete(value, index)
                                const new_obj = {
                                    id: value.id,
                                    name: value.name,
                                    email: value.email,
                                }
                                dispatch({
                                    type: 'USER_DETAIL',
                                    payload: new_obj,
                                })
                            }}
                        >
                            {value.email}
                        </th>
                        <th>
                            <img
                                onClick={() => {
                                    handle_Edit()
                                    const new_obj = {
                                        id: value.id,
                                        name: value.name,
                                        email: value.email,
                                    }
                                    dispatch({
                                        type: 'SHOW_MODEL',
                                        payload: new_obj,
                                    })
                                }}
                                src="https://img.icons8.com/?size=1x&id=oR5tfd18Ei7C&format=gif"
                            />
                        </th>
                        <th>
                            <img
                                onClick={() => {
                                    handle_Delete(value, index)
                                    const new_obj = {
                                        id: value.id,
                                        name: value.name,
                                        email: value.email,
                                    }
                                    dispatch({
                                        type: 'DELETE_USER',
                                        payload: new_obj,
                                    })
                                }}
                                src="https://img.icons8.com/?size=1x&id=4B0kCMNiLlmW&format=gif"
                            />
                        </th>
                    </tr>
                )
            })}
        </table>
    )
}

export default Table_card
