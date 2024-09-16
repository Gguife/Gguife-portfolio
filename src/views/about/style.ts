import styled from "styled-components";

export const AboutMainContent = styled.div`
display: flex;
align-items: center;
flex-direction: column;


  h1{
    margin-top: 5rem;
    font-size: 5rem;
    font-weight: 400;
  }
    
  p{
    font-weight: 700;
    font-size: 3rem;
    margin-bottom: 5rem;
  }
  
  .about-logo{
    position: relative;
    width: 100%;
    margin-top: 10rem;
    z-index: 9999;

    .center-line{
      background-color: #495057;
      width: 100%;
      height: 3px;
    }
    img{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      max-width: 300px;
      border: 8px solid #495057;
      border-radius: 50%;
    }
  }

@media(max-width: 800px){
  h1{
    font-size: 3rem;
    font-weight: 400;
  }
    
  p{
    font-size: 2rem;
    margin-bottom: 0rem;
  }

  .about-logo{ 
    img{
      max-width: 200px;
    }
  }
}

@media(max-width: 500px){
  h1{
    font-size: 2rem;
    font-weight: 400;
  }
    
  p{
    font-size: 1.5rem;
    margin-bottom: 0rem;
  }

  .about-logo{ 
    img{
      max-width: 200px;
    }
  }
}
`;