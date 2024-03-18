import * as S from "./style";
import Nav from "../../components/nav/nav";
import Header from "../../components/header/header";
import Dropdown from "../../components/dropdown/dropdown"
import { useState } from "react";

const solicitacoes = () => {
  const [filterop, setFilterop] = useState("Filtro");



  return (
    <S.Body>
      <Header />
      <S.Main>
        <Nav />
        <S.Container>
          <S.Setcion>
            <S.Title>Solicitações</S.Title>
            <S.Header>
              <S.Option>
                <S.Op>Abertos</S.Op>
                <S.Op>Historico</S.Op>
              </S.Option>
              <S.SearchContainer>
                <S.Search type="search" placeholder="pesquise" />
                <Dropdown filterop={filterop} setFilterop={setFilterop}/>
              </S.SearchContainer>
            </S.Header>
          </S.Setcion>
        </S.Container>
      </S.Main>
    </S.Body>
  );
};

export default solicitacoes;
