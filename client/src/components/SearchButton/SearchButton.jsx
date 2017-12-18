import React from 'react';
import SearchIcon from './search_icon.png';
import './SearchButton.css';


const SearchButton = (props) => 
	<img className='search' src={SearchIcon} onClick={props.onClick}/>


export default SearchButton;	