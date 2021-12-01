import { all, takeEvery, put, fork, call} from 'redux-saga/effects';

export function* signInUsers(){
    yield takeEvery("USER_LOGIN", function* ({payload}){
        try{

        }catch(err){

        }
    })
}

export default function* rootSaga(){
    yield all([
        fork(signInUsers),
    ])
}