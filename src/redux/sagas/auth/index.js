import {all, takeEvery, put, fork, call} from 'redux-saga/effects';
import {ErrorGetToken, isAuthentications, SuccessGetToken} from "../../actions/auth";
import UsersServices from "../../../services/users-services";

const token = 'lnBAiIYvsLK12&^fgBKAJSD'

export function* signInUsers() {
    yield takeEvery("IS_LOGIN", function* ({values}) {
        try {
            const response = yield call(() => {
                return new Promise((resolve) => {
                    localStorage.setItem('user', JSON.stringify(values))
                    localStorage.setItem('token', JSON.stringify(token))
                    setTimeout(() => {
                        resolve({token, user: values})
                    }, 3000)
                })
            })

            if (response) {
                yield put(isAuthentications(response.token, response.user))
            }
        } catch (err) {

        }
    })
}
export function* signUpUsers() {
    yield takeEvery("IS_REGISTER", function* ({values}) {
        try {
            const response = yield call(() => {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(UsersServices._userRegister(values))
                    }, 3000)
                })
            })

            if (response) {
                yield put(isAuthentications(response.token, response.user))
            }
        } catch (err) {
            yield put(ErrorGetToken())
        }
    })
}

export function* getToken() {
    yield takeEvery("GET_TOKEN", function* ({}) {
        try {
            const response = yield call(() => {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        return resolve(UsersServices._userLoader())
                    }, 3000)
                })
            })

            if (response.token !== null) {

                    yield put(SuccessGetToken(response.token, response.user))
            }else{
                yield put(ErrorGetToken())
            }
        } catch (err) {
            yield put(ErrorGetToken())
        }
    })
}


export default function* rootSaga() {
    yield all([
        fork(signInUsers),
        fork(signUpUsers),
        fork(getToken),
    ])
}