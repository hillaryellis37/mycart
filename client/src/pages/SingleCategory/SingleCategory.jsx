import React, { Component } from 'react';

//Homepage frontend logic goes here

class SingleCategory extends Component {


  render(){
    return (
      <div>
        <p>This is the SingleCategory Page</p>
        <p>{this.props.match.params.id}</p>
      </div>
    );
  }
}

export default SingleCategory;