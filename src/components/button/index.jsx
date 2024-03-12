import * as S from "./style";
// import * as M from "@mui/material/";

const Button = ({ Title, color, variant, size, disableRipple }) => {
  return (
    <S.Container>
      <S.Button variant={variant || "contained"} size={size || "large"} disableRipple={disableRipple || ""}>
        {Title}
      </S.Button>
    </S.Container>
  );
};
export default Button;
