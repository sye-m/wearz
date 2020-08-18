import { SET_CART, CART_ERROR  } from '../actions/types'

const initialState = [];
export default function brand(state = initialState, action) {
    const { payload, type } = action;
    switch (type) {
        case SET_CART:
            return [...payload];
        case CART_ERROR:
            return []
        default:
            return state;
    }
}