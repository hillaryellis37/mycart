import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
  Switch
} from 'react-router-dom';
import NavBar from "./components/Navbar";
import LoginPage from "./pages/Login";
import Homepage from "./pages/Homepage";
import AllCategories from "./pages/AllCategories";
import SingleCategory from "./pages/SingleCategory";  

// TEAMNAME: WNATN, MAHIRA,AIRHAM,ARMAIH, harmia
// NAMES: Shopkeep, Vender

const fbAppId = '141088316668315';
let fbCookie = document.cookie;

//Put all login fb cookie checking here?
class App extends Component {
  state = {
    isLoggedIn: false
  }

  checkIfLoggedIn =(testlogin) => {
    fbCookie = document.cookie;

    console.log('FB Login Cookie:', fbCookie);
    // reuse to check cookies for other parts of page
    // NEED CALLBACK FOR AFTER COOKIES CHANGE
    if (fbCookie === "fblo_" + fbAppId + "=y"){ //OR UNDEFINED
      //IF NOT LOGGED IN LOGIC
      console.log('Log Out Successful; should be: false ;loggedInTest is', testlogin);
      this.setState({ isLoggedIn: false });
    } else {
      // IF ALREADY LOGGED IN LOGIC
      console.log('Log In Successful; should be: true ;loggedInTest is', testlogin);
      this.setState({ isLoggedIn: true });
    }
  }
  //NEED LOGIC FOR WHEN LOGOUT, TURNS isLoggedIn STATE TO FALSE

  componentWillMount(){
    this.checkIfLoggedIn(this.state.isLoggedIn);
  }
// this.state.isLoggedIn === true

  render(){
    if(this.state.isLoggedIn === false){
      return (
        <LoginPage 
          wantedState={this.state.isLoggedIn} 
          cWM={()=>this.componentWillMount()}
        />
      )
    } else {
      return (
        <Router>
          <div>
            <Redirect to="/home" />
            <NavBar cWM ={()=>this.componentWillMount()}/>
            <Switch>
              <Route exact path="/" component={LoginPage} />
              <Route exact path="/home" component={Homepage} />
              <Route exact path="/all" component={AllCategories} />
              <Route exact path="/single" component={SingleCategory} />
            </Switch> 
          </div>
        </Router>  
      )
    }
  }
}

export default App;

  // render() {
  //   return (
  //     <div>
  //       <p>Go team!</p>
  //       <FacebookLogin
		// 	    appId={fbAppId}
		// 	    autoLoad={true}
		// 	    fields="name,email,picture"
		// 	    onClick={console.log('fb')}
		// 	    callback={responseFacebook} 
		// 	    icon="fa-facebook"
		// 	  />
  //     </div>
  //   );
  // }
