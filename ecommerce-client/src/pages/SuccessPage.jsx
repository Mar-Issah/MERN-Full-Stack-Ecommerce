import React from 'react';
import { Container, SuccessDiv, Info } from '../styled/success-styled';

const Success = () => {
  return (
    <Container>
      <SuccessDiv>SUCCESS!</SuccessDiv>
      <Info>Your order is being prepared.Thanks for choosing us!</Info>
    </Container>
  );
};

export default Success;
