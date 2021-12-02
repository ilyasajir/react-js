import { all, takeEvery, put, fork, call } from 'redux-saga/effects';
import {ProductServices, SuccessGetProduct, SuccessGetSingle} from "../../actions";

export function* getallProduct() {
    yield takeEvery("GET_PRODUCT", function* ({max}){
        try{
            const response = yield call(()=> {
                return new Promise((resolve)=> {
                    setTimeout(()=>{
                        resolve(ProductServices.data.data.slice(0,max))
                    },3000)
                })
            })

            if (response){
                yield put(SuccessGetProduct(response))
            }

        }catch(err){

        }
    })
}
export function* getSingleProduct() {
    yield takeEvery("GET_SINGLE_PRODUCT", function* ({id}){
        try{
            const response = yield call(()=> {
                return new Promise((resolve)=> {
                    setTimeout(()=>{
                        resolve(ProductServices.data.data.filter((item)=> item.id === parseInt(id)))
                    },3000)
                })
            })

            console.log(response)
            if (response){
                yield put(SuccessGetSingle(response))
            }

        }catch(err){

        }
    })
}


export default function* rootSaga() {
    yield all([
            fork(getallProduct),
            fork(getSingleProduct),
        ])

}