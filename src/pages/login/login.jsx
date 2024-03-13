import * as S from "./styleLogin";
import Button from "../../components/button";
import login from "../../assets/images/login.svg";
import Input from "../../components/inputs/index";

const Login = () => {
  return (
    <S.Main>
      <S.Login>
        <S.TitleContainer>
          <S.Title>Login</S.Title>
          <S.SubTitle>
            Entre com sua conta e tenha acesso a um mundo de possibilidades home
          </S.SubTitle>
        </S.TitleContainer>

        <S.InputContainer>
          <Input Title="E-mail" placeholder="email@gmail.com" />
          <Input Title="Senha" placeholder="Admin@123" type="password" />
        </S.InputContainer>

        <S.ButtonContainer>
          <Button Title="Entar" />
          <S.SubText>Se cadastre ou recuperea sua conta</S.SubText>
        </S.ButtonContainer>
        <S.TermsContainer>
          <S.Terms>
            ao se acessar você concorda <br />
            com nossos termos de <b>serviço</b> e <b>política privada</b>
          </S.Terms>
        </S.TermsContainer>
      </S.Login>
      <S.ImgContainer>
        <S.ImgtextContainer>
          <S.TextImage>
            Lorem ipsum dolor sit amet consectetur adipiscing elit.
          </S.TextImage>
        </S.ImgtextContainer>
        <S.Img src={login} alt="Imagem de um estoque" />
      </S.ImgContainer>
    </S.Main>
  );
};
export default Login;
