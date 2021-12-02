const initialState = {
    opt:{
        search:"",
    },
    single: {
        loading:true,
        data : []
    },
    collections: {
        loading: true,
        data : []
    }
}

export default function (state = initialState,action){
    switch (action.type){
        case "GET_PRODUCT":
            return{
                ...state,
                collections: {
                    ...state.collections,
                    loading:true,
                    data: []
                }
            }
        case "GET_SINGLE_PRODUCT":
            return {
                ...state,
                single: {
                    ...state.single,
                    loading: true,
                }
            }
        case "SUCCESS_GET_SINGLE_PRODUCT":
            return {
                ...state,
                single: {
                    ...state.single,
                    loading: false,
                    data : action.payload
                }
            }
        case "SUCCESS_GET_PRODUCT":
            return {
                ...state,
                collections: {
                    ...state.collections,
                    loading:false,
                    data: [...action.payload]
                }
            }
        default:
            return state;
    }
}