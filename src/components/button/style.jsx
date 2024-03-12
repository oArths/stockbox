import styled from "styled-components";
import * as M from "@mui/material/";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: brown;
  color: #880a0a;
`;
export const Button = styled(M.ButtonBase)`
  background-color: brown;
  width: 500px;
  font-size: 20px;
  color: #880a0a;
`;
