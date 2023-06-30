const initState = {
    listUser: [],
    isOpenModel_Edit: false,
    isOpenModel_Detail: false,
    isOpenModel_Delete: false,
    dataModal: { id: null, name: null, email: null },
}

function reducer(state, action) {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                listUser: action.payload.listUser,
            }

        case 'ADD_USER':
            return {
                ...state,
                listUser: [...state.listUser, action.payload.user],
            }
        case 'CHANGE_USER':
            const newList = [...state.listUser]
            const index = newList.findIndex(
                (value) => value.id === action.payload.id
            )
            newList[index] = action.payload

            return { ...state, listUser: newList }
        case 'REMOVE_USER':
            return { loading: false, user: {} }
        case 'SET_LIST_USER':
            return { loading: false, listUser: action.payload.listUser }
        case 'SHOW_MODAL':
            return {
                ...state,
                isOpenModal: true,
                dataModal: action.payload.dataModal,
                typeModal: action.payload.typeModal,
                onClick: action.payload.onClick,
            }
        case 'HIDE_MODAL':
            return { ...state, isOpenModal: false, dataModal: null }

        default:
            return state
    }
}

export { initState }
export default reducer
