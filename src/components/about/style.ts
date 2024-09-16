import styled from 'styled-components';


export const AboutSection = styled.div`
background-color: #37383c;
padding: 10rem 0 2rem 0;

@media(max-width: 800px){
  padding-top: 6rem;

}
`;

export const AboutContainer = styled.section`
padding: 1rem 1rem;
  h1{
    font-size: 2rem;
    padding: 2rem 0;
    text-align: center;
    font-weight: 400;

    .loc-icon{
      font-size: 2rem;
      margin-right: .6rem;
    }
  }
`;


export const AboutContentDesc = styled.div`
display: block;  
  .desc-sobremim{
    p{
      font-size: 1.3rem;
      line-height: 30px;
      span{
        color: #f67f01;
        font-weight: 700;
      }
    }
  }
  
  .desc-estudos{
    padding: 2rem;
    gap: 1rem;
    .tecnologias{
      ul{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
        gap: 1rem;
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