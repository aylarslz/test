import React, { useContext } from 'react'
import shop_bg from '../assets/img/shop/shop_bg.jpg'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { ProductContext } from '../context/ProductContext';
import ShopProduct from '../components/shop/ShopProduct';
import Join from '../components/home/Join'
import Accordion from 'react-bootstrap/Accordion'
import { Button } from 'react-bootstrap';
import poster from '../assets/img/shop/poster.jpg'
import Offcanvas from 'react-bootstrap/Offcanvas';

const Shop = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    setDropdownOpen(true);
  }, []);

  const { product, shop } = useContext(ProductContext);
  const [category, setCategory] = useState([]);
  const filterCategory = (cat) => {
    const catData = shop.filter(p => p.category === cat);
    setCategory(catData);
  }

  const [sliderValue1, setSliderValue1] = useState(0);
  const [sliderValue2, setSliderValue2] = useState(40);

  const handleSlider1Change = (e) => {
    setSliderValue1(e.target.value);
  };

  const handleSlider2Change = (e) => {
    setSliderValue2(e.target.value);
  };


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="shop">
        <div className="image d-flex flex-column justify-content-center align-items-center" style={{ backgroundImage: `url(${shop_bg})` }}>
          <h1>SHOP</h1>
          <p className='mt-2'><Link to="/">Home Page</Link>
            <i className="fa-solid fa-chevron-right mx-2"></i>
            Shop</p>
        </div>

        <div className="row">
          <div className="col-12 col-xs-12 col-sm-12 col-md-3 col-lg-3 hide-992">

            <Accordion className='accordion fw-bold' defaultActiveKey={['0']} alwaysOpen>
              <Accordion.Item className='accordion-item' eventKey="0">
                <Accordion.Header className='accordion-header'>
                <span className='accordion-header-content fw-bold fs-5'>CATEGORIES</span>
                </Accordion.Header>
                <Accordion.Body>
                  <ul className='mt-2'>
                    <li className='mb-3' onClick={() => { filterCategory("burgers") }}><a href="#" onClick={(e) => { e.preventDefault(); handleButtonClick(); }}>
                      <i className="me-3 fa-solid fa-burger"></i>
                      <span>BURGERS</span>
                    </a></li>
                    <li className='mb-3' onClick={() => { filterCategory("fries") }}><a href="#" onClick={(e) => { e.preventDefault(); handleButtonClick(); }}>
                      <i className="me-3 fa-solid fa-plate-wheat"></i>
                      <span>FRIES</span>
                    </a></li>
                    <li className='mb-3' onClick={() => { filterCategory("pizza") }}><a href="#" onClick={(e) => { e.preventDefault(); handleButtonClick(); }}>
                      <i className="me-3 fa-solid fa-pizza-slice"></i>
                      <span>PIZZA</span>
                    </a></li>
                    <li className='mb-3' onClick={() => { filterCategory("salads") }}><a href="#" onClick={(e) => { e.preventDefault(); handleButtonClick(); }}>
                      <i className="me-3 fa-solid fa-bowl-rice"></i>
                      <span>SALADS</span>
                    </a></li>
                    <li className='mb-3' onClick={() => { filterCategory("sandwich") }}><a href="#" onClick={(e) => { e.preventDefault(); handleButtonClick(); }}>
                      <i className="me-3 fa-solid fa-hotdog"></i>
                      <span>SANDWICH</span>
                    </a></li>
                    <li className='mb-3' onClick={() => { filterCategory("specials") }}><a href="#" onClick={(e) => { e.preventDefault(); handleButtonClick(); }}>
                      <i className="me-3 fa-solid fa-cake-candles"></i>
                      <span>SPECIALS</span>
                    </a></li>
                    <li className='mb-3' onClick={() => { filterCategory("taco") }}><a href="#" onClick={(e) => { e.preventDefault(); handleButtonClick(); }}>
                      <i className="me-3 fa-solid fa-cloud-meatball"></i>
                      <span>TACO</span>
                    </a></li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item className='accordion-item' eventKey="0">
                <Accordion.Header className='accordion-header'>
                <span className='accordion-header-content fw-bold fs-5'>FILTER BY PRICE</span>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="range-slider-container mt-3 mb-5">
                    <input
                      type="range"
                      min="0"
                      max="40"
                      value={sliderValue1}
                      onChange={handleSlider1Change}
                      className="slider slider1"
                    />
                    <input
                      type="range"
                      min="0"
                      max="40"
                      value={sliderValue2}
                      onChange={handleSlider2Change}
                      className="slider slider2"
                    />
                  </div>
                    <p>PRICE: {sliderValue1}$ - {sliderValue2}$</p>
                    <Button className="filter border-0">FILTER</Button>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <div className="poster ms-4" style={{backgroundImage:`url(${poster})`}}>
              <h2><span>TASTY</span> <br /> BURGER</h2>
              <p>NEW PHENOMENON <br /> BURGER TASTE</p>
            </div>

          </div>

          <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-9">
            <div className="row g-4 mt-5 pt-5 mx-5">

              <div className="show-992 col-12 col-xs-12 col-sm-12 col-md-12 col-lg-9">
              <div onClick={handleShow}>
              <i class="fa-solid fa-sliders me-2"></i>
              <span className='fw-bold'>FILTER</span> 
              </div>

              <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                </Offcanvas.Header>
                <Offcanvas.Body>
                <Accordion className='accordion fw-bold' defaultActiveKey={['0']} alwaysOpen>
              <Accordion.Item className='accordion-item' eventKey="0">
                <Accordion.Header className='accordion-header'>
                <span className='accordion-header-content fw-bold fs-5'>CATEGORIES</span>
                </Accordion.Header>
                <Accordion.Body>
                  <ul className='mt-2'>
                    <li className='mb-3' onClick={() => { filterCategory("burgers") }}><a href="#" onClick={(e) => { e.preventDefault(); handleButtonClick(); }}>
                      <i className="me-3 fa-solid fa-burger"></i>
                      <span>BURGERS</span>
                    </a></li>
                    <li className='mb-3' onClick={() => { filterCategory("fries") }}><a href="#" onClick={(e) => { e.preventDefault(); handleButtonClick(); }}>
                      <i className="me-3 fa-solid fa-plate-wheat"></i>
                      <span>FRIES</span>
                    </a></li>
                    <li className='mb-3' onClick={() => { filterCategory("pizza") }}><a href="#" onClick={(e) => { e.preventDefault(); handleButtonClick(); }}>
                      <i className="me-3 fa-solid fa-pizza-slice"></i>
                      <span>PIZZA</span>
                    </a></li>
                    <li className='mb-3' onClick={() => { filterCategory("salads") }}><a href="#" onClick={(e) => { e.preventDefault(); handleButtonClick(); }}>
                      <i className="me-3 fa-solid fa-bowl-rice"></i>
                      <span>SALADS</span>
                    </a></li>
                    <li className='mb-3' onClick={() => { filterCategory("sandwich") }}><a href="#" onClick={(e) => { e.preventDefault(); handleButtonClick(); }}>
                      <i className="me-3 fa-solid fa-hotdog"></i>
                      <span>SANDWICH</span>
                    </a></li>
                    <li className='mb-3' onClick={() => { filterCategory("specials") }}><a href="#" onClick={(e) => { e.preventDefault(); handleButtonClick(); }}>
                      <i className="me-3 fa-solid fa-cake-candles"></i>
                      <span>SPECIALS</span>
                    </a></li>
                    <li className='mb-3' onClick={() => { filterCategory("taco") }}><a href="#" onClick={(e) => { e.preventDefault(); handleButtonClick(); }}>
                      <i className="me-3 fa-solid fa-cloud-meatball"></i>
                      <span>TACO</span>
                    </a></li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item className='accordion-item' eventKey="0">
                <Accordion.Header className='accordion-header'>
                <span className='accordion-header-content fw-bold fs-5'>FILTER BY PRICE</span>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="range-slider-container mt-3 mb-5">
                    <input
                      type="range"
                      min="0"
                      max="40"
                      value={sliderValue1}
                      onChange={handleSlider1Change}
                      className="slider slider1"
                    />
                    <input
                      type="range"
                      min="0"
                      max="40"
                      value={sliderValue2}
                      onChange={handleSlider2Change}
                      className="slider slider2"
                    />
                  </div>
                  <p>PRICE: {sliderValue1}$ - {sliderValue2}$</p>
                  <Button className="filter border-0">FILTER</Button>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <div className="poster ms-4" style={{ backgroundImage: `url(${poster})` }}>
              <h2><span>TASTY</span> <br /> BURGER</h2>
              <p>NEW PHENOMENON <br /> BURGER TASTE</p>
            </div>
                </Offcanvas.Body>
              </Offcanvas>
              </div>

              {category.length === 0 ? shop.map(i => (
                <div key={i.id} className="col-12 col-xs-12 col-sm-6 col-md-4 col-lg-4">
                  <ShopProduct
                    id={i.id}
                    image={i.image}
                    title={i.title}
                    price={i.price}
                    category={i.category}
                    alldata={i}
                  />
                </div>
              )) : category.map(i => (
                <div key={i.id} className="col-12 col-xs-12 col-sm-6 col-md-4 col-lg-4">
                  <ShopProduct
                    id={i.id}
                    image={i.image}
                    title={i.title}
                    price={i.price}
                    category={i.category}
                    alldata={i}
                  />
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
      <Join />
    </>
  )
}

export default Shop