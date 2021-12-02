import { all, takeEvery, put, fork, call } from 'redux-saga/effects';
import {SuccessAddToCart, SuccessChangeQty, SuccessGetCart} from "../../actions/cart";

export function* _getCart(){
    yield takeEvery("GET_CART", function* (){
        try{
            const response = yield call(()=> {
                return new Promise((resolve)=> {
                    setTimeout(()=> {
                        resolve(JSON.parse(localStorage.getItem('cart')))
                    },3000)
                })
            })
            console.log(response)

            if (response){
                yield put(SuccessGetCart(response))
            }
        }catch (e){
            yield put(SuccessGetCart([]))
        }
    })
}
export function* _addToCart(){
    yield takeEvery("ADD_TO_CART", function* ({values}){
        try{

            const response = yield call(()=> {
                return new Promise((resolve)=> {

                    if (localStorage.getItem('cart')){
                        let data = [];
                        data = JSON.parse(localStorage.getItem('cart'))
                        data.push({
                            ...values,
                            qty:1
                        })
                        localStorage.setItem('cart', JSON.stringify(data))
                        setTimeout(()=> {resolve(data)},3000)
                    }
                    // setTimeout(()=> {
                    //     resolve(JSON.parse(localStorage.setItem('cart')))
                    // },3000)
                })
            })
            if (response){

                yield put(SuccessAddToCart({...values,qty:1}))
            }
        }catch (e){

        }
    })
}



export function* _addQty(){
    yield takeEvery("CHANGE_QTY", function* ({id,qty}){
        try{
            const response = yield call(()=> {
                return new Promise((resolve)=> {
                    let data = JSON.parse(localStorage.getItem('cart'))
                    const dataFiltered = data.filter((item)=> item.id !== parseInt(id))
                    const MatchFiltered = data.filter((item)=> item.id === parseInt(id))

                    let newData = []
                    if (MatchFiltered.length > 0){
                        MatchFiltered[0].qty = qty

                        newData = [
                            ...dataFiltered,
                            ...MatchFiltered,
                        ]
                    }
                    localStorage.setItem('cart',JSON.stringify(newData))
                    setTimeout(()=> {
                        resolve(newData)
                    },100)
                })
            })
            if (response){
                yield put(SuccessChangeQty(response))
            }
        }catch (e){

        }
    })
}

export default function* rootSaga() {
    yield all([
        fork(_getCart),
        fork(_addToCart),
        fork(_addQty),
        ])
}