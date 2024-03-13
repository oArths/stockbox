import * as S from "./styleLogin";
import ILogin from "../../assets/images/login.svg";
import Input from "../../components/inputs/index";
import Button  from "../../components/button/index";

const Login = () => {
  return (
    <S.Main>
      {/* <S.Container> */}
        <S.Login>
          <S.TitleContainer>
            <S.Title>Login</S.Title>
            <S.SubTitle>
              Entre com sua conta e tenha acesso a um mundo de possibilidades
            </S.SubTitle>
          </S.TitleContainer>
          <S.InputContainer>
            <Input Title="E-mail" placeholder="email@gmail.com" />
            <Input Title="Senha" placeholder="Admin@123" type="password" />
          </S.InputContainer>

          <S.ButtonContainer>
            <Button Title="Entrar"/>
          
            <S.SubText>Se cadastre ou recuperea sua conta</S.SubText>
          </S.ButtonContainer>
          <S.TermsContainer>
            <S.Terms>
              ao se inscrever você concorda <br />
              com nossos termos de serviço e política privada
            </S.Terms>
          </S.TermsContainer>
        </S.Login>
        <S.ImageConrainer>
        <S.Img src={ILogin} alt="Imagem de um estoque" />
        </S.ImageConrainer>
      {/* </S.Container> */}
    </S.Main>
  );
};
export default Login;
