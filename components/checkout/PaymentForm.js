import React, { useContext } from 'react';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import { CartContext } from '../../context/CartContext';
import StripePaymentForm from './StripePaymentForm';

const stripePromise = loadStripe('YOUR_STRIPE_PUBLIC_KEY');

const PaymentForm = ({ handlePaymentSubmit }) => {
  const { cartTotal } = useContext(CartContext);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="font-semibold text-lg mb-4">Payment Information</h2>
      <Elements stripe={stripePromise}>
        <StripePaymentForm handlePaymentSubmit={handlePaymentSubmit} amount={cartTotal} />
      </Elements>
    </div>
  );
};

export default PaymentForm;
