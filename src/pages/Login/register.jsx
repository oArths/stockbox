import * as S from "./styles";
import Button from "../../components/button";
import login from "../../assets/images/login.svg";
import Input from "../../components/inputs/index";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const nav = useNavigate();
  return (
    <S.Main>
      <S.Login>
        <S.TitleContainer>
          <S.Title>Cadastro</S.Title>
          <S.SubTitle>
            Entre com sua conta e tenha acesso a um mundo de possibilidades.
          </S.SubTitle>
        </S.TitleContainer>

        <S.InputContainer>
          <Input placeholder="Nome" type="text" />
          <Input placeholder="E-mail" type="text" />
          <Input placeholder="Senha" type="password" />
        </S.InputContainer>

        <S.ButtonContainer>
          <Button Title="Entrar" />
          <S.SubText>
            Faça seu{" "}
            <S.Link
              onClick={() => {
                nav("/");
              }}
            >
              login{" "}
            </S.Link>
            ou{" "}
            <S.Link
              onClick={() => {
                nav("/forgot");
              }}
            >
              recupere{" "}
            </S.Link>
            a sua conta
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
export default Register;
