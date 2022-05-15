import styled from "styled-components";
import backImg from '../../../assets/images/login-background.jpg'

export const LoginRegisterContainerStyle = styled.div`
  align-items: center;
  background-image: url(${backImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: ${(props: any) => props.theme.back};
  display: flex;
  height: 100vh;
  justify-content: center;
  min-width: 300px;
  width: 100vw;

  *:not(a){
    color: ${props => props.theme.text};
    user-select: none;
  }

`