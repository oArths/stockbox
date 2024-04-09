import * as S from "./styles";
import Button from "../../components/buttonLogin/button";
import login from "../../assets/images/login.svg";
import Input from "../../components/inputs/input";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import app from "../../services/api_login";
import { Import } from "iconoir-react";
import TextImg from "../../components/textimg/textimg";

const Register = () => {
  const nav = useNavigate();
  const [ values , setValues] = useState({
    usuNome: '',
    email: '',
    senha: '',
  })
  const handleSubmit = (event) => {
    
    // event.preventDefault();
    app.post('/signup' , values)
    .then(res => console.log(res))
    .catch(res => console.log(res.response.data.message))

  }
  return (
    <S.Main>
      <S.Login>
        <S.TitleContainer>
          <S.Title>Cadastro</S.Title>
          <S.SubTitle>
            Entre com sua conta e tenha acesso a um mundo de possibilidades.
          </S.SubTitle>
        </S.TitleContainer>
        <S.ContainerErro>
        <S.InputContainer>
          <Input placeholder="Nome" type="text" onchange={e => setValues({...values, usuNome: e.target.value})}/>
          <Input placeholder="E-mail" type="text" onchange={e => setValues({...values, email: e.target.value})} />
          <Input placeholder="Senha" type="password" onchange={e => setValues({...values, senha: e.target.value})}/>
        </S.InputContainer>
        </S.ContainerErro>

        <S.ButtonContainer>
          <Button Title="Criar" onClick={() => {
            console.info('teste')
            handleSubmit()
            }}/>
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
        <S.ImgTextContainer>
        <TextImg/>

        </S.ImgTextContainer>
        <S.Img src={login} alt="Imagem de um estoque" />
      </S.ImgContainer>
    </S.Main>
  );
};
export default Register;
