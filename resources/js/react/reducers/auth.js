import { REGISTER_SUCCESS, REGISTER_FAIL, LOAD_USER, LOGIN_SUCCESS, LOGIN_FAIL, LOG_OUT, AUTH_ERROR, LOADING_USER, SET_GUEST} from '../actions/types'

const initialState = {
    user: null,
    isAuthenticated: false,
    loading:true,
    guestId:''
};
export default function auth(state = initialState, action) {
    const { payload, type } = action;
    switch (type) {
        case LOAD_USER:
            return {
                ...state,
                isAuthenticated: true,
                user: payload,
                loading:false,
                guestId:''
            }

        case LOADING_USER:
            return {
                ...state,
                loading:true
            }

        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading:false,
                isAuthenticated: true
            };
        case SET_GUEST:
            return {
                ...state,
                user: null,
                guestId:payload,
                isAuthenticated: false,
                loading:false
            }
        case REGISTER_FAIL:
        case LOGIN_FAIL:
        case LOG_OUT:
        case AUTH_ERROR:
            return {
                ...state,
                user: null,
                isAuthenticated: false,
                loading:false
            };

        default:
            return state;
    }
}