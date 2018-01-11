import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';
import { Grid, Row, Col, Carousel, CarouselItem } from 'react-bootstrap';
import Carts from '../../components/Carts';
import CustomCarousel from '../../components/Carousel';
import Credits from '../../components/Credits';
import Stats from '../../components/Stats';
import InstallExtension from '../../components/InstallExtension';
import './Homepage.css';

//Homepage frontend logic goes here

const adjustHeight = {
  cart: {
    'width': '100%',
    'height': '400px',
    'opacity': '1.0',
    'margin':'0',
  }
}

const carouselItem = {
  width:'100%',
  height:'500px',
  'background-color':'black',
  // 'font-family': 'Roboto, sans-serif',
}


class Homepage extends Component {
  render(){
    return (
      <Grid fluid={true}>
        <Row className="show-grid" >
          <Col xs={12} sm={12} md={12} lg={12}>
            <CustomCarousel
              src="https://static.pexels.com/photos/346751/pexels-photo-346751.jpeg"
            />
          </Col>
        </Row>

        <Row className="show-grid" >         
          <Col xs={3} sm={3} md={12} lg={12}>
            <Stats
              user={this.props.user}
              profileSrc= {this.props.profileSrc}
              followers="0"
              following="0"
              numCarts="2"
            />
          </Col>
        </Row>

        <Row className="show-grid" >
          <Col xs={3} sm={3} md={8} lg={12}>
            <Carousel 
              controls={false} 
              pauseOnHover={false} 
              className="carousel"
            >
              <Carousel.Item style={carouselItem} index={1}>
                <Carousel.Caption className="panel-2">
                  <p>"What an amazing experience!"</p>
                  <p>-Abraham Lincoln</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={carouselItem} index={2}>
                <Carousel.Caption className="panel-2">
                  <p>"I think; therefore I am."</p>
                  <p>-René Descartes</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={carouselItem} index={3}>
                <Carousel.Caption className="panel-2">
                  <p>"It's alright."</p>
                  <p>-Michael, Wizard.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>

        <Row className="show-grid" >
          <Col xs={3} sm={3} md={12} lg={12}>
            <InstallExtension />
          </Col>
        </Row>

        <Row className="show-grid" >
          <Col xs={3} sm={3} md={8} lg={12}>
            <Credits />
          </Col>
        </Row>
        
      </Grid>
    );
  }
}

export default Homepage;


      // <div className="blue-box">
      //   Welcome to Des Carts. Store and organize your wish list items into Carts, so you will never 
      //   need to go back and forth between shopping lists again!
      // </div>

        //       <div className="homepage-instructions">
        //   <div className='blue-box'>
        //     <div>1.</div>
        //     <div>Select a cart to add an item to. 
        //     If the cart you wish to add to is not there, 
        //     simply click on "Add Cart +" to create a new 
        //     Cart.</div>
        //   </div>
        // </div>

        // <div className="homepage-instructions">
        //   <div className='blue-box'>
        //     <div>2. </div>
        //     <div>Manually input the name, image, URL, and a 
        //     short description of the item into the Cart. The 
        //     item will be saved into the Cart and organized for 
        //     you.</div>
        //   </div>
        // </div> 

        // <div className="homepage-instructions">
        //   <div className='blue-box'>
        //     <div>3. </div>
        //     <div>Click on an item to view, edit, or delete its 
        //     content. Keep your various shopping lists organized 
        //     and updated with Des Cart.</div>
        //   </div>
        // </div>