import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { useStore } from '../../context'
import ButtonCustom from '../../components/button/button'
import InputCustom from '../../components/input/inputText'

const LearnuseReducer = () => {
    const [{ listUser, isOpenModel, dataModel }, dispatch] = useStore()

    return (
        <form>
            <div>
                {listUser.map((value, index) => {
                    return <h1 key={index}>{value.name}</h1>
                })}
            </div>
            <InputCustom name={'username'} />
            <ButtonCustom type={'reset'} text={'Click đi nào!'} />
        </form>
    )
}

export default LearnuseReducer
