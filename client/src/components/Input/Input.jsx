import React from 'react';


const Input = (props) =>
	<div className="form-group">
    <input
    	name={props.name}
    	className='form-control' 
    	type={props.type || 'text'} 
    	placeholder={props.placeholder}
    	value={props.value}
    	onChange={props.onChange}
    />
	</div>

export default Input;	