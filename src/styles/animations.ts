import { keyframes } from "styled-components";

export const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`

type RollProps = {
    xPos : number 
}

export const rollDown = (props? : RollProps) => keyframes`
    0% {
        transform: translate(${props?.xPos ? props.xPos : 0}%, -200%);
        opacity: 0%;
     }
    60% {
        transform: translate(${props?.xPos ? props.xPos : 0}% 10%);
    }
    80% {
        transform: translate(${props?.xPos ? props.xPos : 0}%, -5%);
    }
    100% {
        transform: translate(${props?.xPos ? props.xPos : 0}%, 0%);
        opacity: 100%;
    }
    `

export const rollUp = (xPos : string = '0%') => keyframes`
        0% {
            transform: translate(${xPos}, 200%);
            opacity: 0%;
         }
        60% {
            transform: translate(${xPos}, 10%);
        }
        80% {
            transform: translate(${xPos}, -5%);
        }
        100% {
            transform: translate(${xPos}, 0%);
            opacity: 100%;
        }
`

export const rollDownUp = (props? : RollProps) => keyframes`
    0% {
        transform: translate(${props?.xPos ? props.xPos : 0}%, -200%);
        opacity: 0%;
    }
    10% {
        transform: translate(${props?.xPos ? props.xPos : 0}%, 0%);
        opacity: 100%;
    }
    90% {
        transform: translate(${props?.xPos ? props.xPos : 0}%, 0%);
        opacity: 100%;
    }
    100% {
        transform: translate(${props?.xPos ? props.xPos : 0}%, -200%);
        opacity: 0%;
    }
    `