import React, { useEffect, useRef, useState } from 'react'
import styles from './style.module.scss'
import InputCustom from '../../../components/input/inputText'
import IMAGE_APP from '../../../assets/image'
import { useStore } from '../../../context/hooks'
import { ToastContainer, toast } from 'react-toastify'

const Model_Edit = () => {
    const arr_header = ['STT', 'ID', 'Name', 'Email', 'Edit', 'Delete']
    const [arr_value, setArr_value] = useState([])
    const [state, dispatch] = useStore()
    const { listUser, isOpenModel, dataModal } = state

    // Input and Validate
    const [new_user, setNew] = useState({
        username: null,
        email: null,
    })

    const [errorShow, setErrorShow] = useState({
        errorText_email: '',
    })

    const validate = (input, value, set_errorText) => {
        if (
            input === 'email' &&
            !/^[a-zA-Z0-9._]+@+[a-zA-Z0-9-]+\.[a-zA-Z.-]{2,}$/.test(value)
        ) {
            setErrorShow({
                ...errorShow,
                [set_errorText]: 'Không thể xác định email',
            })
        } else {
            setNew({ ...new_user, [input]: value })
            setErrorShow({ ...errorShow, [set_errorText]: '' })
        }
    }

    const handleInput = (e) => {
        const { name, value } = e
        if (name === 'username') {
            validate(name, value)
        } else {
            validate(name, value, 'errorText_email')
        }
    }

    const handleADD = () => {
        if (Object.values(new_user).some((value) => !value)) {
            toast.error('Bạn cần nhập đủ thông tin', { autoClose: 500 })
        } else {
            console.log(listUser)
            setArr_value([
                ...arr_value,
                {
                    id: Math.floor(Math.random() * 100000),
                    name: new_user.username,
                    email: new_user.email,
                },
            ])
        }
    }

    const handleHide_modal = () => {
        dispatch({
            type: 'HIDE_MODEL',
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
                            <h4>Bạn có thể CHỈNH SỬA thông tin tại đây!</h4>
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
                            <h3 className={styles.header}>Thay đổi</h3>
                            <InputCustom
                                label={'Name'}
                                name={'username'}
                                ICON={IMAGE_APP.user}
                                onChange={handleInput}
                                value_input={dataModal.name}
                            />
                            <InputCustom
                                label={'Email'}
                                name={'email'}
                                ICON={IMAGE_APP.email}
                                onChange={handleInput}
                                error={errorShow.errorText_email}
                                value_input={dataModal.email}
                            />
                        </div>
                        <button
                            type="reset"
                            className={styles.buttonADD}
                            onClick={handleADD}
                        >
                            Lưu
                        </button>
                        <ToastContainer />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Model_Edit
