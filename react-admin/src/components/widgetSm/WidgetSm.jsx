import './widgetSm.css';
import { Visibility } from '@material-ui/icons';
import { useState, useEffect } from 'react';
import { userRequest } from '../../axiosInstance';

export default function WidgetSm() {
  const [users, setUsers] = useState([]);

  //on component mount or update get new users using the query params set on the api users route
  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get('/users/?new=true');
        setUsers(res.data);
      } catch (err) {}
    };
    getUsers();
  }, []);

  // console.log(users);
  return (
    <div className='widgetSm'>
      <span className='widgetSmTitle'>New Join Members</span>
      <ul className='widgetSmList'>
        {users.map((user) => (
          <li className='widgetSmListItem'>
            <img src={user.img || 'https://avatars.githubusercontent.com/Mar-Issah'} alt='user' className='widgetSmImg' />
            <div className='widgetSmUser'>
              <span className='widgetSmUsername'>{user.firstname + user.lastname}</span>
              <span className='widgetSmUserTitle'>Software Engineer</span>
            </div>
            <button className='widgetSmButton'>
              <Visibility className='widgetSmIcon' />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
