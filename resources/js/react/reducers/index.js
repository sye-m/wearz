import { combineReducers } from 'redux';
import alert from './alert'
import auth from './auth';
import brand from './brand';

export default combineReducers({
    alert,
    auth,
    brand
});