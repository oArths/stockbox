import * as S from "./styles";
import Button from "../../components/buttonLogin/button";
import login from "../../assets/images/login.svg";
import Input from "../../components/inputs/input";
import TextImg from "../../components/textimg/textimg"
import { useNavigate } from "react-router-dom";
import app from "../../services/api_login";
import { useState } from "react";

const Forgot = () => {
  const nav = useNavigate();
  const [ values , setValues] = useState({
    email: '',
  })
  const handleSubmit = (event) => {
    
    // event.preventDefault();
    app.post('/forgot-password' , values)
    .then(res => console.log(res))
    .catch(res => console.log(res))

  }

  return (
    <S.Main>
      <S.Login>
        <S.TitleContainer>
          <S.Title>Esqueceu?</S.Title>
          <S.SubTitle>
            Esqueceu a senha? Insira suas informações e aguarde o email.
          </S.SubTitle>
        </S.TitleContainer>
        <S.ContainerErro>
        <S.InputContainer>
          <Input placeholder="E-mail" type="text" onChange={e => setValues({...values, email: e.target.value})}/>
        </S.InputContainer>
        </S.ContainerErro>

        <S.ButtonContainer>
          <Button Title="Recuperar"onClick={() => {
            handleSubmit()
            }}/>
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
            ao se acessar você concorda com <br/> nossos termosde <b>serviço</b> e <b>política privada</b>
          </S.Terms>
        </S.TermsContainer>
      </S.Login>
      <S.ImgContainer>
        <S.ImgTextContainer>
          <TextImg/>
        </S.ImgTextContainer>
        <S.Img src={login} alt="Imagem de um estoque" />
      </S.ImgContainer>
    </S.Main>
  );
};
export default Forgot;
