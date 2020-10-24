import React from 'react';
import { useStateValue } from './StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct'
import CurrencyFormat from 'react-currency-format'
import Subtotal from './Subtotal'

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__productLeft">

      <img
        className="checkout__ad"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Consumables/Jupiter20/P1Event/GW/DesktopHero_Template_1500x600._CB419427649_.jpg"
        alt="checkout ad"
      />
      {basket?.length === 0 ? (
        <div>
          <h2>Your Shopping Basket is empty</h2>
          <p>
            You have no items in your basket. To buy one click on "Add to basket" next
            to the item
          </p>
        </div>
      ) : (
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {basket?.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      )}
      </div>
      {basket?.length>0&&(
          <div className="checkout__productRight">
              <Subtotal/>
          </div>
      )}
    </div>
  );
}

export default Checkout;
