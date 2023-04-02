// stripeClient.js

import Stripe from 'stripe';

const stripe = new Stripe(process.env.TEST_STRIPE_SECRET_KEY);

export default stripe;
