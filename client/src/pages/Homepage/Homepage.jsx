import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import './Homepage.css';

//Homepage frontend logic goes here

const carouselItem = {
  width:'100%',
  height:'400px',
}

class Homepage extends Component {
  render(){
    return (
      <div>
        <div className="carousel-container">
          <Carousel controls={false} pauseOnHover={false} className="homepage">
            <Carousel.Item style={carouselItem} index={1}>
              <img 
                width={1600} 
                height={450} 
                alt="1600x450" 
                src="https://static.pexels.com/photos/346751/pexels-photo-346751.jpeg" 
              />
              <Carousel.Caption>
                <h3>Shop Smart and Build Carts with Des Carts</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={carouselItem} index={2}>
              <img 
                width={1600} 
                height={450} 
                alt="1600x450" 
                src="https://static.pexels.com/photos/298864/pexels-photo-298864.jpeg" 
              />
              <Carousel.Caption>
                <h3>Idk what to put here. Ask later.</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={carouselItem} index={3}>
              <img 
                width={1600} 
                height={450} 
                alt="1600x450" 
                src="https://static.pexels.com/photos/167703/pexels-photo-167703.jpeg" 
              />
              <Carousel.Caption>
                <h3>Creators Panels</h3>
                <p>This one can be the creators panel(Contains icons to github, with our own individual githubs</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="homepage-instructions">
          <div className='blue-box'>
            <div>1.</div>
            <div>Select a cart to add an item to. 
            If the cart you wish to add to is not there, 
            simply click on "Add Cart +" to create a new 
            Cart.</div>
          </div>
        </div>

        <div className="homepage-instructions">
          <div className='blue-box'>
            <div>2. </div>
            <div>Manually input the name, image, URL, and a 
            short description of the item into the Cart. The 
            item will be saved into the Cart and organized for 
            you.</div>
          </div>
        </div> 

        <div className="homepage-instructions">
          <div className='blue-box'>
            <div>3. </div>
            <div>Click on an item to view, edit, or delete its 
            content. Keep your various shopping lists organized 
            and updated with Des Cart.</div>
          </div>
        </div>

      </div>
    );
  }
}

export default Homepage;


      // <div className="blue-box">
      //   Welcome to Des Carts. Store and organize your wish list items into Carts, so you will never 
      //   need to go back and forth between shopping lists again!
      // </div>