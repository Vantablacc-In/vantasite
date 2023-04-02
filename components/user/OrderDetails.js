// components/user/OrderDetails.js

import React, {
  useContext,
  useEffect,
  useState,
} from 'react';

import { useRouter } from 'next/router';

import { UserContext } from '../../context/UserContext';
import { supabase } from '../../lib/supabase';

const OrderDetails = () => {
  const router = useRouter();
  const { orderId } = router.query;
  const { user } = useContext(UserContext);
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (user && orderId) {
      fetchOrderDetails();
    }
  }, [user, orderId]);

  const fetchOrderDetails = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("orders")
        .select("*")
        .eq("user_id", user.id)
        .eq("id", orderId)
        .single();

      if (error) {
        throw error;
      }

      setOrder(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!order) return <div>No order found.</div>;

  return (
    <div>
      <h1>Order Details</h1>
      <p>Order ID: {order.id}</p>
      {/* Display other order details here */}
    </div>
  );
};

export default OrderDetails;
