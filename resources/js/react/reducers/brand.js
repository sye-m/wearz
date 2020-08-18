import { SET_BRANDS  } from '../actions/types'

const initialState = [];
export default function brand(state = initialState, action) {
    const { payload, type } = action;
    switch (type) {
        case SET_BRANDS:
            return [...payload];
        default:
            return state;
    }
}