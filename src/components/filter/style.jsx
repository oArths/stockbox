import styled from "styled-components";
import * as I from 'iconoir-react';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    user-select: none;
    align-items: center;
    justify-content: center;
    border-radius: 10px;


`;
export const Title = styled.text`
    width: 130px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 5px 5px 5px;
    border: 1px solid rgb(182, 181, 181);
    border-radius: 10px;
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
    background-color: #ffffff;
    font-weight: 500;
    color: #333;
    width: 100%;
    border-radius: 5px;
    -webkit-box-shadow: 1px 5px 17px -7px rgba(173,170,173,0.98);
    -moz-box-shadow: 1px 5px 17px -7px rgba(173,170,173,0.98);
    box-shadow: 1px 5px 17px -7px rgba(173,170,173,0.98);

`;
export const Op = styled.text`
    font-size: 14px;
    padding: 5px 5px 4px 10px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover{
    background-color: #e0e8f0;
}
`;
export const IconConatiner = styled.div`
display: flex;
justify-content: center;
align-items: center;
align-items: center;

`;
export const Trash = styled(I.XmarkCircle)`

    width: 20px;
  color: rgb(163, 161, 161);



`;