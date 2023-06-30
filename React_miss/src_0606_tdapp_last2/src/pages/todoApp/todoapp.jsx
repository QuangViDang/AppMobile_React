import React, { useEffect, useRef, useState } from 'react'
import styles from './style.module.scss'
import InputCustom from '../../components/input/inputText'
import IMAGE_APP from '../../assets/image'
import ButtonCustom from '../../components/button/button'
import Table_card from '../../components/card/cardTable_todo'
import { useStore } from '../../context/hooks'
import { ToastContainer, toast } from 'react-toastify'
import Model_Edit from './model_todoUser/model_edit'
import Model_Delete from './model_todoUser/model_delete'
import Model_Detail from './model_todoUser/model_detail'

const Todoapp = () => {
    const arr_header = ['STT', 'ID', 'Name', 'Email', 'Edit', 'Delete']
    const [arr_value, setArr_value] = useState([])
    const [state, dispatch] = useStore()
    const {
        listUser = [],
        isOpenModel_Edit,
        isOpenModel_Delete,
        isOpenModel_Detail,
        dataMoel,
    } = state

    const GET_DATA_USER = async () => {
        try {
            const reponse = await fetch(
                'https://jsonplaceholder.typicode.com/users'
            )
            const resuft = await reponse.json()
            dispatch({
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

    // Input and Validate
    const [new_user, setNew] = useState({
        name: null,
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
        if (name === 'name') {
            validate(name, value)
        } else {
            validate(name, value, 'errorText_email')
        }
    }

    const handleADD = () => {
        // console.log('handleADD', new_user)
        if (Object.values(new_user).some((value) => !value)) {
            toast.error('Bạn cần nhập đủ thông tin', { autoClose: 500 })
        } else {
            setArr_value([
                ...arr_value,
                {
                    id: Math.floor(Math.random() * 100000),
                    name: new_user.name,
                    email: new_user.email,
                },
            ])
            setNew({ name: null, email: null })
        }
    }

    const handleDelete_inModel = (data) => {
        const delete_user = arr_value.filter((user) => user.id !== data.id)
        setArr_value(delete_user)
        console.log('Delete ĐI')
    }

    return (
        <div>
            <form
                className={styles.todoapp}
                onSubmit={(e) => {
                    e.preventDefault()
                }}
            >
                <div>
                    <h1>Xin chào!</h1>
                    <h4>Chào mừng đến với !</h4>
                </div>

                <div className={styles.add}>
                    <h3>Add User</h3>
                    <div className={styles.input}>
                        <InputCustom
                            label={'Name'}
                            name={'name'}
                            ICON={IMAGE_APP.user}
                            text={'Enter your username'}
                            onChange={handleInput}
                        />
                        <InputCustom
                            label={'Email'}
                            name={'email'}
                            ICON={IMAGE_APP.email}
                            text={'Enter your email'}
                            onChange={handleInput}
                            error={errorShow.errorText_email}
                        />
                    </div>
                    <button
                        type="reset"
                        className={styles.buttonADD}
                        onClick={handleADD}
                    >
                        Thêm
                    </button>
                    <ToastContainer />
                </div>

                <div className={styles.list}>
                    <Table_card
                        arr_header={arr_header}
                        arr_value={listUser}
                        handle_Edit={() => {}}
                        handle_Delete={() => {
                            console.log('List:', listUser)
                        }}
                    />
                </div>
            </form>
            {isOpenModel_Edit && <Model_Edit />}
            {isOpenModel_Delete && (
                <Model_Delete
                    handleDelete={(e) => {
                        handleDelete_inModel(e)
                    }}
                />
            )}
            {isOpenModel_Detail && <Model_Detail />}
        </div>
    )
}

export default Todoapp
