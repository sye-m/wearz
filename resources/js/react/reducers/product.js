import { SET_PRODUCT  } from '../actions/types'

const initialState = {};
export default function product(state = initialState, action) {
    const { payload, type } = action;
    switch (type) {
        case SET_PRODUCT:
            return {...state,...payload};
        default:
            return state;
    }
}