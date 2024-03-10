import React, { useContext, useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, useNavigate } from 'react-router-dom';
import { CloseButton } from 'react-bootstrap';
import logo from '../assets/img/logo.svg';
import { ProductContext } from '../context/ProductContext';
import { useCart } from 'react-use-cart';
import slugify from 'react-slugify';

const Header = () => {

  const { product, shop } = useContext(ProductContext);
  
  const [show, setShow] = useState(false);
  const menuClose = () => setShow(false);
  const menuShow = () => setShow(true);
  
  const [searchshow, setSearchshow] = useState(false);
  const searchClose = () => setSearchshow(false);
  const searchShow = () => setSearchshow(true);
  

  const [query, setQuery] = useState("");
  const { totalItems } = useCart();
  const navigate = useNavigate();

  return (
    <>
      <div className="header py-4">
        <div className="container-fluid d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <a href="#" onClick={menuShow}><i className="fa-solid fa-bars mx-3"></i></a>
          <div className="support d-flex align-items-center">
            <i className="fa-solid fa-phone-volume ms-4 me-2"></i>
            <div className='d-flex flex-column'>
              <span>24/7 SUPPORT CENTER</span>
              <span className='phone'>+1 718-904-4450</span>
            </div>
          </div>
          <Offcanvas show={show} onHide={menuClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                <a href="#"><img src={logo} className='offcanvas-logo' alt="" /></a>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div className="mainMenu d-flex flex-column mt-3">
                <p className='main me-3 mb-4'>Main Menu</p>

                <Link to="/" className='toggle mb-4' onClick={menuClose}><span>HOME</span></Link>
                <Link to="/menu" className='toggle mb-4' onClick={menuClose}><span>MENU</span></Link>
                <Link to="/about" className='toggle mb-4' onClick={menuClose}><span>ABOUT US</span></Link>
                <Link to="/shop" className='toggle mb-4' onClick={menuClose}><span>SHOP</span></Link>
                <Link to="/blog" className='toggle mb-4' onClick={menuClose}><span>BLOG</span></Link>
                <Link to="/contact" className='toggle mb-4' onClick={menuClose}><span>CONTACT</span></Link>

              </div>

            </Offcanvas.Body>
          </Offcanvas>
        </div>

          <div className="logo">
            <a href="/"><img src={logo} alt="" /></a>
          </div>

          <div className="search-order d-flex align-items-center">
            <a href="#">
              <div className="search me-4" onClick={searchShow}>
                <i className="fa-solid fa-magnifying-glass me-2 fs-5"></i>
                <span>Search</span>
              </div>
            </a>

            {localStorage.getItem('login') === 'true' ? <div className='d-flex justify-content-center align-items-center logout'>
            <p className='my-3 greeting'>Welcome, {localStorage.getItem("fullname")}!</p>
            <a href="#"><div className="order p-3 rounded-3 text-white mx-3" onClick={()=>{localStorage.setItem("login",'false');
          window.location.assign('/login');
          }}>Log out</div></a>
            </div> : 
            <a href="#">
              <div className="order p-3 rounded-3 text-white me-3">
              <i className="fa-solid fa-user"></i>
                <Link to="/login"><span className='text-white ms-2'>LOG IN</span></Link>
              </div>
            </a>
            }

            <Link to="/shopping-cart" className='position-relative shopping' onClick={()=>{{localStorage.getItem("login") === 'true' ? navigate("/shopping-cart") : navigate("/login")}}}><i className="fa-solid fa-basket-shopping p-3 rounded-3 text-white"></i> 
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {localStorage.getItem("login") === 'true' ? totalItems: "0"}  
              </span>
            </Link>

            <a href="#"><i className="fa-solid fa-spinner mx-4 fs-5"></i></a>
          </div>
           
        </div>
      </div>


      {searchshow && (
        <div className="search-container">
          <input type="text" placeholder="Search ..." value={query} onChange={e => setQuery(e.target.value)} />
          <CloseButton className="close" onClick={searchClose} />
        </div>
      )}

      {searchshow && (  
        <div className="search-results">
          {query.length === 0 ? "" : shop.filter(p=>p.title.toLowerCase().includes(query)).map(i=>(
              <Link to={`/shop/${slugify(i.title)}`} key={i.id}>
                <ul>
                  <li onClick={()=>{setQuery("")}}>
                    <img src={i.image} width={70} alt="" />
                    {i.title}
                  </li>
                </ul>
              </Link>
            ))}
        </div>
      )}
      
    </>
  );
};

export default Header;


