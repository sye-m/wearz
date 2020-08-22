import React,{ useState,useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getProduct } from '../../actions/product';
import { addProductToCart } from '../../actions/cart';
import { makeStyles } from '@material-ui/core/styles';
import getSymbolFromCurrency from 'currency-symbol-map'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import CircularLoader from './../loaders/CircularLoader';
const useStyles = makeStyles((theme) => ({
    productDisplayContainer:{
        display:'flex',
        flexWrap:'wrap',
        height:'100%',
        width:'100%',
    },
    product:{
        display:'flex',
        flexWrap:'wrap',
        width:'100%'
    },
    productImage:{
        height: '90%',
        maxHeight: '500px',
        maxWidth: '600px',
        width: '45%',
        minWidth: '300px',
        minHeight: '500px',
        padding:'10px',
        '& img':{
            width:'100%',
            height:'100%',
            objectFit:'cover'
        },
        ['@media(max-width:600px)']: {
            width:'96%',
            height:'85%'
        }
    },

    productDetails:{
        width: '42%',
        minWidth: '200px',
        padding:'10px',
       '& div':{
           marginBottom:'10px'
       },
       ['@media(max-width:600px)']: {
        width:'100%',
    }
    },

    productName:{
        fontSize:'2em',
        margin:'0px',
    },
    productPrice:{
        fontSize:'1.2em',
        color:theme.palette.info.dark
    },
    productBrand:{
        fontSize:'1em',
        margin:'0px'
    },
    productInput:{
        minWidth:'120px',
        marginRight:'1.5em'
    },
    circularLoader:{
        top:'40%',
        left:'50%',
        position:'absolute'
    }
  }))

const Product = ({match:{params},product:{product,loading},getProduct,addProductToCart}) => {
    const classes = useStyles();
    useEffect(()=>{
        getProduct(params.product_id);
    },[params.product_id])

    useEffect(()=>{
        if(Object.entries(product).length > 0){
        let productSizeArray =product.size.split(',')
        setProductData({...productData,
            product:{
                id:product.id,
                name:product.name,
                size:product.size,
                color:product.color,
                image:product.image,
                price:product.price,
                brand_id:product.brand.id,
                type_id:product.type.id
            },
            pivot:{
                product_id:product.id,
                size:productSizeArray[0],
                quantity:1,
            },
        });
        }
    },[product])

    const [productData,setProductData] = useState({
        product:{
            id:'',
            name:'',
            size:'',
            quantity:1,
            color:'',
            image:'',
            price:'',
            brand_id:'',
            type_id:''
        },
        pivot:{
            size:'',
            quantity:1,
        },
        
    })

    const onInputChange = (e) => {
        console.log(e.target.name)
        setProductData({...productData,pivot:{...productData.pivot,[e.target.name]:e.target.value}})
    }

    const addToCart = () =>{
        addProductToCart(productData);
    }
    return (
        <div className={classes.productDisplayContainer}>
            <CircularLoader loading={loading}/> 
            { !loading && 
            <div className={classes.product}>
                <div className={classes.productImage}>
                    <img src={product.image} alt={product.name}/>
                </div>

                <div className={classes.productDetails}>
                    <div className={classes.productTitle}>   
                        <p className={classes.productName}>{product.name} </p>
                        <p className={classes.productBrand}>By <b>{product.brand && product.brand.name}</b></p>
                    </div>
                    
                    <div className={classes.productPrice} >
                        <p>Price: {`${getSymbolFromCurrency('INR')} ${product.price}`}</p>
                    </div>

                    <div className={classes.productInputs}>
                    <FormControl className={classes.productInput}>
                        <InputLabel id="productSize">Select Size</InputLabel>
                        <Select
                        name="size"
                        labelId="productSize"
                        value={productData.pivot.size || ''}
                        onChange={onInputChange}
                        >
                        {product && product.size && product.size.split(',').map((size,index)=>(
                        <MenuItem key={index} value={size}>{size}</MenuItem>
                        ))}
                        </Select>
                    </FormControl> 
                    <FormControl className={classes.productInput}>
                        <InputLabel id="productQuantity">Select Quantity</InputLabel>
                        <Select
                        name="quantity"
                        labelId="productQuantiy"
                        value={productData.pivot.quantity || ''}
                        onChange={onInputChange}
                        >
                        {product && Array.from(Array(10), (_, i) => i + 1).map((quantity,index)=>(
                        <MenuItem key={index} value={quantity}>{quantity}</MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                    </div>
                    
                    <div  className={classes.addToCartButton}>
                        <Button
                            onClick={addToCart}
                            variant="contained"
                            color="primary"
                            startIcon={<AddShoppingCartIcon />}
                        >
                            Add to Cart
                        </Button>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}

Product.propTypes = {
product:PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    product:state.product
})

export default connect(mapStateToProps,{getProduct,addProductToCart})(Product)
