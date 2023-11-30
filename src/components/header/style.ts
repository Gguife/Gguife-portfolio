import styled from "styled-components";

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

@media (max-width: 500px){
  .logo{
    gap: 5px;
    margin-left: 0rem;
    img{
      width: 50px;
    }
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
      color: ${({theme}) => theme.text};
      transition: .3s;
      
      &:hover{
        color: purple;
      }
    }
  }
}

@media (max-width: 800px){
  display: none;
}
`;