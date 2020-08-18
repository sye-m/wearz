import React, { Fragment,useEffect } from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme)=>({
    bannerImage:{
        width:'100%',
        display:'none',
        height:'100%',
        minHeight:'300px',
        maxHeight:'400px',
        objectFit:'cover'
    },
    bannerContainer:{
        height:'70%',
        width:'100%',
        position:'relative',
        maxHeight:'400px'
    },
    prevImageButton:{
        position: 'absolute',
        top: '50%',
        left:' 1%',
        borderRadius: '50%',
        height: '50px',
        height: '50px',
        width: '50px',
        minWidth:'50px',
        fontSize: '1.2rem',
        boxShadow:'0px 0px 10px 3px #7b7575',
    },
    nextImageButton:{
        position: 'absolute',
        top: '50%',
        right:' 1%',
        boxShadow:'0px 0px 10px 3px #7b7575',
        borderRadius: '50%',
        height: '50px',
        width: '50px',
        minWidth:'50px',
        fontSize: '1.2rem',
    }
}));
const FeaturedProductsBanner = (prop) => {
    const classes = useStyles();
    useEffect(()=>{
    showDivs(1);
    
},[]);
var slideIndex = 1;    

    
function plusDivs(n) {
showDivs(slideIndex += n);
}

function showDivs(n) {
var i=0;
var x = document.getElementsByClassName(classes.bannerImage);
if(x.length > 0){
if (n > x.length) {slideIndex = 1}
if (n < 1) {slideIndex = x.length}
for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
}
x[slideIndex-1].style.display = "inline-block";  
}
}
 

    return (
            <div className={classes.bannerContainer}>
            <img className={classes.bannerImage} src="storage/featured_products/1.jpg" />
            <img className={classes.bannerImage} src="storage/featured_products/2.jpg" />
            <img className={classes.bannerImage} src="storage/featured_products/3.jpg"/>
            <img className={classes.bannerImage} src="storage/featured_products/4.jpg" />

            <Button className={classes.prevImageButton} onClick={()=>plusDivs(-1)}>&#10094;</Button>
            <Button className={classes.nextImageButton} onClick={()=>plusDivs(1)}>&#10095;</Button>
            </div>  
            );
}

export default FeaturedProductsBanner;

