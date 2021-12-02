export const getToken = ()=> {
    return {
        type: "GET_TOKEN"
    }
}

export const SuccessGetToken = (token,user)=> {
    console.log(token)
    return {
        type: "SUCCESS_GET_TOKEN",
        token, user
    }
}
export const ErrorGetToken = ()=> {
    return {
        type: "ERROR_GET_TOKEN"
    }
}

export const Authenticated = (values)=> {
    return {
        type: "IS_LOGIN",
        values
    }
}

export const isAuthentications = (token,user)=> {
    return {
        type:"SUCCESS_IS_LOGIN",
        token,user
    }
}

export const AuthRegister = (values)=> {
    return {
        type: "IS_REGISTER",
        values
    }
}

export const SuccessRegister = (token,user)=> {
    return {
        type:"SUCCESS_REGISTER",
        token,user
    }
}


export const isLogout = ()=> {
    return {
        type: "IS_LOGOUT"
    }
}