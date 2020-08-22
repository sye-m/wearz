import { REGISTER_SUCCESS, REGISTER_FAIL, LOAD_USER, LOGIN_FAIL, LOGIN_SUCCESS, LOG_OUT, AUTH_ERROR, CART_ERROR,LOADING_USER,SET_GUEST } from './types';
import { v4 as uuidv4 } from 'uuid';
import { setAlert } from './alert';
import { getCart,newCart,newGuestCart } from './cart';
import { setCookie,getCookie} from './../cookie';
//get the user 
const getUser = async () => {
    try{
    let res = await axios.get('/getUser');
    let user = res.data.user
    return user;
    }
    catch(err){
        return null
    }
}

export const loadUser = () => async dispatch => {
    try{
        if (Auth.signedIn) {
            let user = await getUser();
            dispatch({
                type: LOAD_USER,
                payload: user
            })
        } else {
            let guestId = getCookie('guestId');
            console.log(guestId)
            if(guestId === null){
                guestId = uuidv4()
                setCookie('guestId',guestId);
                newGuestCart()
            }
            dispatch({
                type: SET_GUEST,
                payload:guestId
            })
            
        }
    }
    catch(err){
        dispatch(setAlert('Something went wrong try reloading the page','error'))
    }

}

export const register = ({ name, email, password }) => async dispatch => {
    try {
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
            dispatch({type:LOADING_USER})
            const res = await axios.post('/registerCustomer', body, config);
            //after user has successfully registered create a cart and assign it to this user
            dispatch(newCart(res.data.id));
            dispatch({
                type: REGISTER_SUCCESS,
            })
            let user = await getUser();
            dispatch({
                type: LOAD_USER,
                payload: user
            })
            dispatch(setAlert('You have registered successfully', 'success'))
    } 
    catch (err) {
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
            dispatch({type:LOADING_USER})
            await axios.post('/loginCustomer', body, config)
            dispatch({
                type: LOGIN_SUCCESS,
            });
            let user = await getUser();
            dispatch({
                type: LOAD_USER,
                payload: user
            });
            dispatch(getCart());
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

export const logout = () => async dispatch => {
    await axios.get('/logoutCustomer');
    dispatch({type:CART_ERROR});
    dispatch({ type: LOG_OUT });
}