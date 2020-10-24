import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';
import { getItemQuantity } from './reducer';

function CheckoutProduct({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const onRemoveBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id,
    });
  };
  return (
    <div className="checkout__product">
      <img
        className="checkout__productImage"
        src={image}
        alt="checkout image"
      />

      <div className="checkout__productInfo">
        <p className="checkout__productTitle">{title}</p>

        <p className="checkout__productPrice">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="checkout__productRating">
          {Array(rating)
            .fill()
            .map((_) => (
              <span role="img">⭐</span>
            ))}
        </div>
        <div className="checkout__productQuantity">
          <spam>{getItemQuantity(basket, id)}</spam>
        </div>
        <button onClick={onRemoveBasket}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
