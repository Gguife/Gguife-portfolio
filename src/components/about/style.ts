import styled from 'styled-components';


//Section
export const AboutSection = styled.section`
background-color: #333;
color: #FFF;
`;

//Principal Content
export const AboutContainer = styled.div`
display: flex;
aling-items: center;
justify-content: center;
padding: 60px 20px;

@media(max-width: 900px){

}
`;


export const AboutContentDesc = styled.div`
max-width: 800px;
  
  h1{
    display: flex;
    justify-content: start;
    align-items: center;
    font-size: 1.5rem;
    gap: 1rem;
    padding: 0 0 1rem 1rem;
    .hr-title{
      background-color: #FFF;
      height: 1px;
      width: 40%;
    }
  }
  
  .desc-sobremim{
    padding: 10px;
    p{
      font-size: 1rem;
      margin-bottom: .5rem;
      span{
        color: #4AAADA;
        font-weight: 700;
      }
    }
  }
  
  .desc-estudos{
    padding: 0 10px;
    display: flex;
    gap: 1rem;
    position: relative;
    margin-bottom: 1rem; 

    .tec-title{
      margin-bottom: 1rem;
    }

    .tecnologias{
      ul{
        list-style: none;
        display: grid;
        grid-template-columns: repeat(5,1fr);
        justify-content: center;
        place-items: center;
        gap: 1rem;
                
        li{
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: start;
          gap: 1rem;

          p{
            font-size: .7rem;
          }
          .icons{
            font-size: 1rem;
          }
        }
      }
    }
  }
  
@media(max-width: 700px){
  .desc-estudos{
    padding: 10px;
    .tec-title{
      font-size: .8rem;
      
    }
    
    .tecnologias{
      ul{
        grid-template-columns: repeat(4,1fr);
      }
    }
  }  
}

@media(max-width: 550px){
  .desc-sobremim{
    p{
      font-size: .7rem;
    }
  }

  .desc-estudos{
    padding: 10px;
    .tec-title{
      font-size: .7rem;
      text-align: center;
    }
    
    .tecnologias{
      ul{
        grid-template-columns: repeat(3,1fr);
        li{
          p{
            font-size: .6rem;
          }
          .icons{
            font-size: .9rem;
          }
        }
      }
    }
  }  
}

`;