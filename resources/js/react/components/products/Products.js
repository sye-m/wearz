import React,{useEffect} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import { getProducts } from '../../actions/products' 
import queryString from 'query-string';
import DisplayProducts from './DisplayProducts';
import ProductFilters from '../layouts/ProductFilters';
import Button from '@material-ui/core/Button';
import FilterListIcon from '@material-ui/icons/FilterList';
const useStyles = makeStyles((theme) => ({
   productsContainer:{
       display:'flex',
       minHeight:'100%'
   },
   options:{
        width:'24%',
        height:'fit-content',
        borderRight: '1px solid lightgray',
        padding: '2%',
        maxWidth: '250px',
        minWidth:'120px',
        ['@media(max-width:700px)']:{
            display:'none',
            width:'94%',
            maxWidth:'100%',
            position:'absolute',
            background:'#fff',
            zIndex:'111',
            border:'none'
        }
   },
   products:{
       minHeight: '100%',
       width:'100%'
   },
   filtersButton:{
    display:'none',
    margin:'10px',
    ['@media(max-width:700px)']:{
        display:'inline'
    }
},

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

    const showFilters = () => {
        document.getElementById('filters').style.display="inline";
        document.body.style.overflow = "hidden";
    }
    const classes = useStyles();
    return (
        <div className={classes.productsContainer}>
            <div className={classes.options} id="filters">
                <ProductFilters selectedFilters={checkedFilters} />
            </div>
            <div className={classes.products}>
                <Button 
                onClick={showFilters} 
                variant="contained" 
                color="secondary" 
                startIcon={<FilterListIcon/>}
                className={classes.filtersButton}>
                    Filters
                </Button>
                <DisplayProducts/>
            </div>
        </div>
    )
}

export default connect(null,{getProducts})(withRouter(Products))
