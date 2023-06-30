import React, { useEffect, useRef, useState } from 'react'
import styles from './style.module.scss'
import InputCustom from '../../../components/input/inputText'
import IMAGE_APP from '../../../assets/image'
import { useStore } from '../../../context/hooks'
import { ToastContainer, toast } from 'react-toastify'

const Model_Delete = (id, name, email, handleDelete = () => {}) => {
    const [state, dispatch] = useStore()
    const { listUser, isOpenModel, dataModal } = state

    // Input and Validate
    const [new_user, setNew] = useState({
        username: null,
        email: null,
    })

    const handleHide_modal = () => {
        dispatch({
            type: 'DELETE_USER_FAIL',
            payload: new_user,
        })
    }
    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            handleHide_modal()
        }
    }

    return (
        <div
            className="modal-overlay"
            id={styles.modal}
            onClick={handleOverlayClick}
        >
            <form
                className={styles.todoapp}
                onSubmit={(e) => {
                    e.preventDefault()
                }}
            >
                <div>
                    <div className={styles.closeIN}>
                        <div>
                            <h1>Xin chào!</h1>
                            <h4>Bạn có chắc muốn XOÁ thông tin</h4>
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
                            <h3 className={styles.header}>Xoá User</h3>
                            <InputCustom
                                label={'ID'}
                                value_input={dataModal.id}
                            />
                            <InputCustom
                                label={'Name'}
                                value_input={dataModal.name}
                            />
                            <InputCustom
                                label={'Email'}
                                value_input={dataModal.email}
                            />
                        </div>
                        <button
                            type="reset"
                            className={styles.buttonADD}
                            onClick={(e) => handleDelete(e.target.value)}
                        >
                            Xoá
                        </button>
                        <ToastContainer />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Model_Delete
