import React from "react";
import './Items.css';

const Items = props => 
	<div className="item" onClick={props.onClick}>
		<img className="item item-image" src={props.src} alt={props.children}/>
		<div className="description">{props.description}</div>
	</div>

export default Items;


