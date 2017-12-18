import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import Input from '../../components/Input';
import Button from '../../components/Button';

const fbAppId = "141088316668315";

const responseFacebook = (response) => {
  console.log(response);
}

class Login extends Component {
  render(){
    return (
      <div>
        <h1>My Cart</h1>
        <Input type='text' placeholder='Login'/>
        <Input type='password' placeholder='password'/>
        <Button className='btn-primary'>Login</Button>
        <h2>OR</h2>
        <div>
          <FacebookLogin
           appId={fbAppId}
           autoLoad={true}
           fields="name,email,picture"
           onClick={console.log('fb')}
           callback={responseFacebook} 
           icon="fa-facebook"
          />
          <Button className='btn-primary'>Demo</Button>
        </div>
      </div>
    );
  }
}

export default Login;