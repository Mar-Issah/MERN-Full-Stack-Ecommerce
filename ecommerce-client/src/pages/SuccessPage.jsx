import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { userRequest } from '../axiosInstance';

const Success = () => {
  const location = useLocation();
  const data = location.state.stripeData;

  const cart = location.state.products;
  //const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);

  //stripedata is the payment to stripe data
  console.log(location.state);
  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await userRequest.post('/orders', {
          // userId: currentUser._id,
          userId: 'test',
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item._quantity,
          })),
          amount: cart.total,
          address: data.billing_details.address,
        });
        //db response and send the client the order id
        setOrderId(res.data._id);
        console.log(res.data._id);
      } catch {}
    };
    data && createOrder();
  }, [cart, data]);
  //userId: currentUser._id,

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* if order id is returned by server then the payment was successful */}
      {orderId ? `Order has been created successfully. Your order number is ${orderId}` : `Successfull. Your order is being prepared...`}
      <button style={{ padding: 10, marginTop: 20, backgroundColor: '#2bd604' }}>Go to Homepage</button>
    </div>
  );
};

export default Success;
