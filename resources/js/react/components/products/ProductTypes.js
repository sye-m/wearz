import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { getProductTypes } from './../../actions/productTypes';
import { makeStyles } from '@material-ui/core/styles';
import ItemSlider from './../layouts/ItemSlider';
const useStyles = makeStyles((theme) => ({
   
    allProductTypesContainer:{
        minHeight:'50%',
        maxHeight:'300px'
    },
    title:{
        fontSize:'1.5em',
        marginLeft:'1em',
        fontWeight:'bold'
    }

}))

const ProductTypes = ({ productTypes, getProductTypes }) => {
    const classes = useStyles();
    useEffect(()=>{
        getProductTypes();
    },[])

    return (
        <div className={classes.allProductTypesContainer}>
            <p className={classes.title}>Shop By Shoe Type</p>
            { productTypes.length > 0 && 
                <ItemSlider itemType="types" items={productTypes}/>
            }   
        </div>
    )
}

ProductTypes.propTypes = {
    productTypes:PropTypes.array.isRequired,
} 

const mapStateToProps = state => ({
    productTypes:state.productType
})

export default connect(mapStateToProps,{ getProductTypes })(ProductTypes)
