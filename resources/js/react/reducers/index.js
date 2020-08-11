import { combineReducers } from 'redux';
import alert from './alert'
import auth from './auth';
import brand from './brand';
import productType from './productType'
export default combineReducers({
    alert,
    auth,
    brand,
    productType
});