import { SET_PRODUCTS,LOADING_PRODUCTS  } from '../actions/types'

const initialState = {products:[],loading:true};
export default function products(state = initialState, action) {
    const { payload, type } = action;
    switch (type) {
        case SET_PRODUCTS:
            return {products:[...payload],loading:false};
        case LOADING_PRODUCTS:
            return {...state,products:[],loading:true}
        default:
            return state;
    }
}