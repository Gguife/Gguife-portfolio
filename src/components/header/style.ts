import styled from "styled-components";

export const HeaderContainer = styled.header`
height: 8rem;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 2rem;
max-width: 1200px;
margin: 0 auto;

@media(max-width: 500px){
  height: 6rem;
}
`;

export const HeaderMenu = styled.div`
display: flex;
align-items: end;
gap: 1.5rem;

span{
  font-size: 2.5rem;
  font-weight: 700;

}

ul{
  display: flex;
  margin-bottom: .5rem;
  gap: 2.5rem;
  list-style: none;

  a{
    text-decoration: none;
    color: ${({theme}) => theme.text};
  }
}

@media(max-width: 750px){
  ul{
    display: none;
  }
}
@media(max-width: 500px){
  span{
    font-size: 2rem;
  }
}
`;

export const HeaderButton = styled.nav`
display: flex;
align-items: center;
justify-content: center;
gap: 2rem;


  a{
    text-decoration: none;
    padding: .5rem 2rem;
    background-color: #053B60;
    border-radius: 10px;
    color: #FFF;
    transition: .3s;

    &:hover{
      opacity: .8;
      color: ${({theme}) => theme.body};
    }
  }

@media(max-width: 500px){
  gap: .5rem;

  a{
    padding: .5rem 1rem;
    font-size: .8rem;
  }
}
`;