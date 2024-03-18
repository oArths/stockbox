import styled from "styled-components";

export const Container = styled.div`
    width: 400px;
    position: relative;
    user-select: none;
`;
export const Title = styled.text`
display: flex;
align-items: center;
justify-content: space-between;
padding: 15px 20px;
background-color: aliceblue;
box-shadow: 3px 3px 10px 6px rgba(0,0,0,0.06) ;
font-weight: bold;
color: #333;
cursor: pointer;

`;
export const ContainerOp = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 110%;
    left: 0px;
    padding: 10px;
    background-color: aliceblue;
    box-shadow: 3px 3px 10px 6px rgba(0,0,0,0.06) ;
    font-weight: 500;
    color: #333;
    width: 95%;

`;
export const Op = styled.text`
padding: 10px;
cursor: pointer;
transition: all 0.2s;

&:hover{
    background-color: #e0e8f0;


}
`;