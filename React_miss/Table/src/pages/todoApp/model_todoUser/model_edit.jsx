import React, { useState } from 'react'
import styles from './style.module.scss'
import InputCustom from '../../../components/input/inputText'
import { useStore } from '../../../context'

const Model_Edit = ({ handleHide_modal = () => {}, action }) => {
    const [state, dispatch] = useStore()
    const { listUser, isOpenModel, dataModal } = state

    const [user, setUser] = useState({ name: '', email: '' })
    const onEditName = (e) => {
        console.log(e.value)
        setUser({ ...user, name: e.value })
    }
    return (
        <div>
            <div className={styles.closeIN}>
                <div>
                    <h1>Xin chào! Bạn có thể</h1>
                    <h4>{action}</h4>
                </div>

                <img
                    onClick={() => {
                        handleHide_modal()
                    }}
                    src="https://img.icons8.com/?size=1x&id=4MBC7gtaoPlW&format=png"
                    alt=""
                />
            </div>

            <div className={styles.add}>
                <div className={styles.input}>
                    <h3 className={styles.header}>User</h3>
                    {Object.values((value) => {
                        return <InputCustom value_input={value} label={value} />
                    })}
                    <InputCustom label={'ID'} value_input={dataModal.id} />
                    <InputCustom
                        label={'Name'}
                        onChange={onEditName}
                        value_input={dataModal.name}
                    />
                    <InputCustom
                        label={'Email'}
                        onChange={() => {}}
                        value_input={dataModal.email}
                    />
                </div>
            </div>
        </div>
    )
}

export default Model_Edit
