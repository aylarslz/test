import React from 'react'
import about_fries from '../../assets/img/about/about_fries.png'
import about_fade_pizza from '../../assets/img/about/about_fade_pizza.png'

const AboutFood = () => {
  return (
    <>
    <div className="about-food d-flex flex-column justify-content-center align-items-center text-center">
        <p>ABOUT OUR FOOD</p>
        <h1 className='mt-3 mb-4'>BEST BURGER IDEAS & <br /> TRADITIONS FROM THE <br /> WHOLE WORLD</h1>
        <p className='mouth'>The mouth-watering aroma of sizzling burgers now fills the streets of Birmingham <br /> thanks to the passionate pursuit of three brothers, the British founders of Faz food. <br /> After over 50 years of experience in the culinary industry between them, they set <br /> out on a journey to discover the ultimate burger.</p>
        <img className='about-fries' src={about_fries} alt="" />
        <img className='about-fade-pizza' src={about_fade_pizza} alt="" />
        <div className='btn mt-5'>
        <span>ABOUT OUR FOOD</span>
        </div>
    </div>
    </>
  )
}

export default AboutFood