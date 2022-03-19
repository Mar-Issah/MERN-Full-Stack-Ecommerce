import React from 'react';
import {
  Container,
  Wrapper,
  Left,
  Center,
  Right,
  Language,
  SearchContainer,
  Input,
} from '../styled/home.styled';

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder='Search' />
            {/* <Search style={{ color: 'gray', fontSize: 16 }} /> */}
          </SearchContainer>
        </Left>
        <Center></Center>
        <Right></Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
