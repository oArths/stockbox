import React from "react";
import * as S from "./style";

const Input = ({ type,placeholder, onChange }) => {
  return (
      <S.Input 
      type={type || "text"} 
      placeholder={placeholder || "Nome"}
      onChange={onChange}/>
  );
};

export default Input;
