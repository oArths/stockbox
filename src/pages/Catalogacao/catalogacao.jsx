import * as S from "./style";
import Nav from "../../components/nav/nav";
import Header from "../../components/header/header";
import Filter from "../../components/filter/filter";
import Folder from "../../assets/images/folder.svg"
import { useState } from "react";
import Search from "../../components/search/search";
import data from "../Data/tabledb.json";
import Pagination from "../../components/pagination/pagination"
import { useNavigate } from "react-router-dom";
import Dropdown from "../../components/dropdown/dropdown";
import ModalDelete from "../../components/modalDelete/modalDelete";
import Modal from '../../components/Modal/Modal.jsx'


  const limit = 7;
  const total =  data.length;
const Catalogacao = () => {
  const nav = useNavigate();

  
  const [filterop, setFilterop] = useState("Filtro");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const [offset, setOffSet] = useState(0);
  const [opset, setOpset] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [open, setOpen] =  useState(false);
  const [isActive, setIsActive] = useState(false);



  const normalizeString = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  };

  const handleSearch = (event) => {
    const searchValue = event.target.value;
    setSearchTerm(searchValue);

    
    const normalizedSearch = normalizeString(searchValue);
        const newFilteredData = data.filter((item) => {
          if (filterop === "Departamento") {
            return normalizeString(item.departamento.toString()).includes(normalizedSearch);
          } 
           else if (filterop === "Nome") {         
            return normalizeString(item.nome.toString()).includes(normalizedSearch);
          }
           else if (filterop === "Status") {          
            return normalizeString(item.status.toString()).includes(normalizedSearch);
          } 
           else if (filterop === "Id") {         
            return normalizeString(item.id.toString()).includes(normalizedSearch);
          } 
           else if (filterop === "Data") {
            return normalizeString(item.data.toString()).includes(normalizedSearch);
          }  else {
            return Object.values(item).some((value) =>
              normalizeString(value.toString()).includes(normalizedSearch)
            );
          }
        });
        setFilteredData(newFilteredData);
      };
 

  return (
    <S.Body>
      <Header />
      <S.Main>
        <Nav />
        <S.Container>
          <S.Section>
            <S.Title>Catalogação</S.Title>
            <S.Header>
              <S.InsertContainer>
                <S.SearchContainer>
                  <Search 
                  placeholder="Pesquisar"
                   value={searchTerm}
                  onChange={handleSearch}/>
                </S.SearchContainer>
                <S.FilterContainer>
                  <Filter filterop={filterop} setFilterop={setFilterop} />
                </S.FilterContainer>
                <S.ButtonContainer >
                <Dropdown Title="Adicionar" 
                OP1="Departamento" onClickOP1={e => {setOpen(true), setIsActive(false)}} 
                OP2="Categoria" onClickOP2={e => {nav("/saida"), setIsActive(false)}}/>
               </S.ButtonContainer>
              </S.InsertContainer>
            </S.Header>
          </S.Section>
         <S.TableContainer>
            <S.StyledTable>
              <S.TableHeader>
                <S.TrHeader>
                <S.ThHeader isFirst >Foto</S.ThHeader>
                <S.ThHeader>id</S.ThHeader>
                <S.ThHeader>Nome</S.ThHeader>
                <S.ThHeader> Quantidade</S.ThHeader>
                <S.ThHeader >Categoria</S.ThHeader>       
                <S.ThHeader isLast></S.ThHeader>       
                </S.TrHeader>
              </S.TableHeader>
              <S.TableBody>
              {filteredData.slice(offset,offset + limit).map((item, index) => (
              <S.TrBody key={index}>
                {Object.entries(item).map(([key, value], index) => (
                  <S.StyledTableCell key={index} >
                    <S.Test  >
                    {value}
                    </S.Test>
                    </S.StyledTableCell>
                ))}
                <S.StyledTableCell >
                  <S.ButtonContainer>
                  <S.ButtonEdit onClick={() => setOpenModal(true)}>
                  <S.Edit/>
                  </S.ButtonEdit>
                  <S.ButtonDelete onClick={() => setOpenModal(true)}>
                 <S.Trash/>   
                 </S.ButtonDelete>  
                 </S.ButtonContainer>           
                 </S.StyledTableCell>
              </S.TrBody>
            ))}
              </S.TableBody>
            </S.StyledTable>
            <S.PaginationConatiner>
               <Pagination 
               limit={limit}
               total={total} 
               offset={offset}
               setOffset={setOffSet}
               />
            </S.PaginationConatiner>
          </S.TableContainer>
        <Modal title={'Informações de Departamento'} isOpen={open} setOpenModal={() => setOpen(!open)}/>
        <ModalDelete isOpen={openModal} setOpenModal={() => setOpenModal(!openModal)} />

        </S.Container>
      </S.Main>
    </S.Body>
  );
};

export default Catalogacao
;
