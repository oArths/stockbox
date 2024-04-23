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
 
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
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
  height: 93vh;
 
  @media screen and (max-width: 768px) {
    max-width: 100%;
    height: auto;
  }
`;
 
export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  border: none;
  outline: none;
  @media screen and (max-width: 768px) {
    width: 100%;
    img {
      display: none; /* Oculta a imagem */
    }
  }
`;
 
export const ImgTextContainer = styled.div`
  max-width: 30%;
  max-height: 20%;
  position: absolute;
  bottom: 15%;
  margin-left: 45px;
  @media screen and (width: 1024px) {
  margin-bottom:5%;
}
  @media screen and (max-width: 768px) {
 
    text {
      display: none; /* Oculta o texto */
    }
  }
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
  margin-top: 45px;
  width: 65%;
  gap: 20px;
 
  @media screen and (max-width: 768px) {
    margin-left:11%;
  }

`;
 
export const Title = styled.div`
  font-size: 50px;
  font-weight: bold;
`;

export const SubTitle = styled.div`
  font-size: 18px;
  color: #737373;
 
  @media screen and (max-width: 768px) {
    width: 85%;
    text-align: left;
 
    }
    @media screen and (width: 1024px) {
    font-size:16px;
  }
 
`;
 
export const ContainerErro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 65%;
  gap: 2px;
 
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
 
export const TextErro = styled.div`
  text-align: center;
  font-size: 12px;
  color: #d81212;
`;
 
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 30px;
  /* @media screen and (max-width: 1024px) {
    margin-top:-18%;
  } */
  @media screen and (max-width: 425px) {
    width: 60%;
   }
   @media screen and (max-width: 768px) {
    width: 55%;
  }
`;
 
 
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 65%;
  height: 8%;
  @media screen and (width: 1024px) {
    margin-top:-8%;
  }
  @media screen and (max-width: 425px) {
    width: 60%;
  }
  @media screen and (max-width: 768px) {
    width: 55%;
  }
`;
 
export const SubText = styled.div`
  font-size: 14px;
  text-align: center;
`;
 
export const Link = styled.a`
  cursor: pointer;
  font-size: 15px;
  color: #4e8fd9;
`;
 
export const TermsContainer = styled.div`
  margin-top: 45px;
  width: 350px;
  text-align: center;
  padding-bottom:7%;
 
  @media screen and (width: 1024px) {
    margin-top:-10%;
    width:70%;
    padding-bottom:20%;
  }
  @media screen and (max-width: 768px) {
    width: 70%;
  }
`;
 
export const Terms = styled.div`
  font-size: 14px;

`;
