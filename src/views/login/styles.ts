import styled from "styled-components";

const marginSections = "30px";

export const Container = styled.div`
  align-items: center;
  color: ${(props: any) => props.theme.back};
  display: flex;
  height: 100vh;
  justify-content: center;
  min-width: 300px;
  width: 100vw;

  *{
      user-select: none;
  }
  
  .container {
      background-color: ${(props: any) => props.theme.text};
      border-radius: 10px;
      max-height: min(80%, 600px);
      min-height: 400px;
      overflow: auto;
      padding: 40px 20px;
      width: min(80%, 500px);
      transition: all 1s linear;

    header {
      text-align: center;
      margin-bottom: ${marginSections};
      img {
        width: 100%;
        object-fit: scale-down;
        pointer-events: none;
      }
    }

    form {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 100%;
      margin-bottom: ${marginSections};

      > section{
        *{color: ${props => props.theme.back};}
      }

      #keep-connected-section {
        display: flex;
        flex-direction: row-reverse;
        justify-content: center;
        align-items: center;
        gap: 5px;
      }
    }

    footer {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
