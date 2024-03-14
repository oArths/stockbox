import * as S from "./style";

const Nav = () => {
  return (
    <S.Body>
      <S.NavContainer>
        <S.OpContainer>
          <S.Op>DashBoard</S.Op>
          <S.Op>Solicitações</S.Op>
          <S.Op>Controle</S.Op>
          <S.Op>Relatorios</S.Op>
          <S.Op>Catalogação</S.Op>
        </S.OpContainer>
      </S.NavContainer>
    </S.Body>
  );
};
export default Nav;
