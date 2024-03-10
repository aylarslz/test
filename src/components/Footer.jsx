import React from 'react'
import logo from '../assets/img/logo.svg'

const Footer = () => {

  return (
    <>
    <div className="footer">
      <div className="container-fluid ms-3 pt-5">
        <footer className="row row-cols-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-5 py-5">
          <div className="col logo mb-3">
            <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
             <img src={logo} alt="" />
            </a>
            <p className="mt-4 ">2972 Westheimer Rd. Santa Ana, <br /> Illinois 85486</p>
            <p>support@example.com</p>
            <p className='phone'>+(084) 456-0789</p>
          </div>

          <div className="col products mb-3">
            <h5>PRODUCTS</h5>
            <ul className="nav flex-column mt-4">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-black">BURGERS</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-black">KING DELIGHT PRODUCTS</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-black">CRISPY FLAVORS</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-black">BREAKFAST PRODUCTS</a></li>
            </ul>
          </div>

          <div className="col kids mb-3">
            <ul className="nav flex-column mt-5">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-black">KIDS MENUS</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-black">DESSERTS</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-black">BEVERAGES</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-black">SAUCES</a></li>
            </ul>
          </div>

          <div className="col mb-3 border-end">
            <h5>QUICK LINKS</h5>
            <ul className="nav flex-column mt-4">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-black">HOME</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-black">MENU</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-black">ABOUT US</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-black">CONTACTS</a></li>
            </ul>
          </div>

          <div className="col mb-3">
            <h5 className='mb-4'>OPENING HOURS</h5>
            <p className='days'>Monday - Friday: <span>8am - 4pm</span></p>
            <p className='days weekend'>Saturday: <span>8am - 12am</span></p>
            <div className="socials d-flex">
              <a href="#"><div className='icon me-1'><i className="fa-brands fa-facebook-f"></i></div></a>
              <a href="#"><div className='icon me-1'><i className="fa-brands fa-twitter"></i></div></a>
              <a href="#"><div className='icon me-1'><i className="fa-brands fa-instagram"></i></div></a>
              <a href="#"><div className='icon'><i className="fa-brands fa-pinterest"></i></div></a>
            </div>
          </div>

        </footer>

        <div className="text-center py-4 border-top">
          <p>Copyright © {new Date().getFullYear()} <a href="#">Fazfood</a>. All rights reserved</p>
        </div>

      </div>
    </div>
    </>
  )
}

export default Footer