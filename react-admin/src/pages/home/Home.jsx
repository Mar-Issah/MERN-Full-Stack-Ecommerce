import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import './home.css';
import { userData } from '../../dummyData';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import { useState, useMemo, useEffect } from 'react';
import { userRequest } from '../../axiosInstance';

//we want to get the Chart data from the users/stats endpoint ie how many users were created in each months

// {"_id": 3, "total": 5},

//to prevent rerendering/re-calculating useMemo. There are no dep because the months will never change
export default function Home() {
  const [userStats, setUserStats] = useState([]);

  const MONTHS = useMemo(() => ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], []);

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get('/users/stats');
        res.data.map((item) => setUserStats((prev) => [...prev, { name: MONTHS[item._id - 1], 'Active Users': item.total }]));
      } catch (err) {}
    };
    getStats();
  }, [MONTHS]);
  console.log(userStats);
  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart data={userData} title='User Analytics' grid dataKey='Active User' />
      <div className='homeWidgets'>
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
