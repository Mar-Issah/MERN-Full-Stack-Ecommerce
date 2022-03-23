import styled from 'styled-components';
import { mobile } from '../../responsive';

export const Container = styled.div`
  height: 40vh;
  margin-bottom: 10px;
  background-color: #fcf5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${mobile({ height: '20vh' })}
`;
export const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  ${mobile({ fontSize: '50px' })}
`;

export const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: 'center' })}
`;

export const InputContainer = styled.div`
  width: 50%;
  height: 40px !important;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  flex: 8;
  padding-left: 20px;
  ${mobile({ width: '80%' })}
`;
export const Input = styled.input`
  border: none;
  flex: 8;
  outline: none;
`;

export const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #f5a42a;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: rgba(245, 164, 42, 0.7);
  }
`;
