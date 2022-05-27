import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.theme.back};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    padding: 20px;

    *{
        color: ${props => props.theme.text};
    }

    .title{
        font-size: 8em;
    }

    div{
        font-size: 9em;
        *{display: inline-block;}
    }

    h3{
        font-size: 1.5rem;
    }

`