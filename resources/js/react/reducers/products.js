import { GET_PRODUCTS  } from '../actions/types'

const initialState = [];
export default function products(state = initialState, action) {
    const { payload, type } = action;
    switch (type) {
        case GET_PRODUCTS:
            return [...payload];
        default:
            return state;
    }
}