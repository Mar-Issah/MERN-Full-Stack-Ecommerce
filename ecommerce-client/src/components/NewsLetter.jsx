import { Send } from '@mui/icons-material';
import { Container, Title, Desc, InputContainer, Input, Button } from '../styled/home/newsletter-styled';

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Join the Newsletter and get them Free. Every Month!</Desc>
      <InputContainer>
        <Input placeholder='Enter email' />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
