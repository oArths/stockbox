 import * as S from "./style";
import Nav from "../../components/nav/nav";
import Header from "../../components/header/header";
import { useState } from "react";
import data from "../Data/DBpedidos.json";
import Pagination from "../../components/pagination/pagination"
import { useNavigate } from "react-router-dom";
import ButtonConfirm from "../../components/ButtonConfirm/ButtonConfirm";


  const limit = 8;
  const total =  data.length;
const Pedidos = () => {
  const nav = useNavigate();

  

  const [filteredData, setFilteredData] = useState(data);
  const [offset, setOffSet] = useState(0)

 
 

  return (
    <S.Body>
      <Header />
      <S.Main>
        <Nav />
        <S.Container>
          <S.SectionConatiner>
            <S.Title>Pedidos</S.Title>
            <S.ButtonContainer>
               <ButtonConfirm Title="Finalinzar" backgroundColor="#f22b2b" fontSize="15px"  width="120px"/>
               <ButtonConfirm Title="Confirmar" backgroundColor="#38AD68" fontSize="15px" width="120px"/>
               </S.ButtonContainer>
          </S.SectionConatiner>
          
         <S.TableContainer>
            <S.StyledTable>
              <S.TableHeader>
                <S.TrHeader>
                <S.ThHeader isFirst >Foto</S.ThHeader>
                <S.ThHeader>id</S.ThHeader>
                <S.ThHeader>Nome</S.ThHeader>
                <S.ThHeader>Quantidade</S.ThHeader>
                <S.ThHeader >Categoria</S.ThHeader>       
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
        </S.Container>
      </S.Main>
    </S.Body>
  );
};

export default Pedidos;
