import { combineReducers } from 'redux';
import alert from './alert'
import auth from './auth';
import brand from './brand';
import productType from './productType';
import products from './products';
import product from './product';
import cart from './cart';
import orders from './orders'
export default combineReducers({
    alert,
    auth,
    brand,
    productType,
    products,
    product,
    cart,
    orders
});