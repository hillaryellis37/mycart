import React, { Component } from 'react';
import Carts from "../../components/Carts";
import Items from "../../components/Items";
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

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
  render(){
    return (
      <div>
        <div style={specificCartStyle}>
        	<Carts 
        		src={this.props.src}
        		description={this.props.description}
            style={cartsStyle}
            descriptionStyle={specificCartStyle}
        	>{this.props.description}</Carts>
          <div>
            <FormGroup controlId="formControlsTextarea">
              <ControlLabel>Textarea</ControlLabel>
              <FormControl componentClass="textarea" placeholder="textarea" />
            </FormGroup>
          </div>

        </div>

        <p>This is the {this.props.description} Cart Page</p>
        <Items
          href="https://www.google.com"
          src="http://s1.thingpic.com/images/37/QAnbgX78k1NvjA3XaYi64MQo.png"
          itemName="Trees"
        />        <Items
          href="https://www.google.com"
          src="http://s1.thingpic.com/images/37/QAnbgX78k1NvjA3XaYi64MQo.png"
          itemName="Trees"
        />        <Items
          href="https://www.google.com"
          src="http://s1.thingpic.com/images/37/QAnbgX78k1NvjA3XaYi64MQo.png"
          itemName="Trees"
        />        <Items
          href="https://www.google.com"
          src="http://s1.thingpic.com/images/37/QAnbgX78k1NvjA3XaYi64MQo.png"
          itemName="Trees"
        />        <Items
          href="https://www.google.com"
          src="http://s1.thingpic.com/images/37/QAnbgX78k1NvjA3XaYi64MQo.png"
          itemName="Trees"
        />        <Items
          href="https://www.google.com"
          src="http://s1.thingpic.com/images/37/QAnbgX78k1NvjA3XaYi64MQo.png"
          itemName="Trees"
        />

      </div>
    );
  }
}

export default SpecificCart;