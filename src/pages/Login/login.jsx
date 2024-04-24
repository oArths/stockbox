import * as S from "./styles";
import Button from "../../components/buttonLogin/button";
import login from "../../assets/images/login.svg";
import Input from "../../components/inputs/input";
import TextImg from "../../components/textimg/textimg";
import { useNavigate } from "react-router-dom";
import app from "../../services/api_login";
import { useState } from "react";

const Login = () => {
  const [ values , setValues] = useState({
    email: '',
    senha: '',
  })
  
  const handleSubmit = (event) => {
    console.log(values)
    // event.preventDefault();
    app.post('/login' , values)
    .then(res => console.log(res))
    .catch(res => console.log(res.response.data.message))

  }

  const nav = useNavigate();
  return (
    <S.Main>
      <S.Login>
        <S.TitleContainer>
          <S.Title>Login</S.Title>
          <S.SubTitle>
            Entre com sua conta e tenha acesso a um mundo de possibilidades.
          </S.SubTitle>
        </S.TitleContainer>
        
        <S.ContainerErro>
        <S.InputContainer>
          <Input placeholder="E-mail" type="text"  onChange={e => setValues({...values, email: e.target.value})} />
          <Input placeholder="Senha" type="password" onChange={e => setValues({...values, senha: e.target.value})}/>
        </S.InputContainer>
        </S.ContainerErro>

        <S.ButtonContainer>
          <Button Title="Entrar" onClick={() => {
            console.info('teste')
            handleSubmit()
            }}/>
          <S.SubText
          >
            Se  <S.Link onClick={() => {
              nav("/register");
            }}>cadastre</S.Link> ou <S.Link onClick={() => {
              nav("/forgot");
            }}>
              recupere
            </S.Link> a sua conta
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
        <S.ImgTextContainer>
        <TextImg/>

        </S.ImgTextContainer>
        <S.Img src={login} alt="Imagem de um estoque" />
      </S.ImgContainer>
    </S.Main>
  );
};
export default Login;
