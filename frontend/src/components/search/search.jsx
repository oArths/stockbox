import * as S from "./style";

const Search = ({ placeholder, onChange }) => {

  return (
    <S.Container>
      <S.SearchContainer>
        <S.SearchInput
          
          type="text"
          placeholder={placeholder || "Pesquise"}
          onChange={onChange || "" }
          maxlength={40}
        ></S.SearchInput>
      </S.SearchContainer>
    </S.Container>
  );
};

export default Search;
