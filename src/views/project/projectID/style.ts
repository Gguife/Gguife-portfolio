import styled from "styled-components";

export const ProjectSelectedSection = styled.section`
padding: 1rem;
margin: 2rem auto;

  .project-selected-content{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 0 auto;
    
    
    img{
      width: 100%;
      margin: 0 auto;
    }
      
    h2{
      font-size: 3rem;
      text-align: center;
    }
        
    p{
      color: #fff;  
    } 
      
    ul {
      list-style: none;
        
      span{
        font-size: 1.2rem;
        font-weight: 700;
        color: var(--text-link-subcolor);
        .tool-icon {
          color: var(--text-link-subcolor);
          font-size: .9rem;  
        }
      }

      li {
        color: var(--text-second-color);
      }
    }

    .project-links{
      display: flex; 
      align-items: center;
      justify-content: space-between;
      font-size: 1.2rem;
      margin-top: 2rem;
      
      a{
        display: flex;
        align-items: center;
        gap: .7rem;
        transition: .4s;
        background-color: var(--primary-soft-color);
        color: var(--text-primary-color);
        padding: .6rem 2rem;
        border-radius: 5px;
        
        &:hover {
          background-color: var(--text-link-color);
        }
      }
    }
  }



  @media(max-width: 600px){

    .project-selected-content{
        
      h2{
        font-size: var(--text-subtitle-size);
      }
        
      p{
        font-size: var(--text-small-size);
      } 
      
      ul {

        span{
          font-size: var(--text-small-size);
      
          .tool-icon {
          font-size: .6rem;  
        }
        }
        
      li {
        font-size: .7rem;
      }
    }

    .project-links{
      font-size: var(--text-small-size);
      margin-top: 1rem;
      
      a{
        gap: .7rem;
        padding: .5rem 1rem;
      }
    }
  }

  }

`;