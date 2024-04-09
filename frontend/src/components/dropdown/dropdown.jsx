import { useState } from "react";
import * as S from "./style"

const Dropdown = ({filterop, setFilterop}) => {

    const [isActive, setIsActive] = useState(false);
    const options = ["Categoria","Tipo", "Departamento" ]




return(
    <S.Container>
        <S.Title onClick={(e) => setIsActive(!isActive)}>{filterop}</S.Title>
        {isActive && (
            <S.ContainerOp>
                {options.map(options => (
            <S.Op onClick={e => {setFilterop(options), setIsActive(false)}}>{options}</S.Op>
                ))}          
        </S.ContainerOp>
        )}                     
    </S.Container>


);
}
export default Dropdown;