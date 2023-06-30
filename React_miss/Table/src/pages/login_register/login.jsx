import React, { useState } from 'react'
import InputCustom from '../../components/input/inputText'
import IMAGE_APP from '../../assets/image'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import styles from './style.module.scss'
import useViewport from '../../Mobile/viewWidth'


const LoginPage = () => {
    const [data, setData] = useState({
        username: '',
        password: '',
    })

    const [errorShow, setErrorShow] = useState({
        errorText_Username: '',
        errorText_Password: '',
    })
    const erro_list = {
        errorLength: 'value.length > 0 && value.length < 6',
        errorPassword: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/,
    }

    const handleShowPass = () => {
    }
    const validate = (input, value, set_errorText, Length, Pass) => {
        if (eval(Length)) {
            setErrorShow({ ...data, [set_errorText]: 'Tối thiểu 6 ký tự' })
            
        } else if (input === 'password' && !Pass.test(value)) {
            setErrorShow({
                ...data,
                [set_errorText]:
                    'Tối thiểu 1 ký tự IN hoa, 1 ký tự in thường, 1 chữ số!',
            })
        } else {
            setData({ ...data, [input]: value })
            setErrorShow({ ...data, [set_errorText]: '' })
        }
    }

    const handleChangeInput = (e) => {
        const { name, value } = e
        if (name === 'username') {
            // console.log(name)
            validate(
                name,
                value,
                'errorText_Username',
                erro_list.errorLength,
                '/^$/'
            )
        } else if (name === 'password') {
            validate(
                name,
                value,
                'errorText_Password',
                erro_list.errorLength,
                erro_list.errorPassword
            )
        }
    }

    const api_login = 'http://3.85.3.86:9001/api/auth/login'
    const handleSubmit = () => {
        if (Object.values(data).some((value) => !value)) {
            toast.error('Vui lòng nhập thông tin', { autoClose: 1000 })
        } else {
            POST_DATA_LOGIN(api_login, data)
            // console.log(data, typeof data)
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
    const isMobile = viewPort.width <= 1024
    if (isMobile) {
        return (
            <div className={styles.SignINUP_Mobile}>
                <div className={styles.form__row}>
                    <h1 className={styles.h1}>Sign In</h1>
                    <img src={IMAGE_APP.iconMain} alt="" />
                </div>

                <div className={styles.form__center}>
                    <p>If you don’t have an account register</p>
                    <p class="Sign">You can Register</p>
                </div>

                <InputCustom
                    ICON={IMAGE_APP.user}
                    onChange={handleChangeInput}
                    label={'Username'}
                    type={'text'}
                    error={errorShow.errorText_Username}
                    name={'username'}
                />
                <InputCustom
                    ICON={IMAGE_APP.pass}
                    name={'password'}
                    label={'Password'}
                    type={'password'}
                    error={errorShow.errorText_Password}
                    onChange={handleChangeInput}
                    Show_pass={IMAGE_APP.showPass}
                    EyesShow={handleShowPass}
                />
                <div class={styles.remember_forgot}>
                    <div>
                        <input
                            type="checkbox"
                            id="Remember me"
                            name="Remember me"
                            value="1"
                        />
                        <label for="Remember me">Remember me</label>
                    </div>
                    <a>Forgot Password ?</a>
                </div>

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
        return<div className={styles.SignINUP}>
            <div className={styles.SignINUP_left}>
                <div className={styles.form__row}>
                    <h1 className={styles.h1}>Sign In</h1>
                    <img src={IMAGE_APP.iconMain} alt="" />
                </div>

                <div className={styles.form__center}>
                    <p>If you don’t have an account register</p>
                    <p class="Sign">You can Register</p>
                </div>

                <InputCustom
                    ICON={IMAGE_APP.user}
                    onChange={handleChangeInput}
                    label={'Username'}
                    type={'text'}
                    error={errorShow.errorText_Username}
                    name={'username'}
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
                <div class={styles.remember_forgot}>
                    <div>
                        <input
                            type="checkbox"
                            id="Remember me"
                            name="Remember me"
                            value="1"
                        />
                        <label for="Remember me">Remember me</label>
                    </div>
                    <a>Forgot Password ?</a>
                </div>

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
                    <h1>Sign In to name</h1>
                </div>
            </div>
        </div>
    }
}

export default LoginPage
