import React, { Component } from 'react';
import Input from '../../components/Input';
// import Button from '../../components/Button';
import SearchButton from '../../components/SearchButton';
import Items from '../../components/Items';
//Homepage frontend logic goes here

class Homepage extends Component {
  render(){
    return (
      <div>
        <Items 
          description="Add Cart +"
        />
        <Items 
          src="https://www.thedailymeal.com/sites/default/files/styles/hero_image_breakpoints_theme_tdmr_lg_1x/public/story/MAIN-skillsperfect-istock_thinkstock.jpg?itok=lBPpfbNb&timestamp=1418658115"
          description="Cooking"
        />
        <Items 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1200px-Good_Food_Display_-_NCI_Visuals_Online.jpg"
          description="Foods"
        />
        <Items 
          src="https://citelighter-cards.s3.amazonaws.com/p17d98f5st15qd1tsv1m9c1sbu11uo0_64674.jpg"
          description="Tech"
        />
        <Items 
          src="http://www.frador.com/wp-content/uploads/2015/04/gardening_in_mn.jpg"
          description="Gardening"
        />
        <Items 
          src="http://trendingallday.com/wp-content/uploads/2017/05/GordonRamsay.jpg"
          description="Gordon Ramsay"
        />
      </div>
    );
  }
}

export default Homepage;