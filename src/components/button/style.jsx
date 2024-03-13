import styled from "styled-components";

export const Button = styled.button`
  background-color: #1a1a1a;
  width: 100%;
  height: 100%;
  font-size: 20px;
  color: #fafafa;
  font-size: 15px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  &:hover {
    transition: transform 0.3s ease;
    transform: scale(102%);
  }
  &:active {
    transform: scale(98%);
    transition: transform 0.3s ease;
    background-color: #000000;
    
  }
`;
