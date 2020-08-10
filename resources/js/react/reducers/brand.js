import { GET_BRANDS  } from '../actions/types'

const initialState = [];
export default function brand(state = initialState, action) {
    const { payload, type } = action;
    switch (type) {
        case GET_BRANDS:
            return [...state, ...payload];
        default:
            return state;
    }
}