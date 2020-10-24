import React from 'react';
import { useStateValue } from './StateProvider';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { basketTotal } from './reducer';
import StripeCheckoutButton from './StripeCheckoutButton';

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  const totalPrice = basketTotal(basket);
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):<strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={totalPrice}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'₹'}
      />
      <StripeCheckoutButton  price={totalPrice} />
      <div className="test-warning">
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 12/20 - CVV: 123
      </div>
    </div>
  );
}

export default Subtotal;
