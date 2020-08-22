import React, { Fragment } from 'react';
import FeaturedProductsBanner from './FeaturedProductsBanner';
import AllBrands from '../products/AllBrands';
import ProductTypes from '../products/ProductTypes';
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

