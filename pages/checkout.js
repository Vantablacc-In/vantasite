import React from 'react';

import {
  OrderSummary,
  PaymentForm,
  ShippingForm,
} from '../components/checkout';
import { Layout } from '../components/common';

const CheckoutPage = () => {
  return (
    <Layout>
      <ShippingForm />
      <PaymentForm />
      <OrderSummary />
    </Layout>
  );
};

export default CheckoutPage;
