import * as S from "./style";
import Nav from "../../components/nav/nav";
import Header from "../../components/header/header";

const Relatorios = () => {
  return (
    <S.Body>
      <Header />
      <S.Main>
        <Nav />
        <S.Container>
          <S.IN>Relatorios</S.IN>
      
        </S.Container>
      </S.Main>
    </S.Body>
  );
};

export default Relatorios;
