import React from "react";
import { Link } from "react-router-dom";

// const NavBar = () =>
// 	<div>
// 		<Link to="/">Home</Link>
// 	</div> 

// const Navbar = props => <main className="navbar" {...props} />;

const NavBar = props =>
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link to="/">Login</Link>
        <Link to="/home">Home</Link>
        <Link to="/all">All</Link>
        <Link to="/single">Single</Link>
    	</div>
    </div>
  </nav>;



export default NavBar;

