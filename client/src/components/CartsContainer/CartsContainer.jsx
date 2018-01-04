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
  state = {
    newCartInput: false,
    name:'',
    url:'',
    appendNewCart: false,
    carts: this.props.carts
  }

  inputOnAndOff(state){
     state === false ?
    (
      this.setState({
        newCartInput: true
      })
    ) : 
    (
      this.setState({
        newCartInput: false
      })
    )
  }

  updateInput(e){
    const name = e.target.name;

    this.setState({
      [name]: e.target.value
    })
  }

  //NO logic attached to appendNewCart, but cannot auto generate without it for some reason...
  createNewCart(array){
    this.setState({
      newCartInput: false,
      appendNewCart: true
    }, function(){
      array.push({ 
        src: this.state.url, 
        description: this.state.name 
      });
      this.setState({ appendNewCart: false });
      console.log(this.state, "\n New Cart Added");
      console.log(this.state.carts); 
    })
  }

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
          onClick=
          {
            () => this.inputOnAndOff(this.state.newCartInput)
          }
        />

        {//Conditional Rendering: if newCartInput is true, generate inputs
          this.state.newCartInput ? 
          <div className="container">
            <Input
              name="name"
              placeholder="New Cart Name"
              style={addCartInputStyle}
              value={this.state.name} 
              onChange={e => this.updateInput(e)}
            />
            <Input 
              name="url"
              placeholder = "Background Image URL"
              style={addCartInputStyle}
              value={this.state.url} 
              onChange={e => this.updateInput(e)}
            /> 
            <Button onClick={()=> this.createNewCart(this.state.carts)}>Confirm</Button>
          </div>
          :  ""
        }

        {this.state.carts.map((cart,i) => 
          <Link to="/single">
            <Carts 
              key = {i}
              src= {cart.src}
              description= {cart.description}
              onClick={()=>this.props.passCartData(cart)}
            >{cart.description}</Carts>
          </Link>
        )}

      </div>
    );
  }
}

export default CartsContainer;