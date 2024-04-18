import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;

`;
export const InputInser = styled.input`
  font-size: 100%;
  padding: 5px;
  outline: none;
  color: black;
  border: 2px solid rgb(182, 181, 181);
  background-color: transparent;
  border-radius: 10px;
  width: 35%;

  &:focus{
    transition: all 0.3s ease;
    transition: all 0.3s ;
    border: 2px solid #4e8fd9;;

  }

`;