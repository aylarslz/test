import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';
import background_1 from '../../assets/img/home/hero_bg_1.jpeg'
import background_2 from '../../assets/img/home/hero_bg_2.jpeg'
import background_3 from '../../assets/img/home/hero_bg_3.jpeg'
import background_4 from '../../assets/img/home/hero_bg_4.jpeg'
import burger_1 from '../../assets/img/home/burger_1.png'
import blurred_leaf from '../../assets/img/home/blurred_leaf.png'
import pickle_leaves from '../../assets/img/home/pickle_leaves.png'
import mushroom from '../../assets/img/home/mushroom.png'
import discount_50 from '../../assets/img/home/discount_50.png'
import steak from '../../assets/img/home/steak.png'
import maple_leaf from '../../assets/img/home/maple_leaf.png'
import sausage from '../../assets/img/home/sausage.png'
import corn from '../../assets/img/home/corn.png'
import three_leaves from '../../assets/img/home/three_leaves.png'
import super_pizza from '../../assets/img/home/super_pizza.png'
import two_tomatoes from '../../assets/img/home/two_tomatoes.png'
import blurred_tomato from '../../assets/img/home/blurred_tomato.png'
import burger_2 from '../../assets/img/home/burger_2.png'
import discount_30 from '../../assets/img/home/discount_30.png'


const Hero = () => {
  return (
    <>
      <Carousel controls={false}>

      <Carousel.Item interval={3000}>
        <ExampleCarouselImage background={background_1} />
        <Carousel.Caption>
        <div className='container'>
        <div className="row slide-one d-flex align-items-center justify-content-center">
        <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 text d-flex flex-column align-items-center justify-content-center">
          <img src={blurred_leaf} className='blurred_leaf' alt="" />
          <img src={pickle_leaves} className='pickle_leaves' alt="" />
          <h1>GRILLED <br /> <span>BEEF BURGER</span></h1>
          <p className='pt-3 pb-4'>Secret family recipes are the stuff of legends and Stack <br /> burger blend is no exception.</p>
          <img src={mushroom} className='mushroom_1' alt="" />
          <img src={mushroom} className='mushroom_2' alt="" />
          <a href="#">
              <div className="order rounded-3 text-white">
                <span>ORDER NOW</span>
                <i className="fa-solid fa-arrow-right ms-2"></i>
              </div>
            </a>
        </div>
        <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <img src={discount_50} className='discount_50' alt="" />
          <img src={burger_1} className='burger-1' alt="" />
        </div>
      </div>
        </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <ExampleCarouselImage background={background_2} />
        <Carousel.Caption>
        <div className='container'>
        <div className="row slide-two d-flex align-items-center justify-content-center">
        <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <img src={steak} className='steak' alt="" />
          <img src={sausage} className='sausage' alt="" />
          <img src={corn} className='corn' alt="" />
          <img src={three_leaves} className='three_leaves' alt="" />
        </div>
        <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 text d-flex flex-column justify-content-between align-items-start">
          <img src={pickle_leaves} className='pickle_leaves' alt="" />
          <h1 className='text-start'>GRILLED <br /> <span>STEAK PASTA</span></h1>
          <p className='sale text-start me-4'>SALE 50% START 22H:00</p>
          <p className='pt-3 pb-4 text-start'>Extra-virgin olive oil, garlic, mozarella cheese, <br /> onions, mushrooms, green olives, black olives, <br /> fresh tomatoes.</p>
          <img src={maple_leaf} className='maple_leaf' alt="" />
          <div className='mushrooms'>
          <img src={mushroom} className='mushroom_1' alt="" />
          <img src={mushroom} className='mushroom_2' alt="" />
          </div>
          <a href="#">
              <div className="order rounded-3 text-white">
                <span>ORDER NOW</span>
                <i className="fa-solid fa-arrow-right ms-2"></i>
              </div>
            </a>
        </div>
      </div>
        </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <ExampleCarouselImage background={background_3} />
        <Carousel.Caption>
          <div className='container'>
        <div className="row slide-three d-flex align-items-center justify-content-center">
        <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 text d-flex flex-column align-items-center justify-content-center">
          <img src={blurred_leaf} className='blurred_leaf' alt="" />
          <p className='sale'>SUPER DELICIONG CHEESE</p>
          <h1>CHEESE <br /> <span>PIZZA LIMITED</span></h1>
          <p className='pt-3 pb-4 extra'>Extra-virgin olive oil, garlic, mozarella cheese, onions, mushrooms, <br /> green olives, black olives, fresh tomatoes.</p>
          <img src={mushroom} className='mushroom_1' alt="" />
          <a href="#">
              <div className="order rounded-3 text-white">
                <span>ORDER NOW</span>
                <i className="fa-solid fa-arrow-right ms-2"></i>
              </div>
            </a>
        </div>
        <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <img src={two_tomatoes} className='two_tomatoes' alt="" />
          <img src={discount_50} className='discount_50' alt="" />
          <img src={super_pizza} className='super_pizza' alt="" />
          <img src={blurred_tomato} className='blurred_tomato' alt="" />
        </div>
      </div>
        </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <ExampleCarouselImage background={background_4} />
        <Carousel.Caption>
        <div className='container'>
        <div className="row slide-four d-flex align-items-center justify-content-center">
        <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 text d-flex flex-column justify-content-between align-items-start">
          <p className="sale">FAST FOOD BURGERS</p>
          <h1 className='text-start'>BEST <br /> BURGERS</h1>
          <p className='pt-3 pb-4 text-start secret'>Secret family recipes are the stuff of legends and Stack <br /> burger blend is no exception.</p>
          <img src={blurred_tomato} className='blurred_tomato' alt="" />
          <div className='mushrooms'>
          <img src={mushroom} className='mushroom_1' alt="" />
          <img src={mushroom} className='mushroom_2' alt="" />
          </div>
          <a href="#">
              <div className="order rounded-3 text-white">
                <span>ORDER NOW</span>
                <i className="fa-solid fa-arrow-right ms-2"></i>
              </div>
            </a>
        </div>
        <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <img src={burger_2} className='burger_2' alt="" />
          <img src={discount_30} className='discount_30' alt="" />
        </div>
      </div>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
    </>
  )
}

export default Hero