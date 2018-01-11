import React from "react";
import './InstallExtension.css';
import chrome from './chrome.png';

class InstallExtension extends React.Component { 
	render(){
		return(	
			<div className="installExtension" style={this.props.style}>
				<img className="chrome" src={chrome}/>
				<div className="chrome-install">
					<div className="top-install">Install Des Carts Chrome Extension.</div>
					<div className="bottom-install">Organizing shopping items has never been easier.</div>
				</div>
			</div>
		)
	}
}
export default InstallExtension;