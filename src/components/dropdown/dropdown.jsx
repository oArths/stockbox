import { useNavigate } from "react-router-dom";
import { useState } from "react";
import * as S from "./style"

const Dropdown = ({  Title, OP1,OP2,  onClickOP1, onClickOP2,onClickOP3, OP3, PlusOP }) => {

    const [isActive, setIsActive] = useState(false);
    const nav = useNavigate();




return(
    <S.Container>
        <S.Button onClick={(e) => setIsActive(!isActive)}>
            {Title}
        </S.Button>
        {isActive && (
            <S.ContainerOp>
                <S.Op onClick={onClickOP1}>{OP1}</S.Op>
                <S.Op onClick={onClickOP2}>{OP2}</S.Op>
                {PlusOP == true ?(<S.Op onClick={onClickOP3}>{OP3}</S.Op>) : (<div></div>)}
            </S.ContainerOp>
        )}  
    </S.Container>


);
}
export default Dropdown;