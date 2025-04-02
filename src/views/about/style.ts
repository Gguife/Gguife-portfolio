import styled from "styled-components";

export const AboutSection = styled.div`
background-color: var(--primary-soft-color);
`;

export const AboutMainContent = styled.div`
display: flex;
align-items: center;
flex-direction: column;
background-color: var(--primary-color);

  h1{
    margin-top: 5rem;
    font-size: 5rem;
    font-weight: 400;
  }
    
  p{
    font-weight: 700;
    font-size: 2.5rem;
    margin-bottom: 5rem;
    color: var(--text-link-color);
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
      max-height: 300px;
      object-fit: cover;
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
      max-width: 150px;
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
      max-width: 160px;
    }
  }
}
`;


export const AboutContainer = styled.div`
padding: 10rem 0 2rem 0;
max-width: 1300px;
margin: 0 auto;

h1{
  font-size: var(--text-subtitle-size);
  padding: 2rem 0;
  text-align: center;
  font-weight: 700;
  
  .loc-icon{
    font-size: var(--text-subtitle-size);
    margin-right: .6rem;
  }
}

@media(max-width: 800px){
  padding-top: 6rem;
}
`;


export const AboutContentDesc = styled.div`
display: block;  
padding: 0 2rem;
  .desc-sobremim{
    p{
      font-size: 1.2rem;
      line-height: 25px;

      span{
        color: var(--text-link-test);
        font-weight: 700;
      }
    }
  }
  
  .desc-estudos{
    padding: 2rem;

    .tecnologias{
      ul{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
        gap: .8rem;
       
        list-style: none;
                
        li{
          display: flex;
          align-items: center;
          justify-content: start;
          gap: .5rem;

          p{
            font-size: 1rem;
          }
          .icons{
            font-size: 1.5rem;
            color: var(--text-link-color);
          }
        }
      }
    }
  }

@media(max-width: 800px){
  .desc-sobremim{
    p{
      font-size: 1rem;
      line-height: 20px;
    }
  }
  
  .desc-estudos{
    .tecnologias{
      ul{       
        li{
          p{
            font-size: 1rem;
          }
          .icons{
            font-size: 1rem;
          }
        }
      }
    }
  }
}

@media(max-width: 578px){
  .desc-sobremim{
    p{
      font-size: .9rem;
      line-height: 20px;
    }
  }
  
  .desc-estudos{
    .tecnologias{
      ul{  
        display: grid;
        grid-template-columns: repeat(3, 1fr);     
        li{
          p{
            font-size: .8em;
          }
          .icons{
            font-size: .7rem;
          }
        }
      }
    }
  }
}
`;