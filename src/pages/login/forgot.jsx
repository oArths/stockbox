import * as S from "./styles";
import Button from "../../components/button/button";
import login from "../../assets/images/login.svg";
import Input from "../../components/inputs/input";
import { useNavigate } from "react-router-dom";

const Forgot = () => {
  const nav = useNavigate();

  return (
    <S.Main>
      <S.Login>
        <S.TitleContainer>
          <S.Title>Esqueceu?</S.Title>
          <S.SubTitle>
            Esqueceu a senha? Insira suas informações e aguarde o email.
          </S.SubTitle>
        </S.TitleContainer>

        <S.InputContainer>
          <Input placeholder="E-mail" type="text" />
        </S.InputContainer>

        <S.ButtonContainer>
          <Button Title="Entrar" />
          <S.SubText>
            Se{" "}
            <S.Link
              onClick={() => {
                nav("/register");
              }}
            >
              cadastre
            </S.Link>{" "}
            ou faça{" "}
            <S.Link
              onClick={() => {
                nav("/");
              }}
            >
              login
            </S.Link>{" "}
            em sua conta
          </S.SubText>
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
export default Forgot;
