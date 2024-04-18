import * as S from "./style";

const Search = ({ placeholder, onChange }) => {

  return (
        <S.SearchInput
          type="text"
          placeholder={placeholder || "Pesquise"}
          onChange={onChange || "" }
          maxlength={40}
        />
  );
};

export default Search;
