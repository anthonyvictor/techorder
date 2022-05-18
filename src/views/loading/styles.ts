import styled from 'styled-components';
import { spin } from '../../styles/animations';

export const Container = styled.header`
    width: 100vw;
    height: 100vh;
    background-color: ${(props: any) => props.theme.back};
    display: flex;
    justify-content: center;
    align-items: center;
    
    .loader{
    border: 16px solid ${(props: any) => props.theme.text};
    border-top: 16px solid ${(props: any) => props.theme.back};
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: ${spin} 2s linear infinite;
    }
`