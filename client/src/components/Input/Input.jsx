import React from 'react';
import './Input.css';

const Input = (props) =>
  <div className="form-group">
    <input
    	name={props.name}
    	className='form-control' 
    	type={props.type || 'text'} 
    	placeholder={props.placeholder}
    	value={props.value}
    	onChange={props.onChange}
        style={props.style}
    />
  </div>

export default Input;	