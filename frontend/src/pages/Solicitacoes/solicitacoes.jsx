import * as S from "./style";
import Nav from "../../components/nav/nav";
import Header from "../../components/header/header";
import Dropdown from "../../components/dropdown/dropdown";
import { useState, useEffect } from "react";
import Search from "../../components/search/search";
import Options from "./db.json";
import row from "./tabledb.json";
const solicitacoes = () => {
  
  const [filterop, setFilterop] = useState("Filtro");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredRow, setFilteredRow] = useState(row); // Estado para armazenar as linhas filtradas


  // Função para filtrar as linhas com base no termo de pesquisa
  useEffect(() => {
    const filteredData = row.filter((value) =>
      Object.values(value).some((field) =>
        field.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredRow(filteredData);
  }, [searchTerm]);

 
  return (
    <S.Body>
      <Header />
      <S.Main>
        <Nav />
        <S.Container>
          <S.Section>
            <S.Title>Solicitações</S.Title>
            <S.Header>
              <S.Option>
                <S.Op>Abertos</S.Op>
                <S.Op>Historico</S.Op>
              </S.Option>
              <S.InsertContainer>
                <S.FilterContainer>
                  <Dropdown filterop={filterop} setFilterop={setFilterop} />
                </S.FilterContainer>
                <S.SearchContainer>
                  <Search placeholder="Pesquisar" options={Options} 
                  onChange={(e) => setSearchTerm(e.target.value)}/>
                </S.SearchContainer>
              </S.InsertContainer>
            </S.Header>
          </S.Section>
          <S.TableContainer>
            <S.StyledTable>
              <S.TableHeader>
                <tr>
                <th>Status</th>
                <th>id</th>
                <th>Nome</th>
                <th>Departamento</th>
              
                </tr>
              </S.TableHeader>
              <S.TableBody>

              {filteredRow.map((value) => (
                <tr key={value.key}>
                <td>{value.address}</td>
                <td>{value.name} </td>
                <td>{value.age}</td>
                <td>{value.hehe}</td>
              </tr>

              ))}
              </S.TableBody>
            </S.StyledTable>
          
            
          </S.TableContainer>
        </S.Container>
      </S.Main>
    </S.Body>
  );
};

export default solicitacoes;
