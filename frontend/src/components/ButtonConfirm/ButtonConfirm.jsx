import * as S from "./style";

const ButtonConfirm = ({ Title, onClick, backgroundColor, color, active, width  }) => {
  return (
      <S.Button onClick={onClick} style={ ""||{backgroundColor: backgroundColor, color: color, active: active, width: width}}  >
        {Title}
      </S.Button>
  );
};
export default ButtonConfirm;
