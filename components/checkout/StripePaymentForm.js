import React, {
  useContext,
  useState,
} from 'react';

import { useRouter } from 'next/router';

import {
  CardElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';

import { CartContext } from '../../context/CartContext';
import { UserContext } from '../../context/UserContext';
import { createOrder } from '../../lib/orders';

const StripePaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const { user } = useContext(UserContext);
  const { cart, clearCart } = useContext(CartContext);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setProcessing(true);

    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setError(error.message);
      setProcessing(false);
    } else {
      setError(null);

      try {
        // Process the payment and create an order in the database
        const order = await createOrder(user, cart, paymentMethod);

        // Clear the cart and navigate to the order details page
        clearCart();
        router.push(`/account/orders/${order.id}`);
      } catch (err) {
        setError(err.message);
        setProcessing(false);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="card-element" className="block text-gray-700">
          Card details
        </label>
        <div className="mt-2">
          <CardElement id="card-element" className="w-full p-2 border border-gray-300 rounded" />
        </div>
      </div>

      {error && (
        <div className="text-red-600 text-sm mb-4">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={!stripe || processing}
        className="bg-green-600 text-white px-4 py-2 rounded-lg w-full"
      >
        {processing ? 'Processing...' : 'Pay Now'}
      </button>
    </form>
  );
};

export default StripePaymentForm;
