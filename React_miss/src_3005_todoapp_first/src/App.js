import './index'
import Demo from './modules/auth/toast'
import Clock from './modules/auth/Clock'
import LoginPage from './pages/login_register/login'
import RegisterPage from './pages/login_register/register'
import LearnuseReducer from './pages/todoApp/learnuseReducer'
import Todoapp from './pages/todoApp/todoapp'
import { useContext, useState } from 'react'
import UserProvider from './context/user.provider'
import UserContext from './context/user.context'

function App() {
    return (
        <div>
            <Todoapp />
            {/* <LearnuseReducer /> */}
        </div>
    )
}

export default App
