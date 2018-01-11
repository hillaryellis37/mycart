import React, { Component } from 'react';
import Carts from "../../components/Carts";
import Items from "../../components/Items";
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import API from "../../utils/API";

//Homepage frontend logic goes here

const specificCartStyle = {
  'padding': '50px',
  'background-color': 'rgba(102, 2, 60, 0.85)',
  // 'background-color': 'rgba(0, 35, 102, 0.9)'
}

const cartsStyle = {
  'opacity':'1',
  'cursor':'default',
  'text-shadow': '2px 2px 1px black',
  'float':'left'
}

class SpecificCart extends Component {

  state = {
    currentCart: {},
    cartItems: []
  };

componentDidMount() {
  let cartId = this.props.match.params.id;
  this.getClickedCart(cartId);
  this.getItems();
}

  getClickedCart = (id) => {
    API.getCart(id)
      .then(res => 
        this.setState({ currentCart: res.data}))
      .catch(err => console.log(err));
  };
 
   getItems = () => {
    API.getItems()
      .then(res => 
        this.setState({ cartItems: res.data}))
      .catch(err => console.log(err));
  };
 





  render(){
    return (
      <div>
        <p>This is the {this.props.match.params.id} Cart Page</p>
        
          {this.state.cartItems.map(item => (
            <Items 
            href={item.url}
            itemName={item.item_name}        
            src={item.image}
            />

          ))}
        
      </div>
    );
  }
}

export default SpecificCart;