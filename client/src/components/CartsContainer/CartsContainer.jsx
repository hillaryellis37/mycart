import React, { Component } from 'react';
import Input from '../Input';
import Button from '../Button';
import Carts from '../Carts';
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';

//CartsContainer frontend logic goes here
const carts = [];

const homepageStyle = {
  'width':'100%'
};

const addCartInputStyle = {
  'width':'288px'
};


class CartsContainer extends Component {
  

  redirectToSpecificCart(){
    this.context.router.push({
     pathname: '/SpecificCart',
     state: {name: this.state.name}  
    })
  }

  render(){
    return (
      <div style={homepageStyle}>
        <Carts 
          description="Add Cart +" 
        />

      </div>
    );
  }
}

export default CartsContainer;