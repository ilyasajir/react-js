import { combineReducers } from 'redux';

import Themes from './themes'

const reducers = combineReducers({
    Theme: Themes,
})

export default reducers