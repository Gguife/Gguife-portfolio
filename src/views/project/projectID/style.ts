import styled from "styled-components";

export const ProjectSelectedSection = styled.section`
padding: 1rem;
margin: 2rem auto;

  .project-selected-content{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 1000px;
    margin: 0 auto;
    
    
    img{
      max-width: 1000px;
      width: 100%;
      margin: 0 auto;
      box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    }
      
    h2{
      font-size: 3rem;
      color: var(--text-link-subcolor);
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
        background-color: var(--text-link-subcolor);
        color: var(--text-primary-color);
        padding: .6rem 2rem;
        border-radius: 5px;
        
        &:hover {
          background-color: var(--primary-soft-color);
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