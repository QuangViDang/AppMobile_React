import './index'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Demo from './modules_auth/Demo'
import Clock from './modules_auth/Clock'
import LoginPage from './modules_auth/login'
import RegisterPage from './modules_auth/register'

function App() {
    return (
        <div>
            {/* <LoginPage /> */}
            <RegisterPage/>
        </div>
    )
}

export default App
