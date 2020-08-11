import { GET_PRODUCT_TYPES  } from '../actions/types'

const initialState = [];
export default function productType(state = initialState, action) {
    const { payload, type } = action;
    switch (type) {
        case GET_PRODUCT_TYPES:
            return [...state, ...payload];
        default:
            return state;
    }
}