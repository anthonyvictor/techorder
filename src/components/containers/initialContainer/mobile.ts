import styled, { createGlobalStyle } from "styled-components";
import { sizes } from "../../../styles/sizes";
import { InitialContainerStyle } from "./styles";


export const Mobile = createGlobalStyle`
    @media (max-width: ${sizes.mobile}){


    footer {
        /* display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px; */
        flex-direction: column;
    }
    }
`

// export const mobile = styled(InitialContainerStyle)`
    
// `