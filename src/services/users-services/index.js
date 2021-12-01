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

UsersServices._userLoader = async ()=> {}
UsersServices._userLogout = async ()=> {}
UsersServices._userLogin = async ()=> {}
UsersServices._userRegister = async ()=> {}

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