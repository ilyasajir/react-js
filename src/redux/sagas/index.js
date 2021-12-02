import {all} from 'redux-saga/effects'
import Auth from './auth'
import Product from './product'
import Cart from './cart'

export default function* rootSaga(){
    yield all([
        Auth(),
        Product(),
        Cart()

    ]);
}