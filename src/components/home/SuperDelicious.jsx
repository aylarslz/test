import React from 'react'
import super_bg from '../../assets/img/home/super_bg.jpeg'
import today_bg from '../../assets/img/home/today_bg.jpeg'
import pizza_bg from '../../assets/img/home/pizza_bg.jpeg'
import super_food from '../../assets/img/home/super_food.png'
import today_taco from '../../assets/img/home/today_taco.png'
import super_pizza from '../../assets/img/home/super_pizza.png'

const SuperDelicious = () => {
  return (
    <>
    <div className="superDelicious">
        <div className="container-fluid">
            <div className="row mx-1">
                <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <div className="super" style={{ backgroundImage: `url(${super_bg})` }}>
                        <div className="text">
                        <h1>SUPER <br />DELICIOUS</h1>
                        <p className='mt-4'>CALL US NOW:</p>
                        <p className='phone'>1-800-555-333</p>
                        </div>
                        <img src={super_food} className='super_food' alt="" />
                    </div>
                </div>
                <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <div className="today mb-4 d-flex align-items-center justify-content-center" style={{ backgroundImage: `url(${today_bg})` }}>
                        <h1>TODAY <br />SPECIAL <br />BURRITO <br />FOOD</h1>
                        <img src={today_taco} className='today_taco' alt="" />
                    </div>
                    <div className="pizza" style={{ backgroundImage: `url(${pizza_bg})` }}>
                        <img src={super_pizza} className='super_pizza' alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default SuperDelicious