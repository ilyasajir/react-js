const UsersServices = {}

UsersServices.data = {
    token: "Akj82kj6GAyeO117sa?as",
    isAuthenticated: true,
    user: {
        firstname: "John",
        lastName: "Doe",
        email: "myudisobari12@gmail.com",
    }
}

UsersServices._userLoader = async ()=> {
    let user = localStorage.getItem('user') !== null ? JSON.parse(localStorage.getItem('user')) : null
    let token = localStorage.getItem('token') !== null && localStorage.getItem('token') !== "null" ? localStorage.getItem('token') : null
    return {
        user,token
    }
}
UsersServices._userLogout = async ()=> {}
UsersServices._userLogin = async (values)=> {

}
UsersServices._userRegister = async (values)=> {
    console.log(values)
    localStorage.setItem('user', JSON.stringify({...values}))
    localStorage.setItem('token', UsersServices.data.token)

    return{
        user: JSON.parse(localStorage.getItem('user')),
        token :UsersServices.data.token
    }
}

/**
 * @define - VERIFY
 */
UsersServices._userVerifyEmail = async ()=> {}
UsersServices._userVerifyOTP    = async ()=> {}


/**
 * @define - PAYMENT
 */
UsersServices._userPayment = async ()=> {}


UsersServices._addToCart = async ()=> {}
UsersServices._getCart = async ()=> {}
UsersServices._deleteCart = async ()=> {}
UsersServices._putCart = async ()=> {}




export default UsersServices