import React from "react";
import './Carts.css';

class Carts extends React.Component { 
	render(){
		return(
			<div className="item" onClick={this.props.onClick}>
				<img 
					className="item item-image" 
					src={this.props.src} 
					alt={this.props.children} 
					style={this.props.style}
				/>
				<div className="description" style={this.props.style}>{this.props.description}</div>
			</div>
		)
	}
}
export default Carts;


