import React, { useEffect, useState } from "react";
import * as S from "./style";

const Search = ({ options, placeholder, onChange }) => {
  // conts que armazena o que esta sendo pesquisado
  const [inputSearch, setInputSearch] = useState("");
  // const que armazena o a pesquisa já filtrada
  const [filterSearch, setFilterSearch] = useState([]);

  // const para normalizar as str sem acento ou varievel qualquer
  const normalizeString = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  // const que é responsavel pelo filtro
  const handleFilter = (event) => {
    const searchValue = event.target.value; //pega o valor digitado no input e armazena em searchValue que armazena em setInputSearch tmb
    setInputSearch(searchValue);

    // const responsavel por normalizar oq esta sendo pesquisado e transformar em lowerCase
    const normalizedSearch = normalizeString(searchValue.toLowerCase());
    // faz um filtro no array dos protutos e normliza eles  eles para em seguida comparar entre o que esta sendo pesquisado e as opções
    const newFilter = options.filter((value) => {
      const normalizedProduct = normalizeString(value.produto.toLowerCase());
      return normalizedProduct.includes(normalizedSearch);
    });
    // seta o valor final da filtragem em setFilterSearch
    setFilterSearch(newFilter);
  };

  // const responsavel para fechar a aba de pesquia se ela estiver vazia ja que ela so renderia se ouver algp digitado
  useEffect(() => {
    if (inputSearch === "") {
      setFilterSearch([]);
    }
  }, [inputSearch]);

  return (
    <S.Container>
      <S.SearchContainer>
        {/* <S.Search /> */}
        <S.SearchInput
          
          type="text"
          placeholder={placeholder || "Pesquise"}
          value={inputSearch}
          onChange={onChange && handleFilter}
          maxlength={40}
        ></S.SearchInput>
      </S.SearchContainer>

      {filterSearch !== 0 && (
        <S.ContainerResults>
          {filterSearch.map((value) => (
            <S.ContainerOp key={value.id}>
              <S.Op>{value.produto}</S.Op>
            </S.ContainerOp>
          ))}
        </S.ContainerResults>
      )}
    </S.Container>
  );
};

export default Search;
