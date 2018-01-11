import React from "react";
import { Carousel } from "react-bootstrap";
import './Credits.css';

const carouselItem = {
  width:'100%',
  height:'550px',
  'font-family': 'Roboto, sans-serif',
}

class Credits extends React.Component { 
	render(){
		return(	
			<div className="carousel-container ">
				<Carousel 
	          controls={false} 
	          pauseOnHover={false} 
	          indicators={false}
	        >
	        <Carousel.Item style={carouselItem} index={1}>
		           <img 
	              width={1800} 
	              height={100} 
	              alt="1600x450" 
	              src="https://static.pexels.com/photos/167703/pexels-photo-167703.jpeg"
			          className="panel-3"
	            />
							<h3 className="creators-title">Creators.</h3>

						<Carousel.Caption className="bs-caption">
							<div className="hillary">
								<div className="image-outline">
									<div>
										<p className="creators-name">Hillary Ellis</p>
										<img src="https://avatars1.githubusercontent.com/u/22782441?s=460&v=4"/>
									</div>
								</div>

							</div>
							<div className="marina">
								<div className="image-outline">
									<div>
										<p className="creators-name">Marina Lyulko</p>
										<img src="https://avatars1.githubusercontent.com/u/12022926?s=460&v=4"/>
									</div>
								</div>
							</div>
							<div className="dork">
								<div className="image-outline">
									<div>
										<p className="creators-name">Raymond Hui</p>
										<img src="https://avatars1.githubusercontent.com/u/29647983?s=460&v=4"/>
									</div>
								</div>
							</div>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</div>
		)
	}
}

export default Credits;