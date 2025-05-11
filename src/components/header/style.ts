import styled from "styled-components";

export const HeaderContainer = styled.header`
height: 8rem;
background-color: var(--primary-soft-color);
padding: 0 1rem;
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
    color: var(--text-primary-color);

    .logo-dev {
      color: var(--text-link-color);
    }
  }
    
  .header-nav{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--gap-medium-size);
    
      
    .internal-links {
      font-size: var(--text-subtitle-size);
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
          color: var(--text-primary-color);
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
    font-size: var(--text-subtitle-size);
  }

  .header-nav{
    gap: var(--gap-small-size);

    .internal-links {
      font-size: var(--text-medium-size);
    }

  ul{
    gap: 0;

    li{
      padding: .3rem;
      border: none;
      
      a{
        font-size: var(--text-medium-size);
      }
    }
  }
}
}
`;