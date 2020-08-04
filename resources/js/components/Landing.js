import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import FeaturedProductsBanner from './FeaturedProductsBanner';
const useStyles = makeStyles((theme)=>({

}));
const Landing = (prop) => {
    return (
        <Fragment>
            <FeaturedProductsBanner/>
        </Fragment>
            );
}

export default Landing;

