import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import getSymbolFromCurrency from 'currency-symbol-map'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
  productsDisplayContainer:{
      display:'flex',
      flexWrap:'wrap',
      height:'100%',
      width:'100%',
      justifyContent:'center'
  },
  productCard:{
    height:'60%',
    width:'43%',
    margin:'1em',
    minWidth:'200px',
    maxWidth:'450px',
    minHeight:'350px',
    maxHeight:'400px',
    ['@media(max-width:700px)']:{
        width:'100%'
    }
  },
  productImage:{
      height:'60%'
  },
  productContent:{
      display:'flex',
     
  },
  productPrice:{
      width:'40%',
      padding:'16px',
      fontWeight:'bold',
      textAlign:'end'
  },
  productDescription:{
      width:'60%'
  }
}))


const DisplayProducts = ({history,products}) => {
    const classes = useStyles();

    const viewProduct = (product) => {
        history.push(`/product/${product.id}`);
    }
    
    return (
        <div className={classes.productsDisplayContainer}>
            {products.length > 0 && products.map((product,index)=>((
                <Card onClick={()=>{viewProduct(product)}} className={classes.productCard} variant="outlined" key={index}>
                    <CardMedia className={classes.productImage}
                    image={product.image}
                    title={product.name}
                />
                <CardContent className={classes.productContent}>
                    <div className={classes.productDescription}>
                        <p>{product.name}</p>
                        <p>{product.brand.name}</p>
                        <p>{product.type.name}</p>
                    </div>
                    <div className={classes.productPrice}>
                        {`${getSymbolFromCurrency('INR')} ${product.price}`}
                    </div>
                </CardContent>
              </Card>
            )))}
        </div>
    )
}

DisplayProducts.propTypes = {
    products:PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
    products:state.products
})
export default connect(mapStateToProps,{})(withRouter(DisplayProducts))
