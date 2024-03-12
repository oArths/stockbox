import * as S from "./styleLogin";
import login from "../../assets/images/Login.svg";
import Input from "../../components/inputs/index";
import Button from "../../components/button/index";

const Login = () => {
  return (
    <S.Main>
      <S.Container>
        <S.Login>
          <S.TitleContainer>
            <S.Title>Login</S.Title>
            <S.SubTitle>
              Entre com sua conta e tenha acesso a um mundo de possibilidades
            </S.SubTitle>
          </S.TitleContainer>

          <S.InputContainer>
            <Input label="E-mail" size="small" key="1" fullWidth />
            <Input
              label="Senha"
              size="small"
              key="2"
              type="password"
              fullWidth
            />
          </S.InputContainer>

          <S.ButtonContainer>
            <Button
              Title="Entar"
              variant="contained"
              size="large"
              // sx={{
              //   backgroundColor: (theme) => theme.palette.ochre.main,
              //   color: (theme) => theme.palette.ochre.contrastText,
              // }}
            />
            {/* <S.Button>Entrar</S.Button> */}
            <S.SubText>Se cadastre ou recuperea sua conta</S.SubText>
          </S.ButtonContainer>
          <S.TermsContainer>
            <S.Terms>
              ao se inscrever você concorda <br />
              com nossos termos de serviço e política privada
            </S.Terms>
          </S.TermsContainer>
        </S.Login>

        <S.Img src={login} alt="Imagem de um estoque" />
      </S.Container>
    </S.Main>
  );
};
export default Login;
