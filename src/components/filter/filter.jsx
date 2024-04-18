import { useState } from "react";
import * as S from "./style"

const Filter = ({filterop, setFilterop}) => {

    const [isActive, setIsActive] = useState(false);
    const options = ["Data","Id", "Departamento", "Status", "Nome"]




return(
    <S.Container>
        <S.Title onClick={(e) => setIsActive(!isActive)}>{filterop}
        <S.IconConatiner onClick={()=> {setIsActive(false); setFilterop("Filtro")}}>           
         <S.Trash/>     
         </S.IconConatiner>     
         </S.Title>  
        {isActive && (
            <S.ContainerOp>
                {options.map(options => (
            <S.Op onClick={e => {setFilterop(options), setIsActive(false)}}>{options} </S.Op>
                ))}
        </S.ContainerOp>
        )} 
        
    </S.Container>


);
}
export default Filter;