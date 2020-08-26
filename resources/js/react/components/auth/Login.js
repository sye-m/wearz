import React, { useEffect,useState,Fragment } from 'react'
import { Redirect,Link, withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { login } from '../../actions/auth';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import LinearLoader from './../loaders/LinearLoader';
import queryString from 'query-string';
const useStyles = makeStyles((theme)=>({
    loginContainer:{
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        position:'absolute',
        padding:'1.3em',
        border:'1px solid lightgray',
        borderRadius:'10px',
        width:'40%',
        minWidth:'300px',
        maxWidth:'450px',
        textAlign:'center'
    },
    formInput:{
        border: '0',
        margin: '0',
        padding: '0',
        position: 'relative',
        minWidth: '0',
        verticalAlign: 'top',
        display:'block',
        flex:'none',
        color:'black',
        marginBottom:'30px'
    },
    formTitle:{
        fontSize:'1.3em'
    },
    joinInSection:{
        marginTop: '1.5em'
    }
}));

const Login = ({auth,history,location,login}) => {
    if(auth.isAuthenticated){
        return <Redirect push to="/"/>
    }

    const doSomething = () => {}
    const classess = useStyles();

    const [formData,setFormData] = useState({
        email:'',
        password:'',
    });
    const { email,password } = formData
    const onInputChange = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value}); 
    }

    const loginUser = async (e) =>{
        let query = queryString.parse(location.search)
        let ifFromOrder = false;
        if(query.confirm_order){
            ifFromOrder = true
        }
        e.preventDefault();
        try{
        let res = await login({email,password},ifFromOrder);
        ifFromOrder ? history.push('/confirm_order') : history.push('/')
        }
        catch(err){
            console.log(err);
        }
    }

    const registerQuery = () => {
        let query = queryString.parse(location.search)
        let qString = ''
        if(query.confirm_order){
            qString = '/register?confirm_order=true';
        }
        else {
            qString = '/register';
        }
        return qString;
    }
    //check if the form is validated by checking if the formErrors attributes are empty
    return (
        <Fragment>
            <div className={classess.loginContainer}>
                <p className={classess.formTitle}>Login</p>
                <hr/>
                <form onSubmit={(e)=>loginUser(e)} autoComplete="off">
                <TextField type="email" fullWidth={true}  className={classess.formInput}  id="email" required name="email" label="Email" variant="outlined" onChange={(e)=>onInputChange(e)} value={email}/>
                <TextField type="password" fullWidth={true} className={classess.formInput} required id="password" name="password" label="Password" variant="outlined" onChange={(e)=>onInputChange(e)} value={password}/>
                <Button variant="contained" fullWidth={true} color="primary" type="submit">Login</Button>
                <div className={classess.joinInSection}>
                    Don't have an account with us? 
                    <Link to={registerQuery}> Join Now</Link>
                </div>
                </form>
            </div>
            <LinearLoader loading={auth.loading}/>
        </Fragment>

    )
}


Login.propTypes = {
    auth:PropTypes.object.isRequired,
    login:PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    auth:state.auth
})

export default connect(mapStateToProps,{login})(withRouter(Login))
