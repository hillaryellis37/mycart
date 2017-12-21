import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/Navbar";
import LoginPage from "./pages/Login";
import Homepage from "./pages/Homepage";
import AllCategories from "./pages/AllCategories";
import SingleCategory from "./pages/SingleCategory";  

// TEAMNAME: WNATN, MAHIRA,AIRHAM,ARMAIH, harmia
// NAMES: Shopkeep, Vender, Seloris, Asiant


//Put all login fb cookie checking here?
const App = () =>
  <Router>
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={LoginPage} />
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
