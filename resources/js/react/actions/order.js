import {SET_CART, SET_ORDERS,ORDERS_ERROR, LOADING_ORDERS} from './types'
import { setAlert } from './alert';
import { setCookie,getCookie,eraseCookie } from './../cookie';

export const setOrderedProducts = () => async(dispatch, getState) => {
    if(getState().auth.user){
        let cart = getState().cart.products;
        let allProducts = JSON.stringify(cart.map((cartProduct)=>cartProduct.pivot));
        setCookie(getState().auth.user.id,allProducts);
    }
}

export const getOrderedProducts = () => async (dispatch, getState) => {
    let allProducts = getCookie(getState().auth.user.id);
    if(allProducts){
    allProducts = JSON.parse(allProducts);
    console.log(allProducts);
    }
    else {
        allProducts = []
    }
    return allProducts;
}

export const getOrders = () => async (dispatch,getState) => {
    try{
        if(getState().auth.user){
            dispatch({type:LOADING_ORDERS});
            const res = await axios.get('/getOrders');
            console.log(res)
            dispatch({
                type:SET_ORDERS,
                payload:res.data.orders
            })
        }
    }
    catch(err){
        dispatch({
            type:ORDERS_ERROR,
        })
        dispatch(setAlert('Error with getting orders', 'error'));
    }
}


export const cancelOrder = (orderIndex,productIndex,orderedProduct) => async (dispatch,getState) => {
    try{
        let orders = getState().orders.products;

        orders[orderIndex].splice(productIndex,1);
        //if no products remain for this order remove the order itself
        if(orders[orderIndex].length === 0){
            orders.splice(orderIndex,1);
        }
        await axios.delete('/deleteOrderedProduct',{data:{orderedProduct}});
        dispatch({
            type:SET_ORDERS,
            payload:orders
        })
    }
    catch(err){
        dispatch({
            type:ORDERS_ERROR,
        })
        dispatch(setAlert('Error with cancelling the order', 'error'));
    }

}

export const orderProducts = (orderedProducts,addressFormData,sameAsDefaultAddress) => async(dispatch, getState) => {
    try{
        if(getState().auth.user){
        await axios.post('/orderProducts',{orderedProducts,addressFormData,sameAsDefaultAddress});
        eraseCookie(getState().auth.user.id);
        await axios.delete('/emptyCart',{data:{orderedProducts}});
        dispatch({
            type:SET_CART,
            payload:cart
        })
    }
    }
    catch(err){
        dispatch({
            type:ORDERS_ERROR,
        })
        dispatch(setAlert('Error with ordering products', 'error'));
    }
}