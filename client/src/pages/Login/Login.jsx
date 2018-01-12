import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {FBLogin, FBLogout} from '../../components/FBlogin';
import brand from './brand.png';
import "./Login.css";


// const LoginPage = props => {  
let storedData;

class LoginPage extends React.Component {

  // PASSES USER DATA FROM FB LOGIN API TO LOGIN PAGE
  passDataFbToLogin(userData){
    //vvv PASSES USER DATA TO APP.jsx
    this.props.passDataFromLoginToApp(userData)
    storedData = userData;
    console.log('FBloing.jsx --> Login.jsx:', storedData);
  }

  render(){
    return (
      <div>
        <div className="align-elements">
          <div className="brand">Des Carts</div>
          <img src={brand} className='login-brand'/> 
          <div className="container">
            <Input type='text' placeholder='Login'/>
            <Input type='password' placeholder='Password'/>
            <Button 
              className='button login-button' 
              onClick={() => console.log('this button does nothing')}
            >Login</Button>
            <div className="divider"> - OR - </div>
            <div>
              <FBLogin 
                checkCookie={this.props.cWM} 
                passDataFromFb={this.passDataFbToLogin.bind(this)}
              />
              <Button 
                className='demo-button button'
                onClick={() => console.log('this button also does nothing')}
              >Demo</Button>
            </div>
          </div>
        </div>
        <img src="./des_cart_background_image.png" class="background-image" />
      </div>
      );
    }
  // }
};

export default LoginPage;