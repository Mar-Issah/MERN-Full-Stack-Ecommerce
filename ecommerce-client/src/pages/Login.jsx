import { useState } from 'react';
import { Container, Wrapper, Title, Form, Input, Button, Link } from '../styled/login/login-styled';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const dispatch = useDispatch();
  // const { isFetching, error } = useSelector((state) => state.user);

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   login(dispatch, { username, password });
  // };
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder='username' onChange={(e) => setUsername(e.target.value)} />
          <Input placeholder='password' type='password' onChange={(e) => setPassword(e.target.value)} />
          {/* <Button onClick={handleClick} disabled={isFetching}> */}
          <Button>LOGIN</Button>
          {/* {error && <Error>Something went wrong...</Error>} */}
          <Link>FORGOT PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
