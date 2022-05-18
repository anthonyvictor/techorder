import styled from "styled-components";
import { rollDown } from "../../../styles/animations";

const marginSections = "30px";

export const InitialContainerStyle = styled.main`
    background-color: ${(props: any) => props.theme.container};
    border-radius: 10px;
    max-height: min(90%, 700px);
    min-height: 400px;
    overflow: auto;
    padding: 10px 20px 10px 20px;
    width: min(80%, 500px);
    transition: all 1s linear;
    box-shadow: 2px 2px 15px rgba(0,0,0,.8);
    animation: ${rollDown} .5s ease-in-out;

    
    header {
        margin: ${marginSections} 0;
        text-align: center;
      img {
          margin-bottom: 10px;
          object-fit: scale-down;
          width: min(50%, 150px);
      }
    }

    form {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 100%;
      margin-bottom: ${marginSections};

      #keep-connected-section {
        display: flex;
        flex-direction: row-reverse;
        justify-content: center;
        align-items: center;
        gap: 5px;
      }

      
      &.disabled{
        *{pointer-events: none;}
      }

      #you-are-section {
        *{
          pointer-events: fill;
          margin-right: 5px;
        }
        display: flex;
        gap: 10px;
      }
  


    }

    footer {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .techorder-logo{
        margin: 20px 0;
        display: flex;
        flex-direction: column;
        font-size: .7rem;

        img{
            width: 5rem;
            /* height: 50px; */
            object-fit: scale-down;
        }
    }
`