import React, { useEffect, useState } from 'react'
import './Login.css'
import logo from '../assets/logo/logo.svg'
import google from '../assets/logo/gg.svg'
import face from '../assets/logo/gFace.svg'
import apple from '../assets/logo/gApple.svg'
import user_img from '../assets/icons/user.svg'
import key_img from '../assets/icons/pass.svg'
import show_pass from '../assets/icons/show_.svg'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Login() {
    const api_SignUp = 'http://3.85.3.86:9001/api/auth/verify?code='

    const successTrue = () =>
        toast.success('Thành công!', {
            autoClose: 2000,
        })

    const [valueUser, setUser] = useState('')
    const handleUsername = (event) => {
        setUser(event.target.value)
    }
    const validateUser = (valueUser) => {
        if (valueUser.length < 6) {
            return (<p>
                User cần tối thiểu 6 ký tự
            </p>);
        }else{
            return(<p></p>);
        }
    }

    const [pass, setPass] = useState('')
    const handlePassword = (event) => {
        setPass(event.target.value)
    }

    return (
        <form>
            <div className="SignUpIn">
                <div className="form_row logo_">
                    <h1>Sign In</h1>
                    <img className="logo" src={logo} alt="" />
                </div>

                <p class="form__center">
                    <p>If you don’t have an account register</p>
                    You can
                    <b>
                        <a href="./SignUp.html"> Register here !</a>
                    </b>
                </p>

                <div class="divusername">
                    <label class="intro">Username</label>
                    <div class="form_row inp">
                        <img className="icons" src={user_img} alt="" />
                        <input
                            id="username"
                            type="text"
                            value={valueUser}
                            onChange={handleUsername}
                            placeholder="Enter your account"
                        />
                    </div>
                    <p
                        id="errorUsername"
                        class="perror"
                        style={{ color: 'red' }}
                    >
                        {validateUser(valueUser)}
                    </p>
                    <hr />
                </div>

                <div class="divpassword">
                    <label class="intro">Password</label>
                    <div class="form_row security">
                        <div class="form_row inp">
                            <img className="icons" src={key_img} alt="" />
                            <input
                                id="password"
                                type="password"
                                name="password"
                                value={pass}
                                onChange={handlePassword}
                                placeholder="Enter your Password"
                            />
                        </div>
                        <div type="button">
                            <img className="icons" src={show_pass} alt="" />
                        </div>
                    </div>
                    <p
                        id="errorPassword"
                        class="perror"
                        style={{ color: 'red' }}
                    >
                        {pass}
                    </p>
                    <hr />
                </div>
                <div class="form_row forgot">
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
                <button id="submit" type="submit" onClick={successTrue}>
                    Log in
                </button>
                <ToastContainer />
                <div className="form__center">
                    <p>or continue with</p>
                    <div class="other_acc">
                        <img src={face} alt="" />
                        <img src={apple} alt="" />
                        <img src={google} alt="" />
                    </div>
                </div>
            </div>
        </form>
    )
}
