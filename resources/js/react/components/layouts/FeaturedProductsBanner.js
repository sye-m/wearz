import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { setAlert } from './../../actions/alert';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme)=>({
    bannerImage:{
        width:'100%',
        display:'none',
        height:'100%',
        minHeight:'300px',
        maxHeight:'500px',
        objectFit:'cover'
    },
    bannerContainer:{
        height:'50%',
        minHeight:'300px',
        maxHeight:'500px',
        width:'100%',
        position:'relative',
    },
    prevImageButton:{
        position: 'absolute',
        top: '50%',
        left:' 1%',
        borderRadius: '50%',
        color:'#fff',
        minHeight: '50px',
        width: '50px',
        minWidth:'50px',
        fontSize: '1.2rem',
        boxShadow:'0px 0px 10px 3px #7b7575',
    },
    nextImageButton:{
        position: 'absolute',
        top: '50%',
        right:' 1%',
        color:'#fff',
        boxShadow:'0px 0px 10px 3px #7b7575',
        borderRadius: '50%',
        minHeight: '50px',
        width: '50px',
        minWidth:'50px',
        fontSize: '1.2rem',
    }
}));
const FeaturedProductsBanner = ({setAlert}) => {
    useEffect(()=>{
        let isSubscribed = true;
    const getFeaturedProducts = async () => {
        try{
            if(isSubscribed === true){
                const res =  await axios.get('/getFeaturedProducts');
                setFeaturedProducts(res.data.featuredProducts);
                isSubscribed=false;
                showDivs(1);
            }
        }
        catch(err){
            console.log(err)
            isSubscribed = false;
            setAlert('Error loading page try reloading the page', 'error')
        }
    } 
    getFeaturedProducts();
    return () => isSubscribed = false
},[]);
const mountedRef = useRef(true)

    const [featuredProducts, setFeaturedProducts] = useState([]);
    let slideIndex = 1;    


    
    const plusDivs = (n) => {
        showDivs(slideIndex += n);
    }

    const showDivs = (n) => {
        let i=0;
        let x = document.getElementsByClassName(classes.bannerImage);
        if(x.length > 0){
            if (n > x.length) {slideIndex = 1}
            if (n < 1) {slideIndex = x.length}
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";  
            }
            x[slideIndex-1].style.display = "inline-block";  
        }
    }
 
    const classes = useStyles();
    return (
            <div className={classes.bannerContainer}>
            {featuredProducts.length>0 && featuredProducts.map((featuredProduct,index)=>(
                <Link key={index} to={`/product/${featuredProduct.id}`}>
                    <img  title={featuredProduct.name} loading="lazy" className={classes.bannerImage} src={featuredProduct.image} alt={featuredProduct.name}/>
                </Link>
            ))}
            
            <Button className={classes.prevImageButton} onClick={()=>plusDivs(-1)}>&#10094;</Button>
            <Button className={classes.nextImageButton} onClick={()=>plusDivs(1)}>&#10095;</Button>
            </div>  
            );
}

export default connect(null,{setAlert})(FeaturedProductsBanner);

