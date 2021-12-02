
if (!localStorage.getItem('cart')){
    localStorage.setItem('cart', JSON.stringify([]));
}

const initialState = {
    loading: true,
    data: [...JSON.parse(localStorage.getItem('cart'))]
}

export default function(state =initialState,action){
    switch (action.type){
        case "ADD_TO_CART":
            return {
                ...state,
                loading: true
            }
        case "SUCCESS_ADD_TO_CART":
            return {
                ...state,
                loading: false,
                data: [...state.data,action.data]
            }
        case "GET_CART":
            return{
                ...state,
                loading: true,
            }
        case "SUCCESS_GET_CART":
            return {
                ...state,
                loading: false,
                data : [...action.data]
            }
        case "SUCCESS_CHANGE_QTY":
            return {
                ...state,
                loading: false,
                data : [...action.data]
            }
        default:
            return state;
    }
}