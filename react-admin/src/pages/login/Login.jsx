import { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    console.log({ username, password });
  };

  return (
    <div className='login-container'>
      <form>
        <input type='text' placeholder='Enter username' onChange={(e) => setUsername(e.target.value)} />
        <input type='text' placeholder='Enter password' onChange={(e) => setPassword(e.target.value)} />
      </form>
      <input type='submit' value='Login' onClick={handleClick} />
    </div>
  );
};

export default Login;
