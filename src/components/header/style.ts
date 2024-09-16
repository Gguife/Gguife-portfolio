import styled from "styled-components";

export const HeaderContainer = styled.header`
height: 8rem;
background-color: #37383c;
padding: 0 2rem;
border-bottom: .2rem solid #495057;

@media(max-width: 600px){
  height: 6rem;
}
`;
  
export const HeaderContent = styled.div`
height: 8rem;
display: flex;
align-items: center;
justify-content: space-between;
max-width: 1400px;
margin: 0 auto;
  
  .logo{
    font-size: 2.5rem;
    font-weight: 700;
    color: #FaFaFa;
    text-decoration: none;
  }
    
  .header-nav{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    
    .sobre-link{
      font-size: 1.5rem;
      font-weight: 400;
          color: #FaFaFa;
    }

    ul{
      display: flex;
      list-style: none;
      gap: 1rem;
      
      li{
        padding: .5rem;
        border: 3px solid #fff;
        border-radius: 50%;
        cursor: pointer;
        transition: all ease .3s;

        a{
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          color: #FaFaFa;
        }
        
        &:hover{
          opacity: .5;
        }
      }
    }
  }


@media(max-width: 600px){
  height: 6rem;

  .logo{
    font-size: 2rem;
  }

  .header-nav{

    .sobre-link{
      display: none;
    }

  ul{
    
    li{
      a{
        font-size: 1rem;
      }
    }
  }
}
}
`;