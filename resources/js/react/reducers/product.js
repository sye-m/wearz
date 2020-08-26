import { SET_PRODUCT,LOADING_PRODUCT, PRODUCT_ERROR  } from '../actions/types'

const initialState = {product:{},loading:true};
export default function product(state = initialState, action) {
    const { payload, type } = action;
    switch (type) {
        case SET_PRODUCT:
            return {...state,loading:false,product:{...payload}};
        case LOADING_PRODUCT:
            return {...state,product:{},loading:true}
        case PRODUCT_ERROR:
            return {...state,product:{},loading:false}
        default:
            return state;
    }
}