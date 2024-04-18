import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    user-select: none;
    align-items: center;
    justify-content: center;
    position: relative;
    border-radius: 10px;
`;
export const Button = styled.button`
background-color: #38AD68;
  width: 110px;
  height: 100%;
  font-size: 20px;
  color: #fafafa;
  font-size: 15px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  -webkit-font-smoothing: subpixel-antialiased;


`;
export const ContainerOp = styled.div`
    display: flex;
    flex-direction: column;
    background-color: aliceblue;
    position: absolute;
    top: 43px;
    color: #333;
    width: 100px;
    padding: 5px;
    text-align: left;
    border-radius: 5px;
    -webkit-box-shadow: 1px 5px 17px -7px rgba(173,170,173,0.98);
-moz-box-shadow: 1px 5px 17px -7px rgba(173,170,173,0.98);
box-shadow: 1px 5px 17px -7px rgba(173,170,173,0.98);
`;
export const Op = styled.text`
    font-size: 14px;
    padding: 5px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover{
    background-color: #e0e8f0;
}
`;

