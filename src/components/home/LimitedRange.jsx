import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const LimitedRange = () => {
  return (
    <>
    <div className="limitedRange d-flex flex-column align-items-center">
        <div className="quotes py-3 text-center"><i className="fa-solid fa-quote-left fs-2 text-white"></i></div>
        <div className="stars">
            <i className='fa-solid fa-star me-1'></i>
            <i className='fa-solid fa-star me-1'></i>
            <i className='fa-solid fa-star me-1'></i>
            <i className='fa-solid fa-star me-1'></i>
            <i className='fa-solid fa-star'></i>
        </div>


        {/* <p className='text-center'>“ This place is awesome and huge! Michael was super cool and very <br /> pleasant to work with. If you want someone to deliver the sound to your <br /> project, he is the guy to go to.”</p> */}



        <Carousel>
      <Carousel.Item>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </div>
    </>
  )
}

export default LimitedRange