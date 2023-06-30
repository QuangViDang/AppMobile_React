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
                    <tr key={index}>
                        <th>{++counter}</th>

                        <th>
                            <button
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
                            </button>
                        </th>
                        <th>
                            <button
                                style={{ width: '13rem' }}
                                className={styles.button}
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
                            </button>
                        </th>
                        <th>
                            <button
                                className={styles.button}
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
                            </button>
                        </th>
                        <th>
                            <button
                                key={index}
                                className={styles.button}
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
                            >
                                <img src="https://img.icons8.com/?size=1x&id=oR5tfd18Ei7C&format=gif" />
                            </button>
                        </th>
                        <th>
                            <button
                                key={index}
                                className={styles.button}
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
                            >
                                <img src="https://img.icons8.com/?size=1x&id=4B0kCMNiLlmW&format=gif" />
                            </button>
                        </th>
                    </tr>
                )
            })}
        </table>
    )
}

export default Table_card
