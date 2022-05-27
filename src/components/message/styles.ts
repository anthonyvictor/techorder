import styled from "styled-components";
import { IMessageProps } from ".";
import { rollDown, rollDownUp } from "../../styles/animations";


type Props = {
    mp: IMessageProps,
    timeout: number
}

export const Container = styled.div.attrs((props : Props) => props)`
    max-width: 80%;
    min-width: 150px;
    min-height: 50px;
    display: grid;
    grid-template-columns: 40px 1fr 30px;
    background-color: ${props => props.theme.container};
    box-shadow: 5px 5px 15px rgba(0,0,0,.4);
    position: absolute;
    z-index: 999;
    padding: 10px;
    top: 0;
    left: 50%;
    margin: 5px 0;
    transform: translate(-50%, -200%);
    align-self: center;
    border-radius: 20px;
    grid-gap: 10px;
    align-items: center;
    animation: ${rollDownUp({xPos: -50})} ${props => props.timeout}s ease-out; 

    *{
        color: ${props => props.theme.text}; 
    }

    .icon{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        *{
            color: ${(props) => 
        props.mp.type === 'ok' 
        ? props.theme.ok
        : props.mp.type === 'alert'
        ? props.theme.info
        : props.mp.type === 'error'
        ? props.theme.error
        : props.mp.type === 'info'
        ? props.theme.primary
        : 'black'
        };
            width: 100%;
            height: 100%;
        }
    }

    .message{
        font-size: inherit;
        font-style: bold italic;        
    }

    button{
        cursor: pointer;
        height: 30px;
        width: 100%;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`