import { useState } from 'react';
import './login.css';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/apiCalls';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <div className='login-container'>
      <form>
        <input type='text' placeholder='Enter username' onChange={(e) => setUsername(e.target.value)} />
        <input type='password' placeholder='Enter password' onChange={(e) => setPassword(e.target.value)} />
        <input type='submit' className='btn' value='LOGIN' onClick={handleClick} />
      </form>
    </div>
  );
};

export default Login;
