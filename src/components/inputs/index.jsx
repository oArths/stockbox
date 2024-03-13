import React from "react";
import * as S from "./style";

const Input = ({ type,placeholder }) => {
  return (
      <S.Input 
      type={type || "text"} 
      placeholder={placeholder || "Nome"}/>
  );
};

export default Input;
