import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { getBrands } from './../../actions/brand';
import { makeStyles } from '@material-ui/core/styles';
import ItemSlider from './../layouts/ItemSlider';
const useStyles = makeStyles((theme) => ({
    allBrandsContainer:{
        height:'50%',
        maxHeight:'300px'
    },
    title:{
        fontSize:'1.5em',
        marginLeft:'1em',
        fontWeight:'bold'
    }

}))

const AllBrands = ({ brands, getBrands }) => {
    const classes = useStyles();
    useEffect(()=>{
        getBrands();
    },[])

    return (
        <div  className={classes.allBrandsContainer}>
            <p className={classes.title}>Shop By Brands</p>
            { brands.length > 0 && 
                <ItemSlider itemType="brands" items={brands}/>
            }   
        </div>
    )
}

AllBrands.propTypes = {
    brands:PropTypes.array.isRequired,
} 

const mapStateToProps = state => ({
    brands:state.brand
})

export default connect(mapStateToProps,{ getBrands })(AllBrands)
