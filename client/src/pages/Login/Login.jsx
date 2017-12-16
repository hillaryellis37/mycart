import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

const fbAppId = "141088316668315";

const responseFacebook = (response) => {
  console.log(response);
}

class Login extends Component {
  render(){
    return (
      <div>
        <p>Go team!</p>
        <FacebookLogin
         appId={fbAppId}
         autoLoad={true}
         fields="name,email,picture"
         onClick={console.log('fb')}
         callback={responseFacebook} 
         icon="fa-facebook"
       />
      </div>
    );
  }
}

export default Login;