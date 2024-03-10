import React from 'react'
import hotdog from '../../assets/img/home/hotdog.png'
import chicken from '../../assets/img/home/chicken.png'
import biryani from '../../assets/img/home/biryani.png'
import fastfood from '../../assets/img/home/fastfood.png'

const Hotdog = () => {
  return (
    <>
    <div className="hotdog-container d-flex">
        <div className="hotdog card d-flex flex-column align-items-center">
            <img src={hotdog} className='mb-5' alt="" />
            <div className="title text-center">
            <h1>Hot Dog</h1>
            <h5>Fresh & Tasty</h5>
            </div>
            <div className="hidden text-center">
                <h5 className='fw-bold'>SPECIALS</h5>
                <p>3 Products</p>
            </div>
        </div>
        <div className="chicken card d-flex flex-column align-items-center">
            <img src={chicken} className='mb-5' alt="" />
            <div className="title text-center">
            <h1>Chicken</h1>
            <h5>Your Slogan Here</h5>
            </div>
            <div className="hidden text-center">
                <h5 className='fw-bold'>BURRITO</h5>
                <p>2 Products</p>
            </div>
        </div>
        <div className="biryani card d-flex flex-column align-items-center">
            <img src={biryani} className='mb-5' alt="" />
            <div className="title text-center">
            <h1>Biryani</h1>
            <h5>Delicious</h5>
            </div>
            <div className="hidden text-center">
                <h5 className='fw-bold'>FRIES</h5>
                <p>5 Products</p>
            </div>
        </div>
        <div className="fastfood card d-flex flex-column align-items-center">
            <img src={fastfood} className='mb-5' alt="" />
            <div className="title text-center">
            <h1>Fast Food</h1>
            <h5>Restaurant</h5>
            </div>
            <div className="hidden text-center">
                <h5 className='fw-bold'>BURGERS</h5>
                <p>8 Products</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Hotdog