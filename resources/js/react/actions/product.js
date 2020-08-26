import { SET_PRODUCT,LOADING_PRODUCT, PRODUCT_ERROR } from './types.js';

export const getProduct = (productId) => async dispatch => {
    try{
        dispatch({type:LOADING_PRODUCT});
        let res = await axios.get(`/getProduct/${productId}`);
        let product = res.data.product[0];
        dispatch({
            type:SET_PRODUCT,
            payload:product
        })
    }
    catch(err){
        dispatch({
            type:PRODUCT_ERROR,
        })
        dispatch(setAlert('Error with getting product try refreshing the page', 'error'));
    }
   
}