import styled from "styled-components";

export const Container = styled.div`
  width: 240px;
  max-height: 900px;
  background-color: #f4f7ff;
  display: flex;
  justify-content: center;
  align-items: start;
`;

export const OpConatiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: justify;
  gap: 20px;
  margin-top: 15px;
  width: 90%;
  user-select: none;
`;
export const Op = styled.text`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 22px;
  padding-left: 20px;
  width: 90%;
  height: 45px;
  gap: 50px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    color: #0f465c;
    border-radius: 5px;
    background-color: #7ec1db;
  }
`;
