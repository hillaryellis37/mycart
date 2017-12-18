import React, { Component } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import SearchButton from '../../components/SearchButton';
import Items from '../../components/Items';
//Homepage frontend logic goes here

class Homepage extends Component {
  render(){
    return (
      <div>
        <Input type="text"/><SearchButton onClick={() => console.log('sweet') }/>

        <div>  
          <Items src="http://trendingallday.com/wp-content/uploads/2017/05/GordonRamsay.jpg"/>
        </div>








      </div>

    );
  }
}

export default Homepage;