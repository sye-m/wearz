import React, { Fragment,useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Provider } from 'react-redux';
import { loadUser } from './actions/auth.js';
import { getCart } from './actions/cart.js';
import store from './store.js';
import PrivateRoute from './components/routing/PrivateRoute';
import Navbar from './components/layouts/Navbar.js';
import Landing from './components/layouts/Landing.js';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import AlertBar from './components/layouts/AlertBar';
import Products from './components/products/Products';
import Product from './components/product/Product';
import Cart from './components/cart/Cart';
import Orders from './components/order/Orders';
const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#4a148c',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: '#ba68c8',
      // dark: will be calculated from palette.secondary.main,
    },
   
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});
const App = (prop) => {
    useEffect(()=>{
      const loadUserAndCart = async() => {
        await store.dispatch(loadUser());
        store.dispatch(getCart())
      }
      loadUserAndCart();
    },[]);
    return (
        <Fragment>
          <Provider store={store}>    
              <Router>
                <ThemeProvider theme={theme}>
                    <Navbar/>
                    <div id="container">
                        <AlertBar />        
                        <Switch>
                            <Route exact path="/" component={Landing}/>
                            <Route exact path="/register" component={Register} />
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/products" component={Products} />
                            <Route exact path="/product/:product_id" component={Product} />
                            <Route exact path="/cart" component={Cart} />
                            <PrivateRoute exact path="/orders" component={Orders} />
                        </Switch>
                    </div>
                </ThemeProvider>
            </Router>
          </Provider>
        </Fragment>
            );
}

export default App;

if (document.getElementById('app')) {    
    const element = document.getElementById('app');
    const props = Object.assign({},element.dataset);
    ReactDOM.render(<App {...props}/>, document.getElementById('app'));
}
