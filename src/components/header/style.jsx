import styled from "styled-components";

export const Body = styled.main`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  z-index: 1;
  overflow: hidden;
  position: absolute;
`;
export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  max-height: 78px;
  background-color: aqua;
`;
export const Logo = styled.text`
  padding: 15px;
  font-size: 20px;
`;
export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  width: 240px;
  height: 100%;
  background-color: blue;
`;
export const OpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin: 100px 30px;
  width: 70%;
  /* height: 93vh; */
  gap: 50px;
`;
export const Op = styled.text`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 22px;
  gap: 50px;
`;
