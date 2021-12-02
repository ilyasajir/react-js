import { combineReducers } from 'redux';

import Themes from './themes'
import Product from './product'
import Cart from './cart'
import Auth from './auth'

const reducers = combineReducers({
    Auth: Auth,
    product: Product,
    cart: Cart,
    Theme: Themes,
})

export default reducers