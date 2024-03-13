import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const TextTitle = styled.h2`
  font-size: 17px;
  font-weight: 400;
`;
export const TextInput = styled.input`
  width: 300px;
  height: 20px;
  padding: 5px;
  border-radius: 10px;
  border-color: #949191;
  border-width: 0.5px;
  font-size: 12px;

  &:focus {
    outline-width: 0.5px;
    outline-color: #0000ffa0;
  }
`;
