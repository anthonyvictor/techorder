import styled from "styled-components";

export const InputWithLabelContainer = styled.section.attrs((props: {label: string}) => props)`
        width: 100%;
        position: relative;
        label {
          position: absolute;
          top: 0.4rem;
          left: 0;
          padding-left: 0.4rem;
          color: ${(props) => props.theme.fontSub};
          transition: all 0.1s ease-in-out;
          pointer-events: none;
          
          font-size: 0.7rem;
          padding: 0;
          transform: translateY(-0.7rem);
          color: ${(props) => props.theme.backSub};
        }

        input {
          width: 100%;
          background-color: transparent;
          border: none;
          border-bottom: 1px solid black;
          padding: 5px;
        }

        small{
          
          font-size: .65rem;
        }

        &:not(.not-valid) {
          input{
            &:focus {
              color: ${(props) => props.theme.primary};
              border-bottom: 1px solid ${(props) => props.theme.primary};
            }
          }
        }
        
        &.not-valid{
          input{
            color: ${(props) => props.theme.error};
            border-bottom: 1px solid ${(props) => props.theme.error};
          }
          small{
            color: ${(props) => props.theme.error};
          }
        }
`