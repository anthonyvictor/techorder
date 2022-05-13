import styled from "styled-components";

export const ButtonMain = styled.button`
  background-color: ${(props) => props.theme.back};
  padding: 15px 10px;
  font-size: inherit;
  color: ${(props) => props.theme.text};
  border: 1px solid ${(props) => props.theme.back};

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      color: ${(props) => props.theme.primary};
      border: 1px solid ${(props) => props.theme.primary};
    }
  }
`;
