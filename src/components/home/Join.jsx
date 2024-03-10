import React from 'react'
import join_burger from '../../assets/img/home/join_burger.png'
import join_pizza from '../../assets/img/home/join_pizza.png'
import join_fade_burger from '../../assets/img/home/join_fade_burger.png'
import join_fade_pizza from '../../assets/img/home/join_fade_pizza.png'
import join_fade_leaf from '../../assets/img/home/join_fade_leaf.png'

const Join = () => {
  return (
    <>
    <div className="marquee-container pt-5 border-top">
        <a href="#" className='marquee'><marquee behavior="" direction="left">SUBSCRIBE • FOLLOW • NEWSLETTER • SUBSCRIBE • FOLLOW • NEWSLETTER</marquee></a>
    </div>
    <div className="join d-flex flex-column justify-content-center align-items-center">
        <h1>JOIN FOR HOT OFFERS</h1>
        <p className='text-center mt-3 mb-5'>If we go all out… We do it well! Subscribe to the newsletter <br /> to get the most exclusive promos.</p>

        <img src={join_fade_burger} className='join_fade_burger' alt="" />
        <img src={join_burger} className='join_burger' alt="" />
        <img src={join_fade_leaf} className='join_fade_leaf_1' alt="" />

        <div className='d-flex'>
        <input type="email" className='email me-3' placeholder='Email address' />
        <a href="#"><div className="order p-3 px-4 rounded-3 text-white me-3">
        <span>SUBSCRIBE</span>
        <i className="fa-solid fa-arrow-right ms-2"></i>
        </div>
        </a>
        </div>
        <div className='d-flex checkbox mt-3'>
        <input type="checkbox" name="" id="" />
        <p className='mt-3 ms-2'>By signing up you agree to our <span>Privacy Policy</span></p>
        </div>

        <img src={join_fade_leaf} className='join_fade_leaf_2' alt="" />
        <img src={join_pizza} className='join_pizza' alt="" />
        <img src={join_fade_pizza} className='join_fade_pizza' alt="" />
        
    </div>
    </>
  )
}

export default Join