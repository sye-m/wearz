import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
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
      width:'100%'
  },
  productCard:{
    height:'60%',
    width:'45%',
    margin:'1em',
    minWidth:'200px',
    minHeight:'350px'
  },
  productImage:{
      height:'60%'
  }
}))
const DisplayProducts = ({products}) => {
    const classes = useStyles();
    return (
        <div className={classes.productsDisplayContainer}>
            {products.length > 0 && products.map((product,index)=>((
                <Card className={classes.productCard} variant="outlined" key={index}>
                    <CardMedia className={classes.productImage}
                    image={product.image}
                    title={product.name}
                />
                <CardContent>
                    <p>{product.name}</p>
                    <p>{product.brand.name}</p>
                    <p>{product.type.name}</p>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
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
export default connect(mapStateToProps,{})(DisplayProducts)
