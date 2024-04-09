import styled, { css }  from "styled-components";


export const Body = styled.ul`
display: flex;
flex-direction: row;
gap: 5px;
padding: 20px;
`;
export const Button = styled.button`
    background-color: #ffffff;
    color: #333333;
    border: 1px solid #cccccc;
    padding: 8px 16px;
    margin-right: 8px;
    cursor: pointer;

${(props) =>
        props.active &&
        css`
            background-color: #333333;
            color: #ffffff;
            border: 1px solid #ffffff;
        `}
`;