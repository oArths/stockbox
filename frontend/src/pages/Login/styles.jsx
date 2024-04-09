import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  height: auto;
  overflow: hidden;
  user-select: none;
`;

export const Login = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: white;
  gap: 40px;
  max-width: 30%;
  height: 100vh;
`;
export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  border: none;
  outline: none;
`;
export const ImgTextContainer = styled.div`
  max-width: 30%;
  max-height: 20%;
  position: absolute;
  bottom: 15%;
  margin-left: 45px;
`;
export const TextImage = styled.text`
  font-size: 200%;
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
  text-align: left;
  justify-content: center;
  margin-top: 50px;
  width: 65%;
  gap: 20px;
`;
export const Title = styled.text`
  width: 100%;
  font-size: 55px;
  font-weight: bold;
`;
export const SubTitle = styled.text`
  font-size: 15px;
  color: #737373;
  width: 100%;
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  gap: 30px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 65%;
  height: 8%;
`;
export const SubText = styled.div`
  font-size: 12px;
`;
export const Link = styled.a`
  cursor: pointer;
  font-size: 14  px;
  color: #4e8fd9;
`;
export const TermsContainer = styled.div`
  margin-top: 70px;
  width: 300px;
  text-align: center;
`;

export const Terms = styled.text`
  font-size: 13px;
`;
