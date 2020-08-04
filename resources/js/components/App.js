import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Navbar from './Navbar.js';
import Landing from './Landing.js';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#4a148c',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
      contrastText:'#fafafa'
    },
    secondary: {
      main: '#ba68c8',
      // dark: will be calculated from palette.secondary.main,
      contrastText:'#000000'
    },
    text:{
        primary:'#fafafa',
        secondary:'#000000'
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
    return (
        <Fragment>
            <Router>
                <ThemeProvider theme={theme}>
                    <Navbar/>
                    <div id="container">
                        <Switch>
                            <Route exact path="/" component={Landing}/>
                        </Switch>
                    </div>
                </ThemeProvider>
            </Router>
        </Fragment>
            );
}

export default App;

if (document.getElementById('app')) {    
    const element = document.getElementById('app');
    const props = Object.assign({},element.dataset);
    ReactDOM.render(<App {...props}/>, document.getElementById('app'));
}
