import * as S from "./style";

const ButtonConfirm = ({ Title, onClick, backgroundColor, color, active, width, height, fontSize  }) => {
  return (
      <S.Button onClick={onClick} style={ ""||{backgroundColor: backgroundColor, color: color, active: active, width: width, height: height, fontSize: fontSize}}  >
        {Title}
      </S.Button>
  );
};
export default ButtonConfirm;
