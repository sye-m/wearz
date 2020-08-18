import { SET_PRODUCT_TYPES  } from '../actions/types'

const initialState = [];
export default function productType(state = initialState, action) {
    const { payload, type } = action;
    switch (type) {
        case SET_PRODUCT_TYPES:
            return [...payload];
        default:
            return state;
    }
}