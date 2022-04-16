import { useState } from 'react';
import { Container, Wrapper, Title, Form, Input, Button, Link, Error } from '../styled/login/login-styled';
import { useDispatch } from 'react-redux';
import { login } from '../redux/apiCalls';
import { useSelector } from 'react-redux';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  //to be able to use this flags in jsx whiles fetching
  const { isFetching, isError } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder='username' onChange={(e) => setUsername(e.target.value)} />
          <Input placeholder='password' type='password' onChange={(e) => setPassword(e.target.value)} />
          <Button onClick={handleClick} disabled={isFetching}>
            LOGIN
          </Button>
          {isError && <Error>Something went wrong...</Error>}
          <Link>FORGOT PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
