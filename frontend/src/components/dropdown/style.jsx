import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    user-select: none;
    align-items: center;
    border-radius: 10px;

`;
export const Title = styled.text`
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 10px;
    border: 0.5px solid rgb(182, 181, 181);
    border-radius: 10px;
    box-shadow: 3px 3px 5px 1px rgba(0,0,0,0.06) ;
    font-size: 15px;
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
    box-shadow: 3px 3px 5px 1px rgba(0,0,0,0.06) ;
    font-weight: 500;
    color: #333;
    width: 80%;

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