import React, { Component } from "react";
import { Link } from "react-router-dom";
import {FBLogin, FBLogout} from '../../components/FBlogin';
import LoginPage from '../../pages/Login/Login.jsx';

// const NavBar = () =>
// 	<div>
// 		<Link to="/">Home</Link>
// 	</div> 

// const Navbar = props => <main className="navbar" {...props} />;

//CREATE LOGOUT BUTTON..
const NavBar = props =>
  <nav className="navbar navbar-default"> 
    <div className="container-fluid">
      <div className="navbar-header">
        <Link to="/">Login</Link>
        <Link to="/home">Home</Link>
        <Link to="/all">All</Link>
        <Link to="/single">Single</Link>
        <img />
        <FBLogout checkCookie={props.cWM}/>
      </div>
    </div>
 </nav>



export default NavBar;

