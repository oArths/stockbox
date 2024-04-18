import * as S from "./style"
import React, { useState } from 'react';


const CountItem = ({ onValorChange,placeholder }) => {
  const [valor, setValor] = useState('');

  const handleChange = (event) => {
    const novoValor = event.target.value;
    if (novoValor === '' || (parseFloat(novoValor) >= 0 && !isNaN(novoValor))) {
      setValor(novoValor); 
      onValorChange(novoValor);
    }
  };    

    return(
    <S.Container>
       <S.InputInser
      type="number"
      value={valor}
      onChange={handleChange}
      placeholder={ placeholder || ""}
    />
    </S.Container>
    )
}
export default CountItem;