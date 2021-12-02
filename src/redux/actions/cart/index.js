export const getCart = ()=> {
    return {
        type: "GET_CART"
    }
}
export const SuccessGetCart = (data)=> {
    return {
        type: "SUCCESS_GET_CART",
        data
    }
}
export const DeleteCart = (id)=> {
    return {
        type: "DELETE_CART",
        id
    }
}

export const addToCart = (values)=> {
    return {
        type: "ADD_TO_CART",
        values
    }
}

export const SuccessAddToCart = (data)=> {

    return {
        type: "SUCCESS_ADD_TO_CART",
        data
    }
}



export const ChangeQty = (id,qty)=> {
    return {
        type: "CHANGE_QTY",
        id,qty
    }
}

export const SuccessChangeQty = (data)=> {
    return {
        type: "SUCCESS_CHANGE_QTY",
        data
    }
}