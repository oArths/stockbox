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
  flex: 2;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: white;
  gap: 40px;
  max-width: 30% ;
  height: 100vh;
`;
export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  border: none;
  outline: none;
  

`;
export const ImgtextContainer = styled.div`
  max-width: 30%;
  max-height: 20%;
  position: absolute;
  bottom: 15%;
  margin-left: 45px;
`;
export const TextImage = styled.text`
  font-size: 34px;
  color: white;
`;
export const Img = styled.img`
  max-width: 98%;
  max-height: auto;
  min-width: 100px;
  min-height: 50px;
  border: none;
  outline: none;
  border-radius: 10px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 50px;
  width: 60%;
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
  width: 60%;
  gap: 30px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 60%;
  height: 8%;
`;
export const SubText = styled.text`
  font-size: 13px;
`;
export const TermsContainer = styled.div`
  margin-top: 70px;
  width: 300px;
  text-align: center;
`;

export const Terms = styled.text`
  font-size: 13px;
`;
