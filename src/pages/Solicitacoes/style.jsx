import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
export const Main = styled.div`
  display: flex;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  width: 100%;
  height: 90vh;
`;
export const Setcion = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  width: 90%;
  gap: 20px;
`;

export const Title = styled.div`
  font-size: 35px;
  font-weight: bold;
`;
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Option = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
`;
export const Op = styled.button`
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;

  &:active {
    background-color: #d9d9d9;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 40px;
`;
export const Search = styled.input`
  height: 30px;
  padding: 5px;
  border-radius: 5px;
  border: 0.5px solid #4e8fd9;
  background-color: #e0d8d8;

  &::-webkit-search-cancel-button {
    -webkit-appearance: none;
    appearance: none;
  }
`;
