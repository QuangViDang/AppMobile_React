import { useContext } from 'react'
import UserContext from './user.context'

export const useStore = () => {
    const [state, dispatch] = useContext(UserContext)
    return [state, dispatch]
}
