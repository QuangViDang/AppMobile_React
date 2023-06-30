import React from 'react'
import styles from './style.module.scss'

const Table_card = ({ arr_header, arr_value, handle_Edit, handle_Delete }) => {

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
                        {Object.values(value).map((value_, index_) => {
                            return (
                                <th className={styles.tr} key={index_}>
                                    {value_}
                                </th>
                            )
                        })}
                        <th>
                            <button key={index} className={styles.button} onClick={handle_Edit}> 
                                <img src="https://img.icons8.com/?size=1x&id=oR5tfd18Ei7C&format=gif" />
                            </button>
                        </th>
                        <th>
                            <button key={index} className={styles.button} onClick={handle_Delete}>
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
