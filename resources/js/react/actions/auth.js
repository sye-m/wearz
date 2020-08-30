import { REGISTER_SUCCESS, REGISTER_FAIL, LOAD_USER, LOGIN_FAIL, LOGIN_SUCCESS, LOG_OUT,LOADING_USER,SET_GUEST,CLEAR_CART, CLEAR_ORDERS } from './types';
import { v4 as uuidv4 } from 'uuid';
import { setAlert } from './alert';
import { getCart,newCart,newGuestCart } from './cart';
import { setCookie,getCookie,eraseCookie} from './../cookie';
import { setOrderedProducts } from './orders';
//get the user 
const getUser = async () => {
    try{
    let res = await axios.get('/getUser');
    console.log(res)
    let user = res.data.user
    return user;
    }
    catch(err){
        return null
    }
}
 
export const addAddress = (address) => async(dispatch) => {
    try{
        const res = await axios.post('/addAddress',{address});
        console.log(res)
        dispatch(setAlert('Address added successfully','success')); 
    }
    catch(err){
        console.log(err.response)
    }
}
export const editDefaultAddress = (id) => async (dispatch) => {
try{
    const res = await axios.post('/editDefaultAddress',{addressId:id});
    let user = res.data.user
    dispatch({
        type:LOAD_USER,
        payload:user
    })
}
 catch(err){
     console.log(err.response)
 }
}

export const updateAddress = (address) => async(dispatch) => {
    try{
        await axios.post(`/updateAddress/${address.id}`,{address});
        dispatch(setAlert('Address updated successfully','success')); 
    }
    catch(err){
        console.log(err.response)
    }
}

export const deleteAddress = (addressId) => async(dispatch) => {
    try{
        const res = await axios.delete(`/deleteAddress/${addressId}`);
        let user = res.data.user
        dispatch({
            type:LOAD_USER,
            payload:user
        })
        dispatch(setAlert('Address removed successfully','success')); 
    }
    catch(err){
        console.log(err.response);
    }
}
export const loadUser = () => async dispatch => {
    try{
        let user = await getUser();
        if(user){
            dispatch({
                type: LOAD_USER,
                payload: user
            })
        }
        else {
            let guestId = getCookie('guestId');
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

const postSignInActions = (ifFromGuest) => async (dispatch) => {
    try{
        const res = await axios.get('/refreshToken');
        let token = res.data.token;
        if (token) {
            document.head.querySelector('meta[name="csrf-token"]').content = token;
            axios.defaults.headers.common['X-CSRF-TOKEN'] = token;
        } 
        const user = await getUser();
        dispatch({
            type: LOAD_USER,
            payload: user
        });
        if(ifFromGuest){
            await dispatch(setOrderedProducts());
        } 
        dispatch(getCart());
        eraseCookie('guestId');
        eraseCookie('guestCart');
    }
    catch(err){
        dispatch(setAlert('Something went wrong try reloading the page', 'error'));
    }
}

const postLogOutActions = () => async(dispatch,getState) => {
    try{
        const res = await axios.get('/refreshToken');
        let token = res.data.token;
        if (token) {
            document.head.querySelector('meta[name="csrf-token"]').content = token;
            axios.defaults.headers.common['X-CSRF-TOKEN'] = token;
        } 
        eraseCookie(getState().auth.user.id);
        dispatch({type:CLEAR_CART});
        dispatch({type:CLEAR_ORDERS});
        dispatch({ type: LOG_OUT });
    }
    catch(err){
        dispatch(setAlert('Something went wrong try reloading the page', 'error'));
    }
    
}
export const register = ({ name, email, password },ifFromGuest) => async dispatch => {
    return new Promise(async function(resolve, reject) {
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
                dispatch({type: REGISTER_SUCCESS,})
                dispatch(postSignInActions(ifFromGuest));
                dispatch(setAlert('You have registered successfully', 'success'))
                resolve('success');
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
            reject('error');
        }
    })
}
export const login = ({ email, password },ifFromGuest) => dispatch => {
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
            dispatch(postSignInActions(ifFromGuest));
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
    dispatch(postLogOutActions());
}