import './index'
import Demo from './modules/auth/toast'
import Clock from './modules/auth/Clock'
import LoginPage from './pages/login_register/login'
import RegisterPage from './pages/login_register/register'
import LearnuseReducer from './pages/todoApp/learnuseReducer'
import Todoapp from './pages/todoApp/table'
import { useStore } from './context'
import Model_Edit from './pages/todoApp/model_todoUser/model_edit'
import UseCallbackLearn from './components/memo_useCallback_useMemo/useCallback_learn'
import Table_card from './components/card/cardTable_todo'
import Table from './pages/todoApp/table'
import Modal__ from './components/modal/modal'

function App() {
    const [stateGlobal, dispathGlobal] = useStore()

    return (
        <div>
            <Table />
            {stateGlobal.isOpenModal && <Modal__/>}
        </div>
    )
}

export default App
