import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  height: auto;
  overflow: hidden;
`;

export const Login = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  gap: 40px;
  width: 450px;
  height: 100vh;
`;
export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border: none;
  outline: none;
`;
export const Img = styled.img`
  margin-right: 1vh;
  max-width: 90%;
  min-width: 100px; /* Altere para o tamanho desejado */
  min-height: 50px;
  height: auto;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  width: 300px;
  gap: 30px;
`;
export const Title = styled.text`
  font-size: 60px;
  font-weight: bold;
`;
export const SubTitle = styled.text`
  font-size: 15px;
  color: #737373;
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 300px;
`;
export const SubText = styled.text`
  font-size: 12px;
`;
export const TermsContainer = styled.div`
  margin-top: 70px;
  width: 300px;
  text-align: center;
`;

export const Terms = styled.text`
  font-size: 12px;
`;
