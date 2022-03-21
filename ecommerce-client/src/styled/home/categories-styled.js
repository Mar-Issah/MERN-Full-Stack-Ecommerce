import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

export const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`;

export const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: #f5a42a;
  color: gray;
  cursor: pointer;
  font-weight: 600;
  border-radius: 50px;
  &:hover {
    background-color: rgba(245, 164, 42, 0.7);
  }
`;
