import Constants from '../../../constants'
import Utils from '../../../utils'

if (Utils.StorageLocal('get','language') === null){
    Utils.StorageLocal('set','language',Constants.LANGUAGE.LANG_DEFAULT)
}

const initialState = {
    className: "theme-light",
    direction:'LTR',
    language:`${Utils.StorageLocal('get','language')}`,
    browser:{
        userAgent:{},
        isOnline: navigator.onLine,
    },

}

export default function (state = initialState, action){
    switch (action.type){
        case Constants.THEMES.CHANGE_THEME_TO_DARK:
            return {
                ...state,
                className: "theme-dark"
            }
        case Constants.THEMES.CHANGE_THEME_TO_LIGHT:
            return {
                ...state,
                className: "theme-light"
            }

        case Constants.THEMES.CHANGE_LANGUAGE:
            Utils.StorageLocal('set','language',action.payload)
            return {
                ...state,
                language: action.payload
            }
        default:
            return state;
    }
}