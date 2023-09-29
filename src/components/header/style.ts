import styled from "styled-components";
import { keyframes } from 'styled-components';

export const HeaderContainer = styled.header`
height: 8rem;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 2rem;
box-shadow: rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px;

.logo{
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 1.5rem;
  .linha-vertical{
    background-color: #999;
    width: 1px;
    height: 50px;
  }
  span{
    font-weight: 700;
    letter-spacing: 2px;
    font-size: .7rem;
  }
}


`;


export const HeaderMenu = styled.nav`
margin-right: 5rem;

ul{
  list-style: none;
  display: flex;
  li{
    margin-right: 3rem;
    a{
      text-decoration: none;
      font-size: 1rem;
      font-weight: 700;
      color: purple;
      transition: .3s;
      
      &:hover{
        color: ${({theme}) => theme.text};
      }
    }
  }
}

@media (max-width: 800px){
  display: none;
}
`;

const slideDown = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
`;

const slideUp = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
`;

export const HeaderMobileMenu = styled.nav`
display: none;
@media(max-width: 800px) {
  position: absolute;
  background-color: #999;
  height: 100vh;
  width: 100%;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: .95;
  transform: translateY(-100%);
  animation-duration: 0.5s;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
  
  ul{
    list-style: none;
    text-align: center;
    li{
      margin-bottom: 1rem;
      a{
        text-decoration: none;
        color: #000;
        font-weight: 700;
        font-size: 1.3rem;
      }
    }
  }
  .closeBtn{
    position: absolute;
    bottom: 4rem;
    background-color: transparent;
    border: none;
    font-size: 3rem;
  }
  &.menu-open {
    animation-name: ${slideDown}; // Inicia a animação de descer
  }
  
  &.menu-closed {
    animation-name: ${slideUp}; // Inicia a animação de subir
  }
  
}
`;

export const MobileButton = styled.div`
display: none;

@media (max-width: 800px){
  display: flex;
  margin-right: 4rem;

  .openBtn{
    background-color: transparent;
    border: 0;
    font-size: 2rem;
    color: ${({theme}) => theme.text};
  }
}

`;