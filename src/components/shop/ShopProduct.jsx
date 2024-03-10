import { Button, Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import slugify from 'react-slugify';

const ShopProduct = ({id,title,price,image,alldata}) => {
  const { addItem } = useCart();

  return (
    <Col >
      <Card className='shop-card d-flex flex-column '>
        <Card.Img variant="top" src={image} />
        <Card.Body className='card-body'>
            <div className='d-flex justify-content-between'>
          <Link to={`/shop/${slugify(title)}`}><Card.Title className='card-title'>{title.slice(0,15)}...</Card.Title></Link>
          <a href="#"><i className="fa-regular fa-heart"></i></a>
          </div>
          <div className="stars mb-3">
            <i className='fa-solid fa-star me-1'></i>
            <i className='fa-solid fa-star me-1'></i>
            <i className='fa-solid fa-star me-1'></i>
            <i className='fa-solid fa-star me-1'></i>
            <i className='fa-solid fa-star me-1'></i>
            <span>(5)</span>
          </div>
          <p>Lorem ipsum dolor sit amet qui adipisicing elit consectetur.</p>
          <div className='d-flex justify-content-between align-items-center'>
            <span className='price'>{price}$</span>
          <Button className='btn' onClick={() => addItem(alldata)} variant="info ms-3"><i className="fa-solid fa-basket-shopping p-3 rounded-3 text-white"></i></Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default ShopProduct