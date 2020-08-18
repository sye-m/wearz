import { REGISTER_SUCCESS, REGISTER_FAIL, LOAD_USER, LOGIN_FAIL, LOGIN_SUCCESS, LOG_OUT, AUTH_ERROR, CART_ERROR } from './types';
import { v4 as uuidv4 } from 'uuid';
import { setAlert } from './alert';
import { newCart } from './cart';
export const loadUser = () => async dispatch => {

    if (Auth.user) {
        dispatch({
            type: LOAD_USER,
            payload: Auth.user
        })
    } else {
        let guestId = ''
        if(localStorage.getItem('guestId')){
            guestId = localStorage.getItem('guestId');
        }
        else{
            guestId = uuidv4();
            localStorage.setItem('guestId',guestId);
        }
        dispatch({
            type: AUTH_ERROR,
            payload:guestId
        })
        
    }

}

export const register = ({ name, email, password }) => async dispatch => {
    const newUser = {
        name,
        email,
        password
    }
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify(newUser)
    try {
        const res = await axios.post('/registerCustomer', body, config);
        dispatch(newCart(res.data.id));
        dispatch({
            type: REGISTER_SUCCESS,
        })
        dispatch({
            type: LOAD_USER,
            payload: Auth.user
        })
        dispatch(setAlert('You have registered successfully', 'success'))
    } catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
            errors.email && errors.email.forEach(error => dispatch(setAlert(error, 'error')));
            errors.password && errors.password.forEach(error => dispatch(setAlert(error, 'error')));
            errors.name && errors.name.forEach(error => dispatch(setAlert(error, 'error')));

        }
        dispatch({
            type: REGISTER_FAIL,
        })
    }
}

export const login = ({ email, password }) => dispatch => {
    return new Promise(async function(resolve, reject) {
        const user = {
            email,
            password
        }
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const body = JSON.stringify(user)

        try {
            const res = await axios.post('/loginCustomer', body, config)
            dispatch({
                type: LOGIN_SUCCESS,
            });
            dispatch({
                type: LOAD_USER,
                payload: Auth.user
            })
            dispatch(loadUser())
            resolve('success');
        } catch (err) {
            console.log(err.response.data)
            const errors = err.response.data.errors;
            if (errors) {
                errors.email && errors.email.forEach(error => dispatch(setAlert(error, 'error')));
                errors.password && errors.password.forEach(error => dispatch(setAlert(error, 'error')));
            }
            dispatch({ type: LOGIN_FAIL })
            reject('error');
        }
    })
}

export const logout = () => dispatch => {
    axios.post('/logoutCustomer');
    dispatch({type:CART_ERROR});
    dispatch({ type: LOG_OUT });
}