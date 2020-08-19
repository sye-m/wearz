import {SET_CART, SET_ORDERS,ORDERS_ERROR} from './types'
import { assignIn } from 'lodash';

export const getOrders = () => async dispatch => {
    try{
    const res = await axios.get('/getOrders');
    console.log(res)
    dispatch({
        type:SET_ORDERS,
        payload:res.data.orders
    })
    }
    catch(err){
        console.log(err.response.data)
    }
}

export const cancelOrder = (orderIndex,productIndex,orderedProduct) => async (dispatch,getState) => {
    try{
    let orders = getState().orders;

    orders[orderIndex].splice(productIndex,1);
    let res = await axios.delete('/deleteOrderedProduct',{data:{orderedProduct}});
    console.log(res)
    console.log(orders)
    dispatch({
        type:SET_ORDERS,
        payload:orders
    })
}
catch(err){
    console.log(err.response)
}

}

export const orderProducts = () => async(dispatch, getState) => {
    try{
        let cart = getState().cart;
        let allProducts = cart.map((cartProduct)=>cartProduct.pivot);
        let orders = await axios.post('/orderProducts',{allProducts});
        let returnedCart = await axios.delete('/emptyCart',{data:{allProducts}});
        cart = [];
        dispatch({
            type:SET_CART,
            payload:cart
        })
        console.log(orders);
        console.log(returnedCart);
    }
    catch(err){
        console.log(err.response);
    }
}