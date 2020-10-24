import React from 'react';
import { useStateValue } from './StateProvider';
import './Product.css';

function Product({ id, title, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      payload: {
        id,
        title,
        image,
        price,
        rating,
        
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} alt="product image" />
      <button onClick={addToBasket}>Add to Cart</button>
    </div>
  );
}

export default Product;
