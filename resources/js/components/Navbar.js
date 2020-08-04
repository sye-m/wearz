import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles((theme) => ({
    search: {
      width:'100%',
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
      width:'100%',
    },
    shopName:{
      fontFamily:'Cooper, sans-serif',
      fontSize:'2rem',
      textDecoration:'none',
      color:'#fafafa'
    },
    navBar:{
      padding:'1em 1em 1em 0px',
      backgroundColor:theme.palette.primary.main,
      width: '-moz-available',    /* WebKit-based browsers will ignore this. */
      width:'-webkit-fill-available',
      width:'100%',
      height:'fit-content',
      position:'fixed'
    },
    cart:{
      textAlign:'center',
      alignSelf:'center',
      fontSize:'1.5rem'
    },
    user:{
      textAlign:'center',
      alignSelf:'center',
     
    },
    userText:{
      fontSize:'1.2rem',
      position:'relative',
      top:'-8px'
    },
    cartText:{
      fontSize:'1.2rem'
    },
    brandIcon:{
      height:'2rem'
    },
    userIcon:{
      fontSize:'2rem',
      
    },
    cartIcon:{
      fontSize:'2rem'
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
    },
  }));
const Navbar = (prop) => {
    const classes = useStyles();

    return (
            <Box className={classes.navBar} color="text.primary">
            <Grid container>
                <Grid item xl={3} xs={2} xm={3}>
                    <Link to="/" style={{textDecoration:'none'}}>
                        <img className={classes.brandIcon} src="storage/icons/footIcon.png"/>
                        <Box display={{xs:'none',md:'inline',sm:'inline', lg:'inline'}} className={classes.shopName}>Wearz</Box>
                    </Link>

                </Grid>
                <Grid item xl={5} xs={6} xm={3}>
                  <div className={classes.search}>
                    <div className={classes.searchIcon}>
                      <SearchIcon />
                    </div>
                    <InputBase
                      placeholder="Search…"
                      classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                      }}
                      inputProps={{ 'aria-label': 'search' }}
                    />
                  </div>
                </Grid>
                <Grid item xl={2} xs={2} xm={4} className={classes.user}>
                  <div>
                    <AccountCircleIcon className={classes.userIcon}/>
                    <Box display={{xs:'none',md:'inline',sm:'inline', lg:'inline'}} className={classes.userText}>
                      User
                    </Box>
                  </div>
                </Grid>
                <Grid item xl={2} xs={2} xm={2} className={classes.cart}>
                      <div>
                        <ShoppingCartIcon className={classes.cartIcon}/> 
                        <Box display={{xs:'none',md:'inline',sm:'inline', lg:'inline'}} className={classes.cartText}>Cart</Box>
                      </div>
                  </Grid>
            </Grid>
            </Box>
            );
}

export default Navbar;

