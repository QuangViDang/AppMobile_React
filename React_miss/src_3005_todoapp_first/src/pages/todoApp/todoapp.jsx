import React, { useState, useContext } from 'react'
import styles from './style.module.scss'
import Table_card from '../../components/card/cardTable'
import ButtonCustom from '../../components/button/button'
import IMAGE_APP from '../../assets/image'
import InputCustom from '../../components/input/inputText'
import { ToastContainer, toast } from 'react-toastify'
import UserProvider from '../../context/user.provider'
import UserContext from '../../context/user.context'
import { useStore } from '../../context'


const Todoapp = ({value, index}) => {
    const [{ listUser, isOpenModal, dataModel }, dispatch] = useStore();

    const header = ['ID', 'Name', 'Money', 'Edit', 'Delete']
    const [content, setContent] = useState([
        { id: '1', username: 'Vi', money: '14 000' },
        { id: '2', username: 'Coro', money: '98 000' },
    ])

    const [new_user, setNew] = useState({
        id: null,
        username: null,
        money: null,
    })

    const [new_add_money, setAddMoney] = useState({
        money: null,
    })
    const [errorShow, setErrorShow] = useState({
        errorText_id: '',
        errorText_username: '',
        errorText_money: '',
        errorText_addmoney: '',
    })

    const validate = (input, value, set_errorText, int) => {
        if (input !== 'username' && !int.test(value)) {
            setErrorShow({ ...errorShow, [set_errorText]: 'Vui lòng nhập số' })
            console.log('int', value)
        } else if (input === 'add_money') {
            setAddMoney({ money: value })
            setErrorShow({ ...errorShow, [set_errorText]: '' })
        } else {
            setNew({ ...new_user, [input]: value })
            setErrorShow({ ...errorShow, [set_errorText]: '' })
        }
    }
    const handleInput = (e) => {

        const { name, value } = e
        if (name === 'id') {
            validate(name, value, 'errorText_id', /^[0-9]*\d$/)
        } else if (name === 'username') {
            validate(name, value, 'errorText_username', /^$/)
        } else if (name === 'money') {
            validate(name, value, 'errorText_money', /^[0-9]*\d$/)
        } else if (name === 'add_money') {
            validate(name, value, 'errorText_addmoney', /^[0-9]*\d$/)
        }
    }

    const handleADD = () => {
        if (Object.values(new_user).some((value) => !value)) {
            toast.error('Vui lòng nhập thông tin', { autoClose: 1000 })
        } else if (content.some((user) => new_user.id === user.id)) {
            toast.error('ID đã tồn tại', { autoClose: 1000 })
        } else {
            // LƯU VÀO LOCALSTORAGE

            toast.success('Thêm người dùng thành công', { autoClose: 1000 })
            setContent([...content, new_user])
        }
    }

    const handleDEL = () => {
        console.log(content.some((user) => new_user.id !== user.id))
        if (!new_user.id) {
            toast.error('Vui lòng nhập thông tin ID', { autoClose: 1000 })
        } else if (content.some((user) => new_user.id === user.id)) {
            toast.success('Xoá người dùng thành công', { autoClose: 1000 })
            const update_list = content.filter(
                (user) => user.id !== new_user.id
            )
            setContent(update_list)
        } else {
            toast.error('ID chưa tồn tại', { autoClose: 1000 })
        }
    }

    return (
        <form className={styles.todo}>
            <div className={styles.show}>
                <h1 className={styles.h1}>Danh sách người dùng</h1>
                <Table_card
                    arr_header={header}
                    arr_value={content}
                />
            </div>

            <div className={styles.add}>
                <h1 className={styles.h1}>Thêm thông tin người mới</h1>
                <div className={styles.add}>
                    <InputCustom
                        label={'ID'}
                        name={'id'}
                        error={errorShow.errorText_id}
                        onChange={handleInput}
                    />
                    <InputCustom
                        label={'Username'}
                        name={'username'}
                        onChange={handleInput}
                    />
                    <InputCustom
                        label={'Money'}
                        name={'money'}
                        error={errorShow.errorText_money}
                        onChange={handleInput}
                    />
                </div>
            </div>

            <div className={styles.function}>
                <img src={IMAGE_APP.iconMain} />
                <h1 className={styles.h1}>Xin chào! </h1>
                <h2> Chào mừng đến với app của chúng tôi</h2>
                <ButtonCustom
                    type={'reset'}
                    text="Thêm người dùng"
                    handleButton={handleADD}
                />
                <ButtonCustom text="Sắp xếp" />
            </div>
        </form>
    )
}

export default () => (
    <UserProvider>
        <Todoapp />
    </UserProvider>
)
// rfc
