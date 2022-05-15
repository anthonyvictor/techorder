import { keyframes } from "styled-components";

export const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`

export const rollDown = keyframes`
    0% {
        transform: translateY(-200%);
        opacity: 0%;
     }
    60% {
        transform: translateY(10%);
    }
    80% {
        transform: translateY(-5%);
    }
    100% {
        transform: translateY(0%);
        opacity: 100%;
    }
    `

export const rollUp = keyframes`
        0% {
            transform: translateY(200%);
            opacity: 0%;
         }
        60% {
            transform: translateY(10%);
        }
        80% {
            transform: translateY(-5%);
        }
        100% {
            transform: translateY(0%);
            opacity: 100%;
        }
`