import React, { Fragment,useEffect, Suspense, lazy } from 'react';
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
import CircularLoader from './components/loaders/CircularLoader';
const Landing  = lazy(()=>import('./components/layouts/Landing.js')) ;
const Register = lazy(()=> import('./components/auth/Register'));
const Login = lazy(()=>import('./components/auth/Login'));
const AlertBar = lazy(()=>import('./components/layouts/AlertBar'));
const Products = lazy(()=>import('./components/products/Products'));
const Product = lazy(()=>import('./components/product/Product'));
const Cart = lazy(()=>import('./components/cart/Cart'));
const Orders = lazy(()=>import('./components/order/Orders'));
const ConfirmOrder = lazy(()=>import('./components/order/ConfirmOrder'));
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
                    <Suspense fallback={<CircularLoader loading={true}/>}>    

                          <AlertBar />        
                          <Switch>
                              <Route exact path="/" component={Landing}/>
                              <Route exact path="/register" component={Register} />
                              <Route exact path="/login" component={Login} />
                              <Route exact path="/products" component={Products} />
                              <Route exact path="/product/:product_id" component={Product} />
                              <Route exact path="/cart" component={Cart} />
                              <PrivateRoute exact path="/orders" component={Orders} />
                              <PrivateRoute exact path="/confirm_order" component={ConfirmOrder} />
                          </Switch>
                        </Suspense>

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
