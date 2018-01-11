import React from "react";
import './Stats.css';
import ProfileDefault from "./profile_default.png";

class Stats extends React.Component { 
	render(){
		return(	
			<div className="stats-holder">
				<div className="stats" style={this.props.style}>
					<div className="statsBox">
						<div className="user">{this.props.user} Stats.</div>
						<span className="followers">
							<div>{this.props.followers}</div>
							<div>Followers</div>
						</span>
						<span className="following">
							<div>{this.props.following}</div>
							<div>Following</div>
						</span>
						<span className="number-carts">
							<div>{this.props.numCarts}</div>
							<div>Carts</div>
						</span>
					</div>
				</div>
				<img 
					className="profile"	
					src={this.props.profileSrc || ProfileDefault} 
					alt={this.props.children} 
				/>
			</div>
		)
	}
}
export default Stats;