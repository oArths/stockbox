import styled from "styled-components";


export const Main = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  overflow: hidden !important;
  max-height: 100vh;
  
`;
// export const Container = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   gap: 10px;
//   overflow: hidden;

  
//   `;
export const ImageConrainer = styled.div`
max-width: 100vh;
height: auto;

`;

  export const Img = styled.img`
  max-width: 100%;
  max-height: auto;
`;


export const Login = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  gap: 40px;
  width: 450px;
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
  width: 250px;
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
