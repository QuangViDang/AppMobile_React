import React, { useEffect, useState } from 'react'
import InputCustom from '../components/input/inputText'
import IMAGE_APP from '../assets/image'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import styles from './style.module.scss'
import useViewport from '../Mobile/viewWidth'

const LoginPage = () => {
    const [data, setData] = useState({
        email: '',
        username: '',
        password: '',
        dOB: '',
        sex: '',
    })

    const [errorShow, setErrorShow] = useState({
        errorText_Email: '',
        errorText_Username: '',
        errorText_Password: '',
        errorText_ComfirmPassword: '',
    })
    const erro_list = {
        errorEmail: /^[a-zA-Z0-9._]+@+[a-zA-Z0-9-]+\.[a-zA-Z.-]{2,}$/,
        errorLength: 'value.length > 0 && value.length < 6',
        errorPassword: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/,
    }

    const validate = (input, value, set_errorText, Length, Pass, Email) => {
        if ((input === 'username' || input === 'password') && eval(Length)) {
            setErrorShow({ ...data, [set_errorText]: 'Tối thiểu 6 ký tự' })
            console.log('Length', value)
        } else if (input === 'password' && !Pass.test(value)) {
            setErrorShow({
                ...data,
                [set_errorText]:
                    'Tối thiểu 1 ký tự IN hoa, 1 ký tự in thường, 1 chữ số!',
            })
            console.log('Pass', value)
        } else if (input === 'email' && !Email.test(value)) {
            setErrorShow({
                ...data,
                [set_errorText]: 'Không thể xác định email của bạn!',
            })
            console.log('Email', value)
        } else if (input === 'passwordComfirm' && data.password !== value) {
            setErrorShow({
                ...data,
                [set_errorText]: 'Mật khẩu nhập lại chưa khớp',
            })
            console.log('ComfirmPass', value)
        } else {
            setData({ ...data, [input]: value })
            setErrorShow({ ...data, [set_errorText]: '' })
        }
    }

    const handleChangeInput = (e) => {
        const { name, value } = e
        if (name === 'username') {
            console.log(name)
            validate(
                name,
                value,
                'errorText_Username',
                erro_list.errorLength,
                '/^$/'
            )
        } else if (name === 'email') {
            validate(
                name,
                value,
                'errorText_Email',
                '/^$/',
                '/^$/',
                erro_list.errorEmail
            )
        } else if (name === 'password') {
            validate(
                name,
                value,
                'errorText_Password',
                erro_list.errorLength,
                erro_list.errorPassword
            )
        } else if (name === 'passwordComfirm') {
            validate(
                name,
                value,
                'errorText_ComfirmPassword',
                erro_list.errorLength,
                erro_list.errorPassword
            )
        } else if (name === 'dOB' && value) {
            console.log('Ngày: ', value)
            setData({ ...data, [name]: new Date(value).getTime() })
        } else if (name === 'sex' && value) {
            console.log('Giới tính nè: ', value)
            setData({ ...data, [name]: value })
        }
    }

    const [datenow, setDatenow] = useState('')
    const today_7h = new Date()
    today_7h.setHours(today_7h.getHours() + 7)
    const today = today_7h.toISOString().split('T')[0]
    useEffect(() => {
        setDatenow(today)
    }, [])

    const api_login = 'http://3.85.3.86:9001/api/auth/sign-in'
    const handleSubmit = () => {
        if (Object.values(data).some((value) => !value)) {
            toast.error('Vui lòng nhập thông tin', { autoClose: 1000 })
            console.log(data, typeof data)
        } else {
            POST_DATA_LOGIN(api_login, data)
            console.log(data, typeof data)
        }
    }

    const POST_DATA_LOGIN = async (api, data) => {
        try {
            const reponse = await fetch(api, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })

            const resuft = await reponse.json()
            if (reponse.ok) {
                toast.success('Thành công!', { autoClose: 1000 })
            } else {
                toast.error(resuft.message)
            }
        } catch (error) {
            console.log('Error: ', error)
        }
    }

    const viewPort = useViewport()
    const isMobile = viewPort.width <= 1324
    if (isMobile) {
        return (
            <div className={styles.SignINUP_Mobile}>
                <div className={styles.form__row}>
                    <h1 className={styles.h1}>Sign Up</h1>
                    <img src={IMAGE_APP.iconMain} alt="" />
                </div>

                <div className={styles.form__center}>
                    <p>If you don’t have an account register</p>
                    <p class="Sign">You can Login</p>
                </div>

                <InputCustom
                    ICON={IMAGE_APP.email}
                    name={'email'}
                    label={'Email'}
                    type={'text'}
                    error={errorShow.errorText_Email}
                    onChange={handleChangeInput}
                />
                <InputCustom
                    ICON={IMAGE_APP.user}
                    onChange={handleChangeInput}
                    label={'Username'}
                    type={'text'}
                    error={errorShow.errorText_Username}
                    name={'username'}
                />
                <InputCustom
                    onChange={handleChangeInput}
                    label={'Planet'}
                    type={'radio'}
                    id={'male'}
                    value_input="male"
                    Planet={
                        <>
                            <label for="male">Male</label>
                            <input
                                type="radio"
                                id="female"
                                name="sex"
                                value="female"
                                onChange={(e) => handleChangeInput(e.target)}
                            />
                            <label for="female">Female</label>
                        </>
                    }
                    name={'sex'}
                />
                <InputCustom
                    ICON={IMAGE_APP.pass}
                    name={'password'}
                    label={'Password'}
                    type={'password'}
                    error={errorShow.errorText_Password}
                    onChange={handleChangeInput}
                    Show_pass={IMAGE_APP.showPass}
                />
                <InputCustom
                    ICON={IMAGE_APP.pass}
                    name={'passwordComfirm'}
                    error={errorShow.errorText_ComfirmPassword}
                    label={'Comfirm Password'}
                    type={'password'}
                    onChange={handleChangeInput}
                    Show_pass={IMAGE_APP.showPass}
                />
                <InputCustom
                    ICON={IMAGE_APP.dOB}
                    name={'dOB'}
                    label={'Date of birth'}
                    type={'date'}
                    DateNow={datenow}
                    onChange={handleChangeInput}
                />

                <button onClick={handleSubmit} className={styles.button}>
                    Submit
                </button>
                <ToastContainer />

                <div className={styles.form__center}>
                    <p>or continue with</p>
                    <div class="other_acc">
                        <img src={IMAGE_APP.gApple} alt="" />
                        <img src={IMAGE_APP.google} alt="" />
                        <img src={IMAGE_APP.gFace} alt="" />
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className={styles.SignINUP}>
                <div className={styles.SignINUP_left}>
                    <div className={styles.form__row}>
                        <h1 className={styles.h1}>Sign Up</h1>
                        <img src={IMAGE_APP.iconMain} alt="" />
                    </div>

                    <div className={styles.form__center}>
                        <p>If you don’t have an account register</p>
                        <p class="Sign">You can Login</p>
                    </div>

                    <InputCustom
                        ICON={IMAGE_APP.email}
                        name={'email'}
                        label={'Email'}
                        type={'text'}
                        error={errorShow.errorText_Email}
                        onChange={handleChangeInput}
                    />
                    <InputCustom
                        ICON={IMAGE_APP.user}
                        onChange={handleChangeInput}
                        label={'Username'}
                        type={'text'}
                        error={errorShow.errorText_Username}
                        name={'username'}
                    />
                    <InputCustom
                        onChange={handleChangeInput}
                        label={'Planet'}
                        type={'radio'}
                        id={'male'}
                        value_input="male"
                        Planet={
                            <>
                                <label for="male">Male</label>
                                <input
                                    type="radio"
                                    id="female"
                                    name="sex"
                                    value="female"
                                    onChange={(e) =>
                                        handleChangeInput(e.target)
                                    }
                                />
                                <label for="female">Female</label>
                            </>
                        }
                        name={'sex'}
                    />
                    <InputCustom
                        ICON={IMAGE_APP.pass}
                        name={'password'}
                        label={'Password'}
                        type={'password'}
                        error={errorShow.errorText_Password}
                        onChange={handleChangeInput}
                        Show_pass={IMAGE_APP.showPass}
                    />
                    <InputCustom
                        ICON={IMAGE_APP.pass}
                        name={'passwordComfirm'}
                        error={errorShow.errorText_ComfirmPassword}
                        label={'Comfirm Password'}
                        type={'password'}
                        onChange={handleChangeInput}
                        Show_pass={IMAGE_APP.showPass}
                    />
                    <InputCustom
                        ICON={IMAGE_APP.dOB}
                        name={'dOB'}
                        label={'Date of birth'}
                        type={'date'}
                        DateNow={datenow}
                        onChange={handleChangeInput}
                    />

                    <button onClick={handleSubmit} className={styles.button}>
                        Submit
                    </button>
                    <ToastContainer />

                    <div className={styles.form__center}>
                        <p>or continue with</p>
                        <div class="other_acc">
                            <img src={IMAGE_APP.gApple} alt="" />
                            <img src={IMAGE_APP.google} alt="" />
                            <img src={IMAGE_APP.gFace} alt="" />
                        </div>
                    </div>
                </div>
                <div className={styles.SignINUP_right}>
                    <div className={styles.phone}>
                        <p>+94 0116 789 754</p>
                        <img src={IMAGE_APP.phone} alt="" />
                    </div>

                    <img className={styles.ads} src={IMAGE_APP.loginImage} />
                    <div className={styles.text_left}>
                        <p>Lorem Ipsum is simply </p>
                        <h1>Sign Up to name</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginPage
