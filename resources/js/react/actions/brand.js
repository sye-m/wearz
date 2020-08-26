import { SET_BRANDS } from './types.js';

export const getBrands = () => async dispatch => {
    try{
    let res = await axios.get('/getBrands')
    let brands = res.data.brands;
    dispatch({
        type:SET_BRANDS,
        payload:brands
    })
    }
    catch(err){
        dispatch(setAlert('Something went wrong try reloading the page', 'error'));
    }
}