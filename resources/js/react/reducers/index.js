import { combineReducers } from 'redux';
import alert from './alert'
import auth from './auth';
import brand from './brand';
import productType from './productType';
import products from './products';


export default combineReducers({
    alert,
    auth,
    brand,
    productType,
    products
});