import React,{ useState,useEffect,useRef } from 'react'
import { connect } from 'react-redux';
import { getBrands } from '../../actions/brand';
import { getProductTypes } from '../../actions/productTypes';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import queryString from 'query-string';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
const useStyles = makeStyles((theme) => ({
    productFiltersContainer:{
     display:'flex',
     flexDirection:'column',
     ['@media(max-width:700px)']:{
         
     }
    },
    brandFilter:{
        ['@media(max-width:700px)']:{
            width:'100%',
            '& p':{
                textAlign:'center'
            },
            '& div':{
                display:'flex',
                flexDirection:'row'
            }
        }
    },
    productTypeFilter:{
        ['@media(max-width:700px)']:{
            width:'100%',
            '& p':{
                textAlign:'center'
            },
            '& div':{
                display:'flex',
                flexDirection:'row'

            }
        }
    },
    closeFiltersButton:{
        display:'inline',
        width: '50px',                  
        height: '50px',
        position: 'absolute',
        right: '0px',
        top: '0.5%',
        border: '1px solid lightgray',
        background: '#ba68c8',
        color: '#fff',
        '&:hover':{
            background:'rgb(130, 72, 140)'
        },
        ['@media(min-width:700px)']:{
            display:'none'
        }
    },
    title:{
        fontSize:'1.5em',
        marginLeft:'1em',
        fontWeight:'bold'
    }

}))
const ProductFilters = ({selectedFilters,brands,productTypes,history,getBrands,getProductTypes}) => {
    const initialMount = useRef(true)
    const classes = useStyles();
    useEffect(()=>{
        getBrands();//initial load will trigger functions to fetch the brands and productTypes since they are the needed for filters 
        getProductTypes();
    },[])

    useEffect(()=>{
        setBrandsNamesState(); //set brandNames state when the brands prop changes since the change is async
    },[brands])

    useEffect(()=>{
        setProductTypesState();//set productTypesNames state when the productTypes prop changes since the change is async
    },[productTypes]);
   
    const [brandNames,setBrandNames] = useState({});
    const [productTypesNames,setProductTypesNames] = useState({});

    useEffect(()=>{
        if(initialMount.current){
            initialMount.current = false;//don't filter products on initial mount
        }
        else{
        filterProducts();//filter products as soon as the any filter is selected
        }
    },[brandNames,productTypesNames])
    
    const setBrandsNamesState = () => {
        let brandNamesObject = Object.fromEntries(brands.map((brand)=>{
            //get the filters from the query that are already entered and set them to true in the state
            if(selectedFilters.brands.includes(brand.name)){
                return [brand.name,true]
            }
            else {
                return [brand.name,false]
            }
        }))             
        setBrandNames({...brandNamesObject})
    }

    const setProductTypesState = () => {
        let productTypesObject = Object.fromEntries(productTypes.map((type)=>{
            //get the filters from the query that are already entered and set them to true in the state
            if(selectedFilters.types.includes(type.name)){
                return [type.name,true]
            }
            else {
                return [type.name,false]
            }
        }))             
        setProductTypesNames({...productTypesObject})
    }

    const hideFilters = ()=>{
        document.getElementById('filters').style.display="none";
        document.body.style.overflow = "auto";

    }
    const onBrandChange = (e)=>{
        let removedFilter = selectedFilters.brands.indexOf(e.target.name);
        if(removedFilter > -1){
            selectedFilters.brands.splice(removedFilter,1);
        }
        setBrandNames({...brandNames, [e.target.name]:!brandNames[e.target.name]})

    }

    const onProductTypeChange = (e)=>{
        let removedFilter = selectedFilters.types.indexOf(e.target.name);
        if(removedFilter > -1){
            selectedFilters.types.splice(removedFilter,1);
        }
        setProductTypesNames({...productTypesNames, [e.target.name]:!productTypesNames[e.target.name]})
    }

    const filterProducts = () => {
        if(Object.entries(brandNames).length > 0 && Object.entries(productTypesNames).length > 0){
        let query = queryString.parse(location.search);
        let searchTerm = query.searchTerm ? query.searchTerm : '';
        
        let brandNamesArray = Object.keys(brandNames);
        let productTypesNamesArray = Object.keys(productTypesNames);
        let selectedBrands = brandNamesArray.filter(function(key) {
            //if user is redirected from home page by selecting a brand set the filter to true
            if(selectedFilters.brands.includes(key)) {
                return true
            }
            return brandNames[key]
        });
     
        let selectedTypes = productTypesNamesArray.filter(function(key) {
            //if user is redirected from home page by selecting a brand set the filter to true
            if(selectedFilters.types.includes(key)){
                return true
            }
            return productTypesNames[key]
        });

        let searchTermQuery = ''
        let brandsQuery = ''
        let typesQuery = ''
        //set the search term query
        if(searchTerm.length > 0){
            searchTermQuery = '?searchTerm='+searchTerm;
        }
        //if other filter is present
        if(searchTermQuery.length>0 && selectedBrands.length > 0){
            brandsQuery = "&brands="+selectedBrands
        }
        //if only brands filter is selected
        else if(searchTermQuery.length <= 0 && selectedBrands.length > 0){
            brandsQuery = `?brands=${selectedBrands}`
        }
        //if any other filter is selected
        if((searchTermQuery.length>0 || selectedBrands.length > 0) && (selectedTypes.length > 0)){
            typesQuery = "&types="+selectedTypes
        }
        //if only product types filter is selected
        else if(searchTermQuery.length <= 0 && selectedBrands.length <= 0 && selectedTypes.length > 0){
            typesQuery = `?types=${selectedTypes}`
        }
        let filterQueryString = `/products${searchTermQuery}${brandsQuery}${typesQuery}`;
        history.push(filterQueryString)
    }
    }
    return (
        <div className={classes.productFiltersContainer}> 
            <IconButton onClick={hideFilters} aria-label="close" color="secondary" className={classes.closeFiltersButton}>
                <CloseIcon />
            </IconButton>
            <div className={classes.brandFilter}>
            <p>Brands</p>
            <FormGroup>
                {brands.map((brand,index) =>(
                    <FormControlLabel key={index}
                        control={<Checkbox checked={brandNames[brand.name] || false} onChange={onBrandChange} name={brand.name} />}
                    label={brand.name}/>
                ))}
            </FormGroup>
            </div>
           
            <div className={classes.productTypeFilter}>
            <p>Shoes Types</p>
            <FormGroup>
                {productTypes.map((type,index) =>(
                    <FormControlLabel key={index}
                        control={<Checkbox checked={productTypesNames[type.name] || false} onChange={onProductTypeChange} name={type.name} />}
                    label={type.name}/>
                ))}
            </FormGroup>
            </div>
         
        </div>
    )
}

ProductFilters.propTypes = {
    getBrands:PropTypes.func.isRequired,
    getProductTypes:PropTypes.func.isRequired,
    brands:PropTypes.array.isRequired,
    productTypes:PropTypes.array.isRequired,
    selectedFilters:PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    brands:state.brand,
    productTypes:state.productType
})


export default connect(mapStateToProps,{getBrands,getProductTypes})(withRouter(ProductFilters))
