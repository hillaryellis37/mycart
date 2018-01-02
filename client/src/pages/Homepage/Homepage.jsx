import React, { Component } from 'react';
import Input from '../../components/Input';
// import Button from '../../components/Button';
import Button from '../../components/Button';
import Items from '../../components/Items';
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';
import './Homepage.css';

//Homepage frontend logic goes here
class Homepage extends Component {
  render(){
    return (
    <div>
      <div className="blue-box">
        Welcome to Des Carts. Store and organize your wish list items into Carts, so you will never 
        need to go back and forth between shopping lists again!
      </div>
    </div>
    );
  }
}

export default Homepage;