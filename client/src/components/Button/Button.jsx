import React from "react";

const Button = props => 
	<button type="button" className={"btn " + props.className} children={props.children}/>;

export default Button;


