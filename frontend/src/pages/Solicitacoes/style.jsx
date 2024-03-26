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
export const Section = styled.div`
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
  height: 40px;
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;

  &:active {
    background-color: #d9d9d9;
  }
`;

export const InsertContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
`;
export const FilterContainer = styled.div``;
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 40px;
  width: 250px;
`;

export const TableContainer = styled.div`
  width: 90%;
  height: 900px;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

// Componente de cabeçalho da tabela
export const TableHeader = styled.thead`
  th {
    border: 1px solid #ddd;
    padding: 10px;
    background-color: #f2f2f2;
    font-weight: bold;
    text-align: left;
  }
`;

// Componente de corpo da tabela
export const TableBody = styled.tbody`
  tr {
    &:nth-child(even) {
      background-color: #f2f2f2;
    }

    &:hover {
      background-color: #ddd;
    }
  }

  td {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: left;
  }
`;