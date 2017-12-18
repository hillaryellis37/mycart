import React from 'react';

const Input = (props) =>
	<div className="form-group">
    <input className='form-control' type={props.type} placeholder={props.placeholder}/>
	</div>

export default Input;	