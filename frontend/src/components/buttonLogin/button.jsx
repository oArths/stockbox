import * as S from "./style";

const Button = ({ Title, onClick }) => {
  return (
      <S.Button onClick={onClick}  >
        {Title}
      </S.Button>
  );
};
export default Button;
