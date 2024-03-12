import * as S from "./style";
import * as M from "@mui/material/";

const Button = ({ Title, color, variant, size, sx }) => {
  return (
    <S.Container>
      <M.Button variant={variant || "contained"} size={size || "large"}>
        {Title}
      </M.Button>
    </S.Container>
  );
};
export default Button;
