import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import FeaturedProductsBanner from '../products/FeaturedProductsBanner';
import AllBrands from '../products/AllBrands';
import ProductTypes from '../products/ProductTypes';
const useStyles = makeStyles((theme)=>({

}));
const Landing = (prop) => {
    
    return (
        <Fragment>
            <FeaturedProductsBanner/>
            <AllBrands/>
            <ProductTypes/>
        </Fragment>
            );
}

export default Landing;

