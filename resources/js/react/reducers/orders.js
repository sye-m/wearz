import { SET_ORDERS, ORDERS_ERROR, LOADING_ORDERS  } from '../actions/types'

const initialState = {products:[],loading:true};
export default function orders(state = initialState, action) {
    const { payload, type } = action;
    switch (type) {
        case SET_ORDERS:
            return {...state,products:[...payload],loading:false};
        case LOADING_ORDERS:
            return {...state, loading:true}
        case ORDERS_ERROR:
            return {products:[],loading:false}
        default:
            return state;
    }
}