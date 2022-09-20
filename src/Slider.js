import react from 'react';
import {Carousel} from 'react-bootstrap';

function Slider(){

    return(
        <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg"
          alt="First slide"
          style={{height:'500px'}}
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://free4kwallpapers.com/uploads/originals/2019/10/12/minimalistic-city-skyline-wallpaper.jpg"
          alt="Second slide"
          style={{height:'500px'}}
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://soliloquywp.com/wp-content/uploads/2013/05/action-backlit-beach-1046896-1200x450_c.jpg"
          alt="Third slide"
          style={{height:'500px'}}
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    )

}

export default Slider;