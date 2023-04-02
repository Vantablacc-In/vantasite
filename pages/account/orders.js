import React, { useContext, useEffect, useState } from 'react';

import { Layout } from '../../components/common';
import { OrderDetails } from '../../components/user';
import { UserContext } from '../../context/UserContext';
import { supabase } from '../../lib/supabase';

const OrdersPage = () => {
  const { user } = useContext(UserContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      const fetchOrders = async () => {
        const { data, error } = await supabase
          .from('orders')
          .select('*')
          .eq('user_id', user.id);

        if (error) {
          console.error('Error fetching orders:', error);
        } else {
          setOrders(data);
        }
      };

      fetchOrders();
    }
  }, [user]);

  return (
    <Layout>
      <h1 className="text-2xl font-semibold mb-4">My Orders</h1>
      {orders.map((order) => (
        <OrderDetails key={order.id} order={order} />
      ))}
    </Layout>
  );
};

export default OrdersPage;
