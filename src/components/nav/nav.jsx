import * as S from "./style";
import { useNavigate } from "react-router-dom";


const Nav = () => {
  const nav = useNavigate();

  return (
    <S.Container>
      <S.OpConatiner>
        <S.Op onClick={() => {nav("/dashboard")}}>DashBoard</S.Op>
        <S.Op onClick={() => {nav("/solicitacoes")}}>Solicitações</S.Op>
        <S.Op onClick={() => {nav("/controle")}}>Controle</S.Op>
        <S.Op onClick={() => {nav("/relatorios")}}>Relatorios</S.Op>
        <S.Op onClick={() => {nav("/catalogacao")}}>Catalogação</S.Op>
      </S.OpConatiner>
    </S.Container>
  );
};
export default Nav;
