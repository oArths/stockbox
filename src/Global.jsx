import { createGlobalStyle } from "styled-components";
import "@radix-ui/themes/styles.css";

export const GlobalStyle = createGlobalStyle`
  *{
	margin: 0;
	padding: 0;
    font-family: 'Exo 2', sans-serif;
    border: none;
    outline: none;
    font-size: 100%;
    vertical-align: baseline;
  }`;
