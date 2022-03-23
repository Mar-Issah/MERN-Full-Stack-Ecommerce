import { css } from 'styled-components';

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 380px) {
      ${props}
    }
  `;
};

//you can create  more for different mobile screen sizes
export const tablet = (props) => {
  return css`
    @media only screen and (max-width: 580px) {
      ${props}
    }
  `;
};
