import React, { Component } from 'react';
import Carts from "../../components/Carts";
import Items from "../../components/Items";
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import API from "../../utils/API";
import './SpecificCart.css';


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

const position ={
  'position':'relative',
}

const deleteButton = {
  'position':'absolute',
  'top':'20px',
  'left':'20px',
  'opacity' : 1,
  'background-color' : 'black',
  'color': "white",
}

class SpecificCart extends Component {

  state = {
    currentCart: {},
    cartItems: []
  };




  componentDidMount() {
    let cartId = this.props.match.params.id;
    this.getClickedCart(cartId);
    this.getItems(cartId);
  }


  getClickedCart = (id) => {
    API.getCart(id)
      .then(res => {
        this.setState({ currentCart: res.data});
      })
      .catch(err => console.log(err));
  };
 
   getItems = (cartId) => {
    API.getItems(cartId)
      .then(res => {
        console.log(res.data.items);
        this.setState({ cartItems: res.data.items});
      })
      .catch(err => console.log(err));
  };

  deleteItem = (id) => {
    API.deleteItem(id)
      .then(res => {
        console.log(res.data);
        let newCartArray = this.state.cartItems.filter(function(item) {
          return item._id !== res.data._id;
        })

        this.setState({ cartItems: newCartArray});
      })
      .catch(err => console.log(err));

  };
 





  render(){
    return (
      <div>
        <br />
          {this.state.cartItems.map((item, i) => (
           <div className="specific-cart" key={i}> 
            <Items 
              onclick
              href={item.url}
              itemName={item.item_name}        
              src={item.image}
            />
            <button className="delete-button" onClick={() => this.deleteItem(item._id)}>Remove</button>
           </div>
          ))}
        
      </div>
    );
  }
}

export default SpecificCart;
