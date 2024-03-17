import * as S from "./style";
import Nav from "../../components/nav/nav";
import Header from "../../components/header/header";

const Catalogacao = () => {
  return (
    <S.Body>
      <Header />
      <S.Main>
        <Nav />
        <S.Container>
          <S.IN>Catalogacao</S.IN>
        </S.Container>
      </S.Main>
    </S.Body>
  );
};

export default Catalogacao;
