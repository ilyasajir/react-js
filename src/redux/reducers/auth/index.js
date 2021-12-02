if (!localStorage.getItem('token')) {
    localStorage.setItem('token', null)
}
if (!localStorage.getItem('user')) {
    localStorage.setItem('user', null)
}


const initialState = {
    isAuth: false,
    loading: true,
    token: null,
    user: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case "GET_TOKEN":
            return {
                ...state,
                loading: true
            }
        case "SUCCESS_GET_TOKEN":
            return {
                ...state,
                loading: false,
                isAuth: true,
                token: action.token,
                user: action.user
            }

        case "SUCCESS_IS_LOGIN":
            return {
                ...state,
                isAuth: true,
                token: action.token,
                user: action.user
            }
        case "SUCCESS_REGISTER":
            return {
                ...state,
                isAuth: true,
                token: action.token,
                user: action.user
            }

        case "ERROR_GET_TOKEN":
        case "IS_LOGOUT":
            localStorage.setItem('token', null)
            localStorage.setItem('user', null)
            return {
                isAuth: false,
                loading: false,
                token: null,
                user: null
            }
        default:
            return state;
    }
}