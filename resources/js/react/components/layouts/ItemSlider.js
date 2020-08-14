import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    itemImage:{
        display:'block',
        borderRadius: '50%',
        flexShrink: '0',
        display: 'block',
        border: '1px solid #9d8f8f',
        borderRadius: '50%',
        maxWidth: '70%',
        maxHeight: '75%',
        minHeight:'70%',
        objectFit:'cover'
    },
    itemContainer:{
        maxWidth:'20%',
        maxHeight:'20%',
        minWidth: '200px',
        minHeight: '200px',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden !important',
        alignItems: 'center',
        textDecoration:'none',
        color:'#000000',
        position:'relative'
    },
    carousel:{
        height: '90%',
        width: '100%',
        display: 'flex',
        overflowX: 'auto',
        scrollBehavior:'smooth',
        '&::-webkit-scrollbar':{
            display:'none'
        }
    },
    prevButton:{
        right:'0.5%',
        position: 'absolute',
        top: '30%',
        borderRadius: '50%',
        border: '1px solid lightgray',
        minWidth: '50px',
        height: '50px'
    },
    nextButton:{
        left:'0.5%',
        position: 'absolute',
        top: '30%',
        borderRadius: '50%',
        border: '1px solid lightgray',
        minWidth: '50px',
        height: '50px'
    },
    itemSliderContainer:{
        position:'relative',
        overflow:'hidden'
    },
}))
const ItemSlider = ({itemType,items}) => {
    const classes = useStyles();

    const prev = () => {
        let firstItem = document.getElementById(`${itemType}carousel`);
        let left = window.innerHeight/11;

        firstItem.scrollLeft += left*2
    
    }

    const next = () => {
        let firstItem = document.getElementById(`${itemType}carousel`);
        let left = window.innerHeight/11;
        firstItem.scrollLeft -= left*2;
    }
    return (
        <div className={classes.itemSliderContainer}>
            <div className={classes.carousel} id={`${itemType}carousel`}>
                {items.map((item,index) => (
                    <Link to={`/products?${itemType}=${item.name},`} key={index} style={{left:'0'}} className={classes.itemContainer}>
                        <img src={item.image} alt={item.name+"logo"} className={classes.itemImage}/>
                        <p className={classes.itemName}>{ item.name } </p>
                    </Link>
                    )
                )}

             {items.map((item,index) => (
                    <Link  to={`/products?${itemType}=${item.name},`} key={index} style={{left:'0'}} className={classes.itemContainer}>
                        <img src={item.image} alt={item.name+"logo"} className={classes.itemImage}/>
                        <p className={classes.itemName}>{ item.name } </p>
                    </Link>
                    )
                )}
              </div>
            
            
            <Button variant="contained" color="primary" className={classes.prevButton} onClick={()=>prev()}>&#10095;</Button>
            <Button variant="contained" color="primary" className={classes.nextButton} onClick={()=>next()}>&#10094;</Button>
            
        </div>
    )
}

ItemSlider.propTypes = {
items:PropTypes.array.isRequired,
itemType:PropTypes.string.isRequired
}

export default ItemSlider
