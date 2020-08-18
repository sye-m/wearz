import {SET_ORDERS,ORDERS_ERROR} from './types'

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