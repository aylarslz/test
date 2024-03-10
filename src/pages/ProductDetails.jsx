import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom"
import { ProductContext } from "../context/ProductContext";
import shop_bg from '../assets/img/shop/shop_bg.jpg'
import { useCart } from "react-use-cart";
import { Button, Table } from "react-bootstrap";
import Join from '../components/home/Join'
import slugify from "react-slugify";

const ProductDetails = ({category}) => {
    const { slug } = useParams();
    const { product, shop } = useContext(ProductContext);
    const filterProduct = shop.filter(p => slugify(p.title) === slug);
    const { addItem, items, updateItemQuantity } = useCart();
    return (
        <>
            {filterProduct.length === 0 ? (
                <div className="d-flex justify-content-center">
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FkYqVAj5QNOXug%2Fgiphy.gif&f=1&nofb=1&ipt=e2503bf9d9e8ebfd6c30be7aea5511f025edcee72e987ddd6b8963d6a7ad88a0&ipo=images" alt="err" />
                </div>
            ) : (
                <div className="product-details">
                    <div className="bg-image d-flex flex-column justify-content-center align-items-center" style={{ backgroundImage: `url(${shop_bg})` }}>
                        <p className='mt-2'><Link to="/">Home Page</Link>
                            <i className="fa-solid fa-chevron-right mx-2"></i>
                            <Link to="/shop">Shop</Link>
                            <i className="fa-solid fa-chevron-right mx-2"></i>
                            <Link to="/shop">Pizza</Link>
                            <i className="fa-solid fa-chevron-right mx-2"></i>
                            <span>Sausage, Egg & Cheese Croissan'wich</span>
                        </p>
                    </div>

    <div className="image-details">
        <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6 image">
                    <img src={filterProduct[0].image} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" loading="lazy" />
                </div>

                <div className="col-lg-6 details">
                    <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">{filterProduct[0].title} </h1>
                    <div className="stars">
                        <i className="fa-solid fa-star me-1"></i>
                        <i className="fa-solid fa-star me-1"></i>
                        <i className="fa-solid fa-star me-1"></i>
                        <i className="fa-solid fa-star me-1"></i>
                        <i className="fa-solid fa-star me-2"></i>
                        <a href="#" className="customer-reviews">(5 customer reviews)</a>
                    </div>
                    <hr className="my-4" />
                    {/* <p className="lead">{filterProduct[0].description}</p> */}
                    <p>Lorem ipsum dolor sit amet qui adipisicing elit consectetur.</p>
                    <p className="price">{filterProduct[0].price}$</p>
                    <ul>
                        <li>Free global shipping on all orders1</li>
                        <li>30 days easy returns if you change your mind</li>
                        <li>Order before noon for same day dispatch</li>
                    </ul>
                    <hr />
                    <div className="cart d-flex align-items-center">
                        <span className="fw-bold">QUANTITY:</span>

                    <Table className="border-0 mx-2">
                    {items.map((i) => (
                    <tr key={i.id}>
                        <td className="table d-flex align-items-center justify-content-center"> 
                        <Button className="decrement" onClick={() => updateItemQuantity(i.id, Math.max(i.quantity - 1, 1))}>–</Button>
                        <span className='mx-3'>{i.quantity}</span>
                        <Button className="increment" onClick={() => updateItemQuantity(i.id, i.quantity + 1)}>+</Button>
                        </td>
                    </tr>
                    ))}
                    </Table>

                    <div className='basket btn' onClick={() => addItem(alldata)}><i className="fa-solid fa-basket-shopping rounded-3 me-2"></i>
                    <span>ADD TO CART</span>
                    </div>
                    <Button className="wishlist ms-2">
                        <i className="fa-regular fa-heart"></i>
                    </Button>
                    </div>

                    <div className="info">
                        <p><span>SKU:</span> FF0018</p>
                        <p><span>CATEGORY:</span> {category}</p>
                        <p><span>SHARE:</span>
                        <a href="#"><i className="fa-brands fa-facebook-f ms-2"></i></a>
                        <a href="#"><i className="fa-brands fa-twitter ms-3"></i></a>
                        <a href="#"><i className="fa-brands fa-linkedin ms-3"></i></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
                </div>
            )}

            <Join />
        </>
    )
}

export default ProductDetails;
