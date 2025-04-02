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
      border-radius: 10px;
    }
      
    h2{
      font-size: 3rem;
      color: #f67f01;
    }
        
    p{
      color: #DDDD;
      
      } 
      
      ul {
        list-style: none;
        
        span{
          font-size: 1.2rem;
          font-weight: 700;
          .tool-icon {
          color: #f67f01;
          font-size: .9rem;  
        }
        }
        
      li {
        color: #999;
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
        color: #FFF;
        transition: .4s;
        background-color: #f67f01;;
        color: #000;
        padding: .6rem 2rem;
        border-radius: 5px;
        
        &:hover {
          background-color: #FFF;
        }
      }
    }
  }



  @media(max-width: 600px){

    .project-selected-content{
        
      h2{
        font-size: 2.5rem;
      }
        
      p{
        color: #DDDD;
        font-size: .8rem;
      } 
      
      ul {

        span{
          font-size: .9rem;
      
          .tool-icon {
          font-size: .6rem;  
        }
        }
        
      li {
        font-size: .7rem;
      }
    }

    .project-links{
      font-size: .9rem;
      margin-top: 1rem;
      
      a{
        gap: .7rem;
        padding: .5rem 1rem;
      }
    }
  }

  }

`;