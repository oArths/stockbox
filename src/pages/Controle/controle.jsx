import * as S from "./style";
import Nav from "../../components/nav/nav";
import Header from "../../components/header/header";

const Controle = () => {
  return (
    <S.Body>
      <Header />
      <S.Main>
        <Nav />
        <S.Container>
          <S.IN>Controle</S.IN>
      
        </S.Container>
      </S.Main>
    </S.Body>
  );
};

export default Controle;
