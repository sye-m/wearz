import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux'; 
import { logout } from '../../actions/auth';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { Link,withRouter } from 'react-router-dom';
import { fade, makeStyles } from '@material-ui/core/styles';
import queryString from 'query-string';
import InputBase from '@material-ui/core/InputBase';
import Box from '@material-ui/core/Box';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';

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
      zIndex:'1111',
      padding:'15px 0px 15px 0px',
      backgroundColor:theme.palette.primary.main,
      width:'100%',
      height:'44px',
      position:'fixed',
      top:'0',
      
    },
    cart:{
      textAlign:'center',
      alignSelf:'center',
      fontSize:'1.5rem',
      '& a':{
        color:'black',
        textDecoration:'none'
      }
    },
    user:{
      textAlign:'center',
      alignSelf:'center',
     
    },
    userText:{
      fontSize:'1.2rem',
    },
    cartText:{
      fontSize:'1.2rem'
    },
    brandIcon:{
      height:'2rem',

    },
    userIcon:{
      fontSize:'2rem',
    },
    userButton:{
      padding:'0px'
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
    ordersOption:{
        textDecoration:'none',
        color:'#000000'
    },
    loginButton:{
      '& a':{
        textDecoration:'none',
        color:'#000000'
      }
    }
  }));
const Navbar = ({history,location,auth,cart:{products},logout}) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const logoutUser = ()=>{
      setAnchorEl(null);
      logout();
    }

    const search = (e)=>{
      //only perform search when enter key is pressed
      if(e.key === 'Enter'){
        let query = queryString.parse(location.search);
        let searchTermQuery = e.target.value?`?searchTerm=${e.target.value}`:'';
        //get previous query terms if present and add them to the query string
        let brandsQuery = query.brands && searchTermQuery.length > 0 ? `&brands=${query.brands}`:query.brands ?`?brands=${query.brands}`:'';//if search term is not present search based on previous brands query present
        let typesQuery = query.types && (searchTermQuery.length > 0 || query.brands) ? `&types=${query.types}`:query.types && !query.brands ?`?types=${query.types}`:'';//if search term is not present search based on previous types query present
        //change location only if there is a query string present
        if(searchTermQuery.length > 0 || brandsQuery.length > 0 || typesQuery.length > 0){
          history.push(`/products${searchTermQuery}${brandsQuery}${typesQuery}`)
        }
      }
    }
    return (
            <Box className={classes.navBar} color="text.primary">
            <Grid container>
                <Grid item xl={2} lg={2} xs={2} sm={3}>
                    <Link to="/" style={{textDecoration:'none'}}>
                        <img className={classes.brandIcon} src="/storage/icons/footIcon.png"/>
                        <Box display={{xs:'none',md:'inline',sm:'inline', lg:'inline',xl:'inline'}} className={classes.shopName}>Wearz</Box>
                    </Link>

                </Grid>
                <Grid item xl={6} lg={6} xs={5} sm={5}>
                  <div className={classes.search}>
                    <div className={classes.searchIcon}>
                      <SearchIcon />
                    </div>
                    <InputBase
                      onKeyUp={search}
                      placeholder="Search…"
                      classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                      }}
                      inputProps={{ 'aria-label': 'search' }}
                    />
                  </div>
                </Grid>
                <Grid item xl={2} lg={2} xs={3} sm={2} className={classes.user}>
                  <div>
                    <Box color="text.secondary" className={classes.userText}>
                      {auth.user?
                      (
                        <Fragment>
                        <Button className={classes.userButton} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                          <AccountCircleIcon className={classes.userIcon}/>
                          {auth.user && auth.user.name.length>3? auth.user.name.substring(0,4)+"..":auth.user.name}
                        </Button>
                        <Menu
                          id="simple-menu"
                          anchorEl={anchorEl}
                          keepMounted
                          open={Boolean(anchorEl)}
                          onClose={handleClose}
                        >
                          <MenuItem onClick={handleClose}>{auth.user && auth.user.name}</MenuItem>
                            <Link to="/orders"  className={classes.ordersOption}>
                              <MenuItem>
                                Orders
                              </MenuItem>
                            </Link>
                          <MenuItem onClick={logoutUser}>Logout</MenuItem>
                        </Menu>
                        </Fragment>):(<Button className={classes.loginButton}><Link to="/login">Login</Link></Button>)}
                    </Box>
                  </div>
                </Grid>
                <Grid item xl={2} lg={2}  xs={2} sm={2} className={classes.cart}>
                    <Link to="/cart">
                          <div>
                            <Badge badgeContent={products && products.length} color="error">
                              <ShoppingCartIcon className={classes.cartIcon}/> 
                            </Badge>
                            <Box display={{xs:'none',md:'inline',sm:'inline', lg:'inline'}} className={classes.cartText}>Cart</Box>
                          </div>
                    </Link>
                  </Grid>
            </Grid>
            </Box>
            );
}
Navbar.propTypes = {
  auth:PropTypes.object.isRequired,
  logout:PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  auth:state.auth,
  cart:state.cart
})
export default connect(mapStateToProps,{logout})(withRouter(Navbar));

