import { REGISTER_SUCCESS, REGISTER_FAIL, LOAD_USER, LOGIN_SUCCESS, LOGIN_FAIL, LOG_OUT, AUTH_ERROR } from '../actions/types'

const initialState = {
    user: null,
    isAuthenticated: false
};
export default function auth(state = initialState, action) {
    const { payload, type } = action;
    switch (type) {
        case LOAD_USER:
            return {
                ...state,
                isAuthenticated: true,
                user: payload
            }
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true
            };
        case REGISTER_FAIL:
        case LOGIN_FAIL:
        case LOG_OUT:
        case AUTH_ERROR:
            return {
                ...state,
                user: null,
                isAuthenticated: false
            };
        default:
            return state;
    }
}