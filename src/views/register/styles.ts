import styled from "styled-components";

const marginSections = "50px";

export const Container = styled.div`
  align-items: center;
  color: ${(props: any) => props.theme.back};
  display: flex;
  height: 100vh;
  justify-content: center;
  min-width: 300px;
  width: 100vw;

  .container {
    background-color: ${(props: any) => props.theme.font};
    border-radius: 10px;
    max-height: min(80%, 600px);
    overflow: auto;
    padding: 40px 20px;
    width: min(80%, 500px);

    header {
      text-align: center;
      margin-bottom: ${marginSections};
      img {
        width: 100%;
        object-fit: scale-down;
      }
    }

    form {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 100%;
      margin-bottom: ${marginSections};

      section:not(#keep-connected-section) {
        width: 100%;
        position: relative;
        label {
          position: absolute;
          top: 0.4rem;
          left: 0;
          padding-left: 0.4rem;
          color: ${(props) => props.theme.fontSub};
          transition: all 0.1s ease-in-out;

          &.outside {
            font-size: 0.7rem;
            padding: 0;
            transform: translateY(-0.7rem);
            color: ${(props) => props.theme.backSub};
          }
        }

        input {
          width: 100%;
          background-color: transparent;
          border: none;
          border-bottom: 1px solid black;
          padding: 5px;

          &:focus {
            border-bottom: 1px solid ${(props) => props.theme.primary};
          }
        }
      }

      #keep-connected-section {
        display: flex;
        flex-direction: row-reverse;
        justify-content: center;
        align-items: center;
        gap: 5px;
      }

      button {
        background-color: ${(props) => props.theme.back};
        padding: 15px 10px;
        font-size: inherit;
        color: ${(props) => props.theme.font};
        border: 1px solid ${(props) => props.theme.back};

        @media (hover: hover) and (pointer: fine) {
          &:hover {
            color: ${(props) => props.theme.primary};
            border: 1px solid ${(props) => props.theme.primary};
          }
        }
      }
    }

    footer {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
