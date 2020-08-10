import { SET_ALERT, REMOVE_ALERT } from './types.js';
import { v4 as uuidv4 } from 'uuid';

export const setAlert = (msg, severity) => dispatch => {
    const id = uuidv4()
    dispatch({
        type: SET_ALERT,
        payload: {
            msg,
            severity,
            id
        }
    });
    setTimeout(() => { dispatch({ type: REMOVE_ALERT, payload: id }) }, 5000);

}