import './featuredInfo.css';
import { useState, useEffect } from 'react';
import { userRequest } from '../../axiosInstance';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';

export default function FeaturedInfo() {
  const [income, setIncome] = useState([]);
  const [percentage, setPercentage] = useState([]);

  //on component mount or update get orders to populatr the table in jsx
  //In orther to get the user image we can get userId from order data and use id to find user
  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get('/orders/income');
        setIncome(res.data);
        //math: prev sales is this % more than two months sales
        setPercentage((res.data[1].total * 100) / res.data[0].total - 100);
      } catch (err) {}
    };
    getIncome();
  }, []);
  console.log(income);
  console.log(percentage);
  return (
    <div className='featured'>
      <div className='featuredItem'>
        <span className='featuredTitle'>Revenue</span>
        <div className='featuredMoneyContainer'>
          <span className='featuredMoney'>${income[1].total}</span>
          <span className='featuredMoneyRate'>
            {/* round % and if neg use the downward icon and vice versa */}%{Math.floor(percentage)}
            {percentage < 0 ? <ArrowDownward className='featuredIcon negative' /> : <ArrowDownward className='featuredIcon negative' />}
          </span>
        </div>
        <span className='featuredSub'>Compared to last month</span>
      </div>
      <div className='featuredItem'>
        <span className='featuredTitle'>Sales</span>
        <div className='featuredMoneyContainer'>
          <span className='featuredMoney'>$4,415</span>
          <span className='featuredMoneyRate'>
            -1.4 <ArrowDownward className='featuredIcon negative' />
          </span>
        </div>
        <span className='featuredSub'>Compared to last month</span>
      </div>
      <div className='featuredItem'>
        <span className='featuredTitle'>Cost</span>
        <div className='featuredMoneyContainer'>
          <span className='featuredMoney'>$2,225</span>
          <span className='featuredMoneyRate'>
            +2.4 <ArrowUpward className='featuredIcon' />
          </span>
        </div>
        <span className='featuredSub'>Compared to last month</span>
      </div>
    </div>
  );
}
