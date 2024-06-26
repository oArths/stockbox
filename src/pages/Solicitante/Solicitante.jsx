import * as S from "./style";
import Nav from "../../components/nav/nav";
import Header from "../../components/header/header";
import Filter from "../../components/filter/filter";
import { useState } from "react";
import Search from "../../components/search/search";
import Folder from "../../assets/images/folder.svg"
import data from "../Data/tabledb.json";
import Pagination from "../../components/pagination/pagination"
import ButtonConfirm from "../../components/ButtonConfirm/ButtonConfirm";
import { useNavigate } from "react-router-dom";
import ModalDelete from "../../components/modalDelete/modalDelete";


  const limit = 7;
  const total =  data.length;
const solicitante = () => {
  const nav = useNavigate();

  
  const [filterop, setFilterop] = useState("Filtro");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const [offset, setOffSet] = useState(0)
  const [opset, setOpset] = useState(true);
  const [openModal, setOpenModal] = useState(false);


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
        <S.Container>
          <S.Section>
            <S.Title>Solicitações</S.Title>
            <S.Header>
              <S.Option>
                <S.Op  select={opset === true ? 'true' : undefined} onClick={() =>{ console.log("true"); setOpset(true)} }>Status</S.Op>
                <S.Op select={opset === false ? 'false' : undefined} onClick={() => {setOpset(false); console.log("falseee")}}>Historico</S.Op>
              </S.Option>
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
                <ButtonConfirm Title="Novo" backgroundColor="#38AD68" fontSize="15px" width="120px" onClick={() => {nav("/novopedido")}}/>
               </S.ButtonContainer>
              </S.InsertContainer>
            </S.Header>
          </S.Section>
         {opset ?( <S.TableContainer>
            <S.StyledTable>
              <S.TableHeader>
                <S.TrHeader>
                <S.ThHeader isFirst >Status</S.ThHeader>
                <S.ThHeader>id</S.ThHeader>
                <S.ThHeader>Nome</S.ThHeader>
                <S.ThHeader>Departamento</S.ThHeader>
                <S.ThHeader >Data</S.ThHeader>       
                <S.ThHeader ></S.ThHeader>       
                <S.ThHeader isLast></S.ThHeader>       
                </S.TrHeader>
              </S.TableHeader>
              <S.TableBody>
              {filteredData.slice(offset,offset + limit).map((item, index) => (
              <S.TrBody key={index}>
                {Object.entries(item).map(([key, value], index) => (
                  <S.StyledTableCell key={index} >
                    <S.Test  status={key === 'status' ? value : undefined}>
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
                <S.StyledTableCell onClick={()=> {nav("/pedido")}}>
                   <S.ImageCell src={Folder} alt="Imagem" onClick={() => handleImageClick(item.id)} />
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
          </S.TableContainer>) 
          :
          (<S.TableContainer>
          <S.StyledTable>
            <S.TableHeader>
              <S.TrHeader>
              <S.ThHeader isFirst className={filterop === 'status' ? "Houver" : ""}>Status</S.ThHeader>
              <S.ThHeader>id</S.ThHeader>
              <S.ThHeader>Nome</S.ThHeader>
              <S.ThHeader>Departamento</S.ThHeader>
              <S.ThHeader >Data</S.ThHeader>       
              <S.ThHeader isLast></S.ThHeader>       
              </S.TrHeader>
            </S.TableHeader>
            <S.TableBody>
            {filteredData.slice(offset,offset + limit).map((item, index) => (
            <S.TrBody key={index}>
              {Object.entries(item).map(([key, value], index) => (
                <S.StyledTableCell key={index} >
                  <S.Test  status={key === 'status' ? value : undefined}>
                  {value}
                  </S.Test>
                  </S.StyledTableCell>
              ))}
              <S.StyledTableCell >
                 <S.ImageCell src={Folder} alt="Imagem" onClick={() => handleImageClick(item.id)} />
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
        </S.TableContainer>)}
        <ModalDelete isOpen={openModal} setOpenModal={() => setOpenModal(!openModal)} Title="Deseja Excluir?" Info="Após a exlusão os dados serão perdidos permanentemente " />
        </S.Container>
      </S.Main>
    </S.Body>
  );
};

export default solicitante;
