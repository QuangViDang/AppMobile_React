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
                ...state.listUser,
                listUser:[ action.payload.listUser],
            }
        case 'DELETE_USER':
            return {
                ...state,
                dataModal: action.payload,
                isOpenModel_Delete: true,
            }
        case 'DELETE_USER_FAIL':
            return {
                ...state,
                isOpenModel_Delete: false,
            }
        case 'USER_DETAIL':
            return {
                ...state,
                dataModal: action.payload,
                isOpenModel_Detail: true,
            }
        case 'USER_DETAIL_CLOSE':
            return {
                ...state,
                isOpenModel_Detail: false,
            }
        case 'SHOW_MODEL':
            return {
                ...state,
                isOpenModel_Edit: true,
                dataModal: action.payload,
            }

        case 'HIDE_MODEL':
            return {
                ...state,
                isOpenModel_Edit: false,
                dataModal: action.payload,
            }
        default:
            return state
    }
}

export { initState }
export default reducer
