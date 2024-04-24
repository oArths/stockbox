import styled from "styled-components";
import * as I from "iconoir-react";

export const Overlay = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 1000;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,0.6);
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #EBEBEB;
  width: 60vw;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  
`;
export const ContainerM = styled.div`
  width: 90%;
  margin: 1.5% 5% 0% 5%;
`;

export const IconClose = styled(I.Xmark)`
 color: #ff0000;
 width: 2rem;
 height: 2rem;
`;
export const Close = styled.button`
  background-color: rgba(0,0,0,0.0);
  cursor: pointer;


`;
export const ContainerHeader = styled.div`
margin-top: 20px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 100%;

`;
export const header = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
width: 90%;
`;


export const HeaderM = styled.h2`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* margin-bottom: 2rem; */
`;
export const TitleM = styled.h2`
  font-weight: 700;
  font-size: 20px;
  color: #000000;
`;
export const Switch = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
`;
export const SwitchText = styled.text`
  font-weight: 400;

  color: #6F6F6F;
  margin-right: 0.5rem;
`;

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;

`;
export const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
`;
export const Text = styled.h3`
  font-weight: 700;
  font-size: 18px;

  color: #000000;
`;
export const NameInput = styled.input`
  font-weight: 400;
  font-size: 18px;
  color: #000000;
  padding: 0.8rem;
  background-color: #D9D9D9;
  outline: none;
  margin-bottom: 1rem;
  border-radius: 5px;

  width: 40%;

`;
export const Inputs = styled.input`
  font-weight: 400;
  font-size: 18px;
  color: #000000;
  padding: 0.8rem;
  background-color: #D9D9D9;
  outline: none;
  margin-bottom: 1rem;
  border-radius: 5px;

  width: 20%;

`;
export const Textarea = styled.textarea`
  font-weight: 400;
  font-size: 18px;
  color: #000000;
  border-radius: 5px;
  padding: 1rem;
  background-color: #D9D9D9;
  resize: none;
`;
export const ConatinerButton = styled.div`
display: flex;
justify-content: right;
align-items: center;
width: 100%;
padding: 40px 0px;

`;
export const AddButton = styled.button`
  background-color: #D9D9D9;
  color: #000;
  cursor: pointer;
  padding: 0.8rem;
  font-weight: 700;
  font-size: 20px;
  transition: 
    background-color 300ms ease 0s,
    color 300ms ease 0s;

  &:hover {
  background-color: #121212;
  color: #fff;
  }
`;