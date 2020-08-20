import { SET_CART, CART_ERROR,LOADING_CART  } from '../actions/types'

const initialState = {products:[],loading:true};
export default function brand(state = initialState, action) {
    const { payload, type } = action;
    switch (type) {
        case SET_CART:
            return {...state,products:[...payload],loading:false};
        case LOADING_CART:
            return {...state,loading:true};
        case CART_ERROR:
            return {products:[],loading:false}
        default:
            return state;
    }
}