import * as S from "./styles";
import Button from "../../components/buttonLogin/button";
import login from "../../assets/images/login.svg";
import Input from "../../components/inputs/input";
import TextImg from "../../components/textimg/textimg";
import { useNavigate, useParams } from "react-router-dom";
import app from "../../services/api_login";
import { useState } from "react";

const Reset = () => {
  const nav = useNavigate();
  const {token} = useParams();
  const [error, setError] = useState('');
  
  const [ values , setValues] = useState({
    newPassword: '',
    confPassword: '',
    token
  })

  
    const handleSubmit = (event) => {
      console.log(values.confPassword)
      console.log(values.newPassword)

      if(values.newPassword  !== values.confPassword){
        setError("senhas invalidas ou  diferentes")
        console.log("erro senha")
      }
      else{
        console.log("senha certa")
        setError('')
      app.post('/reset-password' , {newPassword: values.newPassword, token})
    .then(res => console.log(res))
    .catch(res => console.log(res.response.data.message))
  }

  }
  
  return (
    <S.Main>
      <S.Login>
        <S.TitleContainer>
          <S.Title>Nova Senha</S.Title>
          <S.SubTitle>
            Insira uma nova senha para acessar sua conta
          </S.SubTitle>
        </S.TitleContainer>
        <S.ContainerErro>
        <S.InputContainer>
          <Input 
          placeholder="Nova Senha" 
          type="password"
          onChange={e => setValues({...values, newPassword: e.target.value})}/>
          <Input 
          placeholder="Confirmar Senha" 
          type="password"
          onChange={e => setValues({...values, confPassword: e.target.value})}/>
        </S.InputContainer>
        {error && <S.TextErro>{error}</S.TextErro>} 
        </S.ContainerErro>

        

        <S.ButtonContainer>
          <Button Title="Entrar"
          onClick={() => {handleSubmit()}}/>
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
        <S.ImgTextContainer>
        <TextImg/>
        </S.ImgTextContainer>
        <S.Img src={login} alt="Imagem de um estoque" />
      </S.ImgContainer>
    </S.Main>
  );
};
export default Reset;
