import React, { useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SingleCard from "./SingleCard";
import { ProductContext } from "../../context/ProductContext";
import best_fade_burger from '../../assets/img/home/best_fade_burger.png'
import best_fade_pizza from '../../assets/img/home/best_fade_pizza.png'

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const { product, shop} = useContext(ProductContext);

  return (
    <>
      <div className="best-selling">

      <div className="marquee-container">
        <a href="#" className='marquee'><marquee behavior="scroll" direction="left" loop="-1">POPULAR DISHES • POPULAR DISHES • POPULAR DISHES • POPULAR DISHES • POPULAR DISHES • POPULAR DISHES • POPULAR DISHES • POPULAR DISHES • POPULAR DISHES • POPULAR DISHES • POPULAR DISHES • POPULAR DISHES • POPULAR DISHES</marquee></a>
      </div>

      <img src={best_fade_burger} className="best_fade_burger" alt="" />

        <h1 className="text-center my-5">BEST SELLING DISHES</h1>

      <img src={best_fade_pizza} className="best_fade_pizza" alt="" />

        <Slider {...settings} className="pt-5">

          {product.map((i, index) => (
            <SingleCard
              id={i.id}
              image={i.image}
              title={i.title}
              price={i.price}
              key={index}
              alldata={i}
            />
          ))}

        </Slider>
      </div>
    </>

  );
}



