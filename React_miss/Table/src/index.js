import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { User_Provider } from './context'
import LearnuseReducer from './pages/todoApp/learnuseReducer'
import Todoapp from './pages/todoApp/table'
import Table_card from './components/card/cardTable_todo'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <User_Provider>
        <App />
    </User_Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
