import * as  S  from "./style"
import * as M from "@mui/material/";



const Input = ({ id, label, variant, size, fullWidth, key, type}) => {
    return(
        <S.Container>
              <M.TextField
                    id={id || "outlined-basic"}
                    label={label || "Nome"}
                    variant={ variant || "outlined"}
                    size={size ||"small"}
                    fullWidth={fullWidth || ""}
                    key={key || "1"}
                    type={type || "email"}
                />
        </S.Container>
    )
} 
export default Input;