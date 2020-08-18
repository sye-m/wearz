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
const useStyles = makeStyles((theme) => ({
    productDisplayContainer:{
        display:'flex',
        flexWrap:'wrap',
        height:'100%',
        width:'100%',
    },
 
    productImage:{
        maxWidth: '500px',
        height: '90%',
        maxHeight: '500px',
        width: '50%',
        minWidth: '340px',
        minHeight: '500px',
        padding:'10px',
        '& img':{
            width:'100%',
            height:'100%',
            objectFit:'cover'
        },
        [theme.breakpoints.down('md')]: {
            width:'100%',
            textAlign:'center',
            height:'85%'
        }
    },

    productDetails:{
        width: '50%',
        minWidth: '350px',
        padding:'10px',
       '& div':{
           marginBottom:'10px'
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
        minWidth:'135px',
        marginRight:'1.5em'
    },

  }))

const Product = ({match:{params},product,getProduct,addProductToCart}) => {
    const classes = useStyles();
    useEffect(()=>{
        console.log(params)
        getProduct(params.product_id);
    },[params])

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
    )
}

Product.propTypes = {
product:PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    product:state.product
})

export default connect(mapStateToProps,{getProduct,addProductToCart})(Product)
