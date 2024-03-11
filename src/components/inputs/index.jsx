import { type } from "@testing-library/user-event/dist/type";
import * as  S  from "./style"


const Input = ({Title, placeholder, type}) => {
    return(
        <S.Container>
              <S.TextTitle>{Title}</S.TextTitle>
              <S.TextInput type={type || "text"} placeholder={placeholder || "Digite seu email"} />
        </S.Container>
    )
} 
export default Input;