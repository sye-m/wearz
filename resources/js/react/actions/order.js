import {SET_CART, SET_ORDERS,ORDERS_ERROR, LOADING_ORDERS} from './types'
import { setAlert } from './alert';
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

export const orderProducts = () => async(dispatch, getState) => {
    try{
        if(getState().auth.user){
        let cart = getState().cart.products;
        let allProducts = cart.map((cartProduct)=>cartProduct.pivot);
        let orders = await axios.post('/orderProducts',{allProducts});
        let returnedCart = await axios.delete('/emptyCart',{data:{allProducts}});
        cart = [];
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