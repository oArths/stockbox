import styled from "styled-components";

export const Button = styled.button`
  background-color: #1a1a1a;
  width: 100%;
  height: 100%;
  font-size: 20px;
  color: #fafafa;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  -webkit-font-smoothing: subpixel-antialiased;
  &:active {
    transform: scale(98%);
    transition: transform 0.3s ease;
    background-color: #000000;
    -webkit-font-smoothing: subpixel-antialiased;

  }
`;
