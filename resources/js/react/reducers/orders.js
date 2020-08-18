import { SET_ORDERS, ORDERS_ERROR  } from '../actions/types'

const initialState = [];
export default function orders(state = initialState, action) {
    const { payload, type } = action;
    switch (type) {
        case SET_ORDERS:
            return [...payload];
        case ORDERS_ERROR:
            return []
        default:
            return state;
    }
}