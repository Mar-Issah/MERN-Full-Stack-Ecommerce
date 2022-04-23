import './widgetLg.css';
import { useState, useEffect } from 'react';
import { userRequest } from '../../axiosInstance';
import { format } from 'timeago.js'; //to format createdAt data

export default function WidgetLg() {
  const [orders, setOrders] = useState([]);

  //on component mount or update get orders to populatr the table in jsx
  //In orther to get the user image we can get userId from order data and use id to find user
  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get('/orders');
        setOrders(res.data);
      } catch (err) {}
    };
    getOrders();
  }, []);
  // console.log(orders);
  const Button = ({ type }) => {
    return <button className={'widgetLgButton ' + type}>{type}</button>;
  };
  return (
    <div className='widgetLg'>
      <h3 className='widgetLgTitle'>Latest transactions</h3>
      <table className='widgetLgTable'>
        <thead>
          <tr className='widgetLgTr'>
            <th className='widgetLgTh'>Customer</th>
            <th className='widgetLgTh'>Date</th>
            <th className='widgetLgTh'>Amount</th>
            <th className='widgetLgTh'>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr className='widgetLgTr' key={order._id}>
              <td className='widgetLgUser'>
                {/* <img src='https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='' className='widgetLgImg' /> */}
                <span className='widgetLgName'>{order.userId}</span>
              </td>
              <td className='widgetLgDate'>{format(order.createdAt)}</td>
              <td className='widgetLgAmount'>${order.amount}.00</td>
              <td className='widgetLgStatus'>
                <Button type={order.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
