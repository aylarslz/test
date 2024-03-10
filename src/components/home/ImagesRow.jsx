import React from 'react'
import img_row_1 from '../../assets/img/home/img_row_1.jpeg'
import img_row_2 from '../../assets/img/home/img_row_2.jpeg'
import img_row_3 from '../../assets/img/home/img_row_3.jpeg'
import img_row_4 from '../../assets/img/home/img_row_4.jpeg'
import img_row_5 from '../../assets/img/home/img_row_5.jpeg'

const ImagesRow = () => {
  return (
    <>
    <div className="images d-flex">
        <a href="#"><img src={img_row_1} alt="" /></a>
        <a href="#"><img src={img_row_2} alt="" /></a>
        <a href="#"><img src={img_row_3} alt="" /></a>
        <a href="#"><img src={img_row_4} alt="" /></a>
        <a href="#"><img src={img_row_5} alt="" /></a>
    </div>
    </>
  )
}

export default ImagesRow