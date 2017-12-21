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


const fbAppId = '141088316668315';
const fbCookie = document.cookie;

console.log('FB Login Cookie:', fbCookie);
console.log('IF COOKIE ENDS IN "=y" THEN USER IS NOT LOGGED IN');
console.log('To Log out, comment out "this.setState({ isLoggedIn: true });" in checkIfLoggedIn, go to login page and hit LOGOUT');


//Login Logic
class LoginPage extends Component {
  state = {
    isLoggedIn: false
  }

  checkIfLoggedIn =(testlogin) => {
    // reuse to check cookies for other parts of page
    // NEED CALLBACK FOR AFTER COOKIES CHANGE
    if (fbCookie === "fblo_" + fbAppId + "=y"){ //OR UNDEFINED
      //IF NOT LOGGED IN LOGIC
      console.log('Log Out Successful; should be: false ;loggedInTest is', testlogin);
    } else{
      // IF ALREADY LOGGED IN LOGIC
      console.log('Log In Successful; should be: true ;loggedInTest is', testlogin);
      // this.setState({ isLoggedIn: true });
    }
  }
  //NEED LOGIC FOR WHEN LOGOUT, TURNS isLoggedIn STATE TO FALSE

  componentWillMount(){
    this.checkIfLoggedIn(this.state.isLoggedIn);
  }

    
  render(){
    if (this.state.isLoggedIn === true) {
      return (
        <Redirect to="/home" />
      )
    } else {
      return (
        <div>
          <h1>My Cart</h1>
          <Input type='text' placeholder='Login'/>
          <Input type='password' placeholder='password'/>
          <Button className='btn-primary'>Login</Button>
          <h2>OR</h2>
          <div>
            <FBLogin checkCookie={this.componentWillMount}/>
            <Button className='btn-primary'>Demo</Button>
          </div>
        </div>
      );
    }
  }
};

export default LoginPage;