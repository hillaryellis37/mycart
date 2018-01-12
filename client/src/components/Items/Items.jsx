import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import './Items.css';

class Items extends React.Component { 
	render(){
		return(
			<div className='actual-item img-responsive'> 
				<a href={this.props.href} className='a-item'>
					<Image 
						className="actual-item-image center-block" 
						src={this.props.src} 
						responsive
					/>
					<div>{this.props.itemName}</div>
				</a>
			</div>
		)
	}
}
export default Items;