import styled from "styled-components";

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
  //width: 100%;
  margin-top: 100px;
  margin-bottom: 100px;
  background-color: #EBEBEB;
  width: 60vw;
  //height: 100px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  /* top: 50%; right: 50%;
  transform: translate(50%,-50%); */
  margin-left: auto;
  margin-right: auto;
`;
export const ContainerM = styled.div`
  width: 90%;

  /* top | right | bottom | left */
  margin: 1.5% 5% 5% 5%;
`
export const Close = styled.button`
  //display: flex
  background-color: rgba(0,0,0,0.0);
  width: 20px;
  cursor: pointer;

  margin-left: 10px;
  margin-top: 10px;
`;
export const HeaderM = styled.h2`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`
export const TitleM = styled.h2`
  font-family: 'Exo 2', sans-serif;
  font-weight: 700;
  font-size: 20px;
  //text-transform: capitalize;

  color: #000000;
`;
export const Switch = styled.div`
  display: flex;
  justify-content: right;
`
export const SwitchText = styled.text`
  font-family: 'Exo 2', sans-serif;
  font-weight: 400;

  color: #6F6F6F;
  margin-right: 0.5rem;
`

export const Div = styled.div`
    display: flex;
    //width: 100%;
    justify-content: space-between;
    align-items: end;
`
export const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  gap: 1rem;
`
export const Text = styled.h3`
  font-family: 'Exo 2', sans-serif;
  font-weight: 700;
  font-size: 15px;

  color: #000000;
`;
export const Input = styled.input`
  font-family: 'Exo 2', sans-serif;
  font-weight: 400;
  font-size: 15px;

  color: #000000;

  //width: 100%;

  /* top | right | bottom | left */
  padding: 1rem;
  background-color: #D9D9D9;
  outline: none;
  text-transform: capitalize;
  margin-bottom: 1rem;

  width: 60%;
`
export const Textarea = styled.textarea`
  font-family: 'Exo 2', sans-serif;
  font-weight: 400;
  font-size: 15px;

  color: #000000;

  width: 90%;

  /* top | right | bottom | left */
  padding: 1rem;
  background-color: #D9D9D9;
  resize: none;
`
export const AddButton = styled.button`
  background-color: #D9D9D9;
  color: #000;
  cursor: pointer;
  padding: 0.8rem;
  font-weight: 700;
  font-size: 20px;
  margin-left: 1rem;

  transition: 
    background-color 300ms ease 0s,
    color 300ms ease 0s;

  &:hover {
  background-color: #121212;
  color: #fff;
  }
`