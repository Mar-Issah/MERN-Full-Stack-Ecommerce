import React from 'react';
import { Container, Wrapper, Left, Center, Right, Language, SearchContainer, Input, Logo, MenuItem } from '../styled/home/navbar-styled';
import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder='Search' />

            <Search style={{ color: 'gray', fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>SIYA.</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <a href='/'>
            <MenuItem>
              <Badge badgeContent={6} color='primary'>
                <ShoppingCartOutlined color='primary' />
              </Badge>
            </MenuItem>
          </a>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;