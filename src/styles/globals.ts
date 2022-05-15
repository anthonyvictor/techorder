import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        outline: none;
        box-sizing: border-box;
    }
    label,textarea,input{
        font-family: inherit;
        font-size: inherit;
    }
    a{
        color: ${props => props.theme.primary};
    }
    button{
        border: none;
        cursor: pointer;
        border-radius: 5px;
    }
    .view{
        background-color: ${(props: any) => props.theme.back};
    }
    
`