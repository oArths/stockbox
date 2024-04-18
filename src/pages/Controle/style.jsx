import styled from "styled-components";
import * as I from "iconoir-react";

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
  gap: 30px;
`;
export const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  width: 90%;
  gap: 20px;
`;
export const SectionConatiner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
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
  font-size: 15px;
  padding: 10px;
  border-radius: 5px;
  background-color: #d9d9d9;
  cursor: pointer;
  background-color: ${(props) =>
    props.select === "true" || props.select === "false"
      ? "#277DFF"
      : "#d9d9d9"};
  color: ${(props) =>
    props.select === "true" || props.select === "false"
      ? "#ffffff"
      : "#000000"};
`;

export const InsertContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 40px;
`;
export const FilterContainer = styled.div``;
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 250px;
`;

export const TableContainer = styled.div`
  width: 90%;
  height: 900px;
  margin-bottom: 5%;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  -webkit-box-shadow: 1px 5px 17px -7px rgba(173, 170, 173, 0.98);
  -moz-box-shadow: 1px 5px 17px -7px rgba(173, 170, 173, 0.98);
  box-shadow: 1px 5px 17px -7px rgba(173, 170, 173, 0.98);
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.thead`
  background-color: #f2f2f2;
`;
export const Overflow = styled.div``;
export const ThHeader = styled.th`
  padding: 17px;
  font-weight: bold;
  text-align: center;
  border-top-left-radius: ${({ isFirst }) => (isFirst ? "5px" : "0px")};
  border-top-right-radius: ${({ isLast }) => (isLast ? "5px" : "0")};
`;

export const TrHeader = styled.tr``;

export const TableBody = styled.tbody``;
export const TrBody = styled.tr`
  &:hover {
    background-color: #fbfbfb;
  }
`;

export const ImageCell = styled.img`
    width: 25px;
  color: #0e0e0e;
`;

export const TableCell = styled.td``;

export const StyledTableCell = styled(TableCell)`
  border-bottom: 1px solid #ddd;
  padding: 20px;
  width: 80px;
  height: 30px;
  text-align: center;
`;
export const Test = styled.div`
  text-align: center;
`;

export const ItemButton = styled.button`
  width: 20px;
`;
export const Edit = styled(I.EditPencil)`
  width: 20px;
  color: #ffffff;
`;
export const Trash = styled(I.TrashSolid)`
  color: #ffffff;
  width: 20px;
`;
export const Active = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 100px;
  background-color: aqua;
`;

export const PaginationConatiner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;
  gap: 50px;
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;
export const ButtonEdit = styled.button`
  width: 30px;
  height: 30px;
  padding: 4px;
  border-radius: 5px;
  background-color: #38ad68;
  color: #ffff;
  &:active {
    transition: transform 0.2s ease;
    background-color: #2e8d56;
  }
  &:hover {
    transition: transform 0.2s ease;
    background-color: #2e8d56;
  }
`;
export const ButtonDelete = styled.button`
  width: 30px;
  height: 30px;
  padding: 4px;
  border-radius: 5px;
  background-color: #cf4848;
  color: #ffff;
  &:active {
    transition: transform 0.2s ease;
    background-color: #af3939;
  }
  &:hover {
    transition: transform 0.2s ease;
    background-color: #af3939;
  }
`;
