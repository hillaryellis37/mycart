import React, { Component } from 'react';
import './Items.css';

class Items extends React.Component { 
	render(){
		return(
			<div className='actual-item'> 
				<a href={this.props.href}>
					<img className="actual-item-image" src={this.props.src} />
					<div>{this.props.itemName}</div>
				</a>
			</div>
		)
	}
}
export default Items;