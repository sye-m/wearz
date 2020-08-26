import { SET_ORDERS, ORDERS_ERROR, LOADING_ORDERS, CLEAR_ORDERS  } from '../actions/types'

const initialState = {products:[],loading:true};
export default function orders(state = initialState, action) {
    const { payload, type } = action;
    switch (type) {
        case SET_ORDERS:
            return {...state,products:[...payload],loading:false};
        case LOADING_ORDERS:
            return {...state,products:[], loading:true}
        case ORDERS_ERROR:
        case CLEAR_ORDERS:
            return {products:[],loading:false}
        default:
            return state;
    }
}