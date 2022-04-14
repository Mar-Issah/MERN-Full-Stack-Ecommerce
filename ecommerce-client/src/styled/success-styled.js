import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f7c6a3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  background-color: #000;
  width: 130px;
  height: 70px;
  color: #fff;
  font-weight: bold;
  border-radius: 20px;
  cursor: pointer;
`;
export const SuccessDiv = styled.div`
  background-color: #2bd604;
  width: 130px;
  padding: 20px;
  color: #fff;
  font-weight: bold;
  border-radius: 20px;
  text-align: center;
`;

export const Info = styled.p`
  margin-top: 10px;
  font-size: 16px;
`;
