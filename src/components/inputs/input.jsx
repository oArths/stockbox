import React from "react";
import * as S from "./style";

const Input = ({ maxLength, rows, id,type,placeholder, onChange }) => {
  return (
      <S.Input 
      id={id || ""}
      type={type || "text"} 
      placeholder={placeholder || "Nome"}
      onChange={onChange}
      rows={rows || ""}
      maxLength={maxLength || ""}
      />
  );
};

export default Input;
