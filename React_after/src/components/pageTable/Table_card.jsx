import React from 'react'
import styles from './style.module.scss'

const Table_card = ({
    listItem,
    arr_value,
    handleDetai,
    handle_Edit,
    handle_Delete,
    isCheckAll,
    handleCheck,
    listChecked = [],
    isCheck = false,
}) => {
    let counter = 0

    return (
        <div className={styles.tableDiv}>
            <table border="1" className={styles.table}>
                <thead>
                    <tr className={styles.row_tr}>
                        {isCheck && (
                            <>
                                {' '}
                                <th>
                                    <p>Select All</p>
                                    <input
                                        type="checkbox"
                                        onChange={(e) => {
                                            handleCheck(
                                                e,
                                                e.target.checked
                                                    ? 'ALL'
                                                    : 'NONE'
                                            )
                                        }}
                                        checked={isCheckAll}
                                    />
                                </th>
                            </>
                        )}

                        <th>STT</th>
                        {listItem.map((value, index) => {
                            return (
                                <th
                                    className={styles.tr}
                                    key={index}
                                    style={{ width: value.space }}
                                >
                                    {value.label}
                                </th>
                            )
                        })}
                        {isCheck && (
                            <>
                                <th>Edit</th>
                                <th>Delete</th>
                            </>
                        )}
                    </tr>
                </thead>

                <tbody>
                    {arr_value.map((value, index) => {
                        return (
                            <>
                                <tr key={index} className={styles.hover}>
                                    {isCheck && (
                                        <th>
                                            <input
                                                type="checkbox"
                                                onClick={(e) =>
                                                    e.stopPropagation()
                                                }
                                                onChange={(e) => {
                                                    e.stopPropagation()
                                                    handleCheck(
                                                        e,
                                                        e.target.checked
                                                            ? 'ITEM_CHECK'
                                                            : 'ITEM_UNCHECK',
                                                        value
                                                    )
                                                }}
                                                checked={listChecked.includes(
                                                    value.id
                                                )}
                                            />
                                        </th>
                                    )}
                                    <th>{++counter}</th>

                                    {/* VALUE */}
                                    {listItem.map((valueKey, index) => {
                                        return (
                                            <th
                                                style={{ width: value.space }}
                                                onClick={() => {
                                                    // console.log(value)
                                                    handleDetai(value)
                                                }}
                                                className={styles.tr}
                                                key={index}
                                            >
                                                {value[valueKey.name]}
                                            </th>
                                        )
                                    })}

                                    {isCheck && (
                                        <>
                                            <th key={index}>
                                                <img
                                                    onClick={() => {
                                                        handle_Edit(value)
                                                    }}
                                                    src="https://img.icons8.com/?size=1x&id=oR5tfd18Ei7C&format=gif"
                                                />
                                            </th>
                                            <th>
                                                <img
                                                    onClick={() => {
                                                        handle_Delete(
                                                            value,
                                                            index
                                                        )
                                                    }}
                                                    src="https://img.icons8.com/?size=1x&id=4B0kCMNiLlmW&format=gif"
                                                />
                                            </th>
                                        </>
                                    )}
                                </tr>
                            </>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Table_card
