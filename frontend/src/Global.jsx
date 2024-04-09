import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
	margin: 0;
	padding: 0;
    font-family: 'Exo 2', sans-serif;
    border: none;
    outline: none;
    font-size: 100%;
    vertical-align: baseline;
    transition: transform 0.3s ease; 
    scroll-behavior: smooth;
}`;
