import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { getBrands } from './../../actions/brand';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    brandLogo:{

    }

}))
const AllBrands = ({ brands, getBrands }) => {
    const classes = useStyles();
    useEffect(()=>{
        getBrands();
    },[])
    return (
        <Box>
            <p>Brands</p>
            { brands.length > 0 && 
            brands.map((brand,index) => {
            <Box key={index}>
                <img src={brand.image} alt={brand.brand_name+"logo"} className={classes.brandLogo}/>
                <p>{ brand.brand_name } </p>
            </Box>})
            }
            
        </Box>
    )
}


AllBrands.propTypes = {
    brands:PropTypes.array.isRequired,
    getBrands: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    brands:state.brand
})

export default connect(mapStateToProps,{ getBrands })(AllBrands)
