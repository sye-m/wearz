import React,{useEffect} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import { getProducts } from '../../actions/product.js' 
import queryString from 'query-string';
import DisplayProducts from './DisplayProducts';
import ProductFilters from './ProductFilters';
const useStyles = makeStyles((theme) => ({
   productsContainer:{
       display:'flex',
       height:'100%'
   },
   options:{
        width:'24%',
        height: '100%',
        borderRight: '1px solid lightgray',
        padding: '2%',
        maxWidth: '250px',
        minWidth:'120px'
   },
   products:{
       width:'74%',
       height: '100%',
   }

}))
const Products = ({location,getProducts}) => {
    var checkedFilters = {brands:[],types:[]}
    useEffect(()=>{
        let query = queryString.parse(location.search);
        let searchTerm = query.searchTerm ? query.searchTerm : '';
        let brands = query.brands ? query.brands : '';
        let types = query.types ? query.types : '';
        selectedFilters(brands,types);
        getProducts(searchTerm,brands,types);
    },[location])

    const selectedFilters = (brands,types) => {
        checkedFilters.brands= brands.split(',');
        checkedFilters.types = types.split(',');
    }
    const classes = useStyles();
    return (
        <div className={classes.productsContainer}>
            <div className={classes.options}>
                <ProductFilters selectedFilters={checkedFilters} />
            </div>
            <div className={classes.products}>
                <DisplayProducts/>
            </div>
        </div>
    )
}

export default connect(null,{getProducts})(withRouter(Products))
