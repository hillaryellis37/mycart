import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FacebookLogin from 'react-facebook-login';
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import AllCategories from "./pages/AllCategories";
import SingleCategory from "./pages/SingleCategory";  

const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Homepage} />
        <Route exact path="/all" component={AllCategories} />
        <Route exact path="/single" component={SingleCategory} />
      </Switch>
    </div>
  </Router>;    



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
