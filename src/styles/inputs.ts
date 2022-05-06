import styled from "styled-components";

export const InputWithLabelContainer = styled.input.attrs((props: {label: string}) => props)`
    /* padding: .7rem 0; */

    &::after{
        content: 'fodase';//${(props) => props.label};
        z-index: 999;
        color: black;
        /* position: absolute; */
        /* top: 0;
        left: 0; */
        font-size: 1rem; 
    }
`