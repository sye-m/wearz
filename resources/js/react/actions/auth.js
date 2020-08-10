import { REGISTER_SUCCESS, REGISTER_FAIL, LOAD_USER, LOGIN_FAIL, LOGIN_SUCCESS, LOG_OUT, AUTH_ERROR } from './types';
import { setAlert } from './alert';
export const loadUser = () => async dispatch => {

    if (Auth.user) {
        dispatch({
            type: LOAD_USER,
            payload: Auth.user
        })
    } else {
        dispatch({
            type: AUTH_ERROR,
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
    dispatch({ type: LOG_OUT });
}