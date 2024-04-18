import styled from "styled-components";
export const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(0,0,0, 0.7);
    z-index: 1000;
`;
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 400px;
    height: 200px;
    background-color: aliceblue;
    gap: 20px; 
    border-radius: 10px;
    padding: 20px;
`;
export const ContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: right;
`;
export const Title = styled.text`
    font-size: 28px;
    color: black;
`
export const Info = styled.text`
    font-size: 20px;
    color: #9d9999;
`
export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:space-between`;
