import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51HTJZJKQ1x4GDojIMHF6JMj6i8mu8DExRDavRddWZyUKFNdcr5MIRZsp9pBrhB9XO2JhAunWlaQLiC0Zkpt1ZKRx00jEcG9K8D';

  /* const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token: token,
      },
    })
      .then((response) => {
        alert('Successful payment');
      })
      .catch((error) => {
        console.log('Payment Error: ', error);
        alert(
          'There was an issue with your payment! Please make sure you use the provided credit card.'
        );
      });
  }; */

  return (
    <StripeCheckout
      label="Pay Now"
      name="Amazon India"
      billingAddress
      shippingAddress
      image="https://lh3.googleusercontent.com/mIeBLLu8xOi-1bPbtRO_HYb5d1VchJDLDH4hebMO7R-GNOfueGDtHCKgPWFjwyCAORQ=s180"
      description={`Your total is ₹${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      stripeKey={publishableKey}
      currency="INR"
    >
      <button className="stripeButton">Proceed to Checkout</button>
    </StripeCheckout>
  );
};

export default StripeCheckoutButton;
