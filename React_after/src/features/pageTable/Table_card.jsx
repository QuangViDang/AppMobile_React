import React, { useEffect, useState } from 'react'
import styles from './styleTable.scss'

const Table_card = ({
    // arrayValue,
    handleDetai,
    handle_Edit,
    handle_Delete,
    isCheckAll,
    handleCheck,
    listChecked = [],
    isCheck = false,
}) => {
    let counter = 0
    const listItem = [
        { name: 'id', label: 'ID' },
        { name: 'name', label: 'Name' },
        { name: 'email', label: 'Email' },
        { name: 'website', label: 'Website' },
    ]
    const [arrayValue, setArrayValue] = useState([])

    const GET_DATA_USER = async () => {
        try {
            const reponse = await fetch(
                'https://jsonplaceholder.typicode.com/users'
            )
            const resuft = await reponse.json()
            setArrayValue(resuft)
        } catch (error) {
            console.log('Error: ', error)
        }
    }
    useEffect(() => {
        GET_DATA_USER()
        console.log(arrayValue)
    }, [])

    let [isChoose, setIsChoose] = useState()
    return (
        <div>
            <table border="1" className={styles.table}>
                <tr className={styles.row_tr}>
                    {isCheck && (
                        <th>
                            <p>Select All</p>
                            <input
                                type="checkbox"
                                onChange={(e) => {
                                    handleCheck(
                                        e,
                                        e.target.checked ? 'ALL' : 'NONE'
                                    )
                                }}
                                checked={isCheckAll}
                            />
                        </th>
                    )}
                    <th>STT</th>
                    {listItem.map((value, index) => {
                        return (
                            <th className={styles.tr} key={index}>
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
                {arrayValue.map((value, index) => {
                    return (
                        <tr key={index} className={styles.hover}>
                            {isCheck && (
                                <th>
                                    <input
                                        type="checkbox"
                                        onClick={(e) => e.stopPropagation()}
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
                                        checked={listChecked.includes(value.id)}
                                    />
                                </th>
                            )}
                            <th>{++counter}</th>

                            {/* VALUE */}
                            {listItem.map((valueKey, index) => {
                                return (
                                    <th
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
                                                handle_Delete(value, index)
                                            }}
                                            src="https://img.icons8.com/?size=1x&id=4B0kCMNiLlmW&format=gif"
                                        />
                                    </th>
                                </>
                            )}
                        </tr>
                    )
                })}
            </table>
            <div className="pageTableDiv">
                <div class="pagination">
                    <a
                        href="#"
                        onClick={() => {
                            let newChoose =
                                isChoose === 1
                                    ? arrayValue.length
                                    : isChoose - 1
                            setIsChoose(newChoose)
                        }}
                    >
                        &laquo;
                    </a>
                    {/* <a
                        onClick={() => {
                            setIsChoose(1)
                        }}
                        className={isChoose === 1 ? 'active' : ''}
                        key={1}
                    >
                        1
                    </a> */}

                    {arrayValue.map((valueStart, indexStart) => {
                    if(arrayValue.length > 7) {
                    }
                        return (
                            <a
                                onClick={() => {
                                    setIsChoose(valueStart.id)
                                }}
                                className={
                                    isChoose === valueStart.id ? 'active' : ''
                                }
                                key={valueStart.id}
                            >
                                {valueStart.id}
                            </a>
                        )
                    })}

                    {/* <a
                        onClick={() => {
                            setIsChoose(arrayValue.length)
                            console.log(isChoose)
                        }}
                        className={isChoose ? 'active' : ''}
                        key={arrayValue.length}
                    >
                        {arrayValue.length}
                    </a> */}
                    <a
                        href="#"
                        onClick={() => {
                            let newChoose =
                                isChoose === arrayValue.length
                                    ? 1
                                    : isChoose + 1
                            setIsChoose(newChoose)
                        }}
                    >
                        &raquo;
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Table_card
