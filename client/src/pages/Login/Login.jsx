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


//const fbAppId = '141088316668315';
//const fbCookie = document.cookie;

// console.log('FB Login Cookie:', fbCookie);
// console.log('IF COOKIE ENDS IN "=y" THEN USER IS NOT LOGGED IN');
// console.log('To Log out, comment out "this.setState({ isLoggedIn: true });" in checkIfLoggedIn, go to login page and hit LOGOUT');


//Login Logic
  // state = {
  //   isLoggedIn: false
  // }

  // checkIfLoggedIn =(testlogin) => {
  //   // reuse to check cookies for other parts of page
  //   // NEED CALLBACK FOR AFTER COOKIES CHANGE
  //   if (fbCookie === "fblo_" + fbAppId + "=y"){ //OR UNDEFINED
  //     //IF NOT LOGGED IN LOGIC
  //     console.log('Log Out Successful; should be: false ;loggedInTest is', testlogin);
  //   } else{
  //     // IF ALREADY LOGGED IN LOGIC
  //     console.log('Log In Successful; should be: true ;loggedInTest is', testlogin);
  //     // this.setState({ isLoggedIn: true });
  //   }
  // }
  // //NEED LOGIC FOR WHEN LOGOUT, TURNS isLoggedIn STATE TO FALSE

  // componentWillMount(){
  //   this.checkIfLoggedIn(this.state.isLoggedIn);
  // }

// const LoginPage = props => {  

//   this.props.callbackFromParent('wutup')
  

//   if (props.wantedState === true) {
//     return (
//       <Redirect to="/home" />
//     )
//   } else {
//     return (
//       <div className="align-elements">
//         <div className="container">
//           <h1>Des Carts</h1>
//           <Input type='text' placeholder='Login'/>
//           <Input type='password' placeholder='Password'/>
//           <Button 
//             className='button login-button' 
//             onClick={() => console.log('this button does nothing')}
//           >Login</Button>
//           <h3> - OR -  </h3>
//           <div>
//             <FBLogin checkCookie={props.cWM}/>
//             <Button 
//               className='demo-button button'
//               onClick={() => console.log('this button also does nothing')}
//             >Demo</Button>
//           </div>
//         </div>
//       </div>
//     );
//   }
// };





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
      );
    }
  // }
};

export default LoginPage;