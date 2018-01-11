import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import './Carousel.css';

const carouselItem = {
  width:'100%',
  height:'550px',
  // 'font-family': 'Roboto, sans-serif',

}

class CarouselBootStrap extends Component {
  render(){
    return (
      <div className="carousel-container" style={carouselItem}>
        <Carousel 
          controls={false} 
          pauseOnHover={false} 
          className="carousel"
          indicators={false}
        >
          <Carousel.Item style={carouselItem} index={1}>
            <img 
              width={1800} 
              height={100} 
              alt="1600x450" 
              src={this.props.src} 
            />
            <Carousel.Caption className="panel-1">
              <p>Shop Smart and Build Carts.</p>
              <p>The traditional shopping list for a modern age.</p>
              <p>Join Des Carts.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
     </div>
    );
  }
}

export default CarouselBootStrap;

          // <Carousel.Item style={carouselItem} index={2}>
          //   <img 
          //     width={1800} 
          //     height={450} 
          //     alt="1600x450" 
          //     src="https://static.pexels.com/photos/298864/pexels-photo-298864.jpeg" 
          //   />
          //   <Carousel.Caption>
          //     <h3>Idk what to put here. Ask later.</h3>
          //     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          //   </Carousel.Caption>
          // </Carousel.Item>
          // <Carousel.Item style={carouselItem} index={3}>
          //   <img 
          //     width={1800} 
          //     height={450} 
          //     alt="1600x450" 
          //     src="https://static.pexels.com/photos/167703/pexels-photo-167703.jpeg" 
          //   />
          //   <Carousel.Caption>
          //     <h3>Creators Panels</h3>
          //     <p>This one can be the creators panel(Contains icons to github, with our own individual githubs</p>
          //   </Carousel.Caption>
          // </Carousel.Item>