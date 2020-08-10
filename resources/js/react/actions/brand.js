import { GET_BRANDS } from './types.js';

export const getBrands = () => async dispatch => {
    try{
    let res = await axios.get('/getBrands')
    let brands = res.data.brands;
    dispatch({
        type:GET_BRANDS,
        payload:brands
    })
    }
    catch(err){
        console.log(err);
    }
}