import styled from "styled-components";
import * as I from "iconoir-react";


export const SearchContainer = styled.div`
  user-select: none;
  /* width: 100%; */
`;

export const Search = styled(I.Search)`
  width: 18px;
  position: absolute;
  margin: 3px 5px;
  color: #5b5b5c;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 30px;
  padding: 1px 10px;
  border-radius: 5px;
  border: 1px solid rgb(221, 221, 221);
  transition: all 0.5s ease;
  background-color: rgb(241, 241, 241);

  &:focus {
    border: 1.5px solid #4e8fd9;
  }

  &::-webkit-search-cancel-button {
    -webkit-appearance: none;
    appearance: none;
  }
`;
export const ContainerResults = styled.div`
  user-select: none;
  display: flex;
  flex-direction: column;
  /* position: relative; */
  /* overflow: hidden;   */
  overflow-y: auto;
  height: 100px;
  width: 100%;
  border-radius: 5px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ContainerOp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2px;
  background-color: #b7b8b9;
  font-weight: 500;
  color: #333;
`;
export const Op = styled.text`
  font-size: 14px;
  padding: 5px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #e0e8f0;
  }
`;
