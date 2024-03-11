import "../../App.css";
import * as S from "../login/styleLogin";
import login from "../../assets/images/Login.svg";

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
          <S.InputArea>
            <S.Input>
              <h2>E-Mail</h2>
              <S.TextInput type="text" placeholder="Digite seu email" />
            </S.Input>

            <S.Input>
              <h2>Senha</h2>
              <S.TextInput type="text" placeholder="Digite sua  Senha" />
            </S.Input>
          </S.InputArea>

          <S.Button>
            <button>Entrar</button>
            <p>Esqueceu sua senha? Recupere aqui</p>
          </S.Button>
          <S.Terms>
            <p>
              ao se inscrever você concorda com nossos termos de serviço e
              política privada
            </p>
          </S.Terms>
        </S.Login>

        <S.Img src={login} alt="" />
      </S.Container>
    </S.Main>
  );
};
export default Login;
