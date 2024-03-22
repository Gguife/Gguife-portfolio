import styled, { css, keyframes } from 'styled-components';

//Type
interface TabContentProps {
  active: boolean;
}
interface TabButtonProps {
    active: boolean;
}

//Section
export const AboutSection = styled.section`
background-color: #333;
color: #FFF;
`;

//Principal Content
export const AboutContainer = styled.div`
display: flex;
justify-content: space-between;
max-width: 1200px;
height: 630px;
margin: 0 auto;
padding: 20px;
gap: 3rem;

@media(max-width: 900px){
  flex-direction: column;
  align-items: center;
  justify-content: center;  
  gap: 2rem;
  height: 900px;
}
`;

export const AboutContentImg = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 20px;
gap: 2rem;
height: 100%;

img{
  max-width: 1000px;
  width: 100%;
}

.button-cv{
  background-color: #222;
  border: none;
  padding: .7rem 2rem;
  border-radius: 5px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
  a{
    text-decoration: none;
    color: #4AAADA;
  }
}

@media(max-width: 900px){
  margin-top: 4rem;
  img{
    max-width: 400px;
    width: 100%;
  }
}

@media(max-width: 500px){
  margin-top: 5rem;
  img{
    max-width: 400px;
    width: 100%;
  }
  .button-cv{
    padding: .5rem 1.5rem;
    font-size: .7rem;
  }
}

`;

export const AboutContentDesc = styled.div`
width: 100%;
position: relative;
padding: 10px;
max-width: 550px;
  
  h1{
    font-size: 2.5rem;
    padding: 0 10px;
  }
  
  .desc-sobremim{
    padding: 10px;
    p{
      font-size: .8rem;
      margin-bottom: .5rem;
    }
  }
  
  .desc-estudos{
    padding: 0 10px;
    display: flex;
    gap: 1rem;
    position: relative;

    .buttons-about{
      display: flex;
      gap: 1rem;
    }

    .skills{
      max-width: 80px;
      ul{
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: .2rem;

        li{
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: start;
          gap: .2rem;
          font-size: .7rem;
          border-radius: 5px;
          padding: .2rem .3rem .2rem .4rem;
          background-color: #053B60;
        }
      }
    }
  }
  
  @media(max-width: 1000px){
    padding-top: 0rem;    
    .desc-sobremim{
    p{
      font-size: .8rem;
    }
  }
}

@media(max-width: 900px){
  .desc-estudos{
    .buttons-about{
      margin-left: 3.2rem;
    }
    .skills{
      position: absolute;
      ul{
        li{
          background-color: transparent;
          p{
            display: none;
          }
        }
      }
    }
  }
}

@media(max-width: 500px){
  h1{
    font-size: 1.3rem;
  }
  p{
    font-size: .6rem;
  }
}
`;




//List
export const TabContent = styled.ul<TabContentProps>`
padding: 10px;
display: ${(props) => (props.active ? "block" : "none")};
position: absolute;
left: 6.4rem;
  ul{
    list-style: none;
    z-index: 999;
    li{
      font-weight: 700;
      font-size: .85rem;
    }
  }
@media(max-width: 900px){
  left: 3.5rem;
}
@media(max-width: 500px){
  ul{
    li{
      font-size: .7rem;
    }
  }
}
`;

const horizontalAnimation = keyframes`
0% {
    width: 0;
}
100% {
    width: 100%;
}
`;

export const TabButton = styled.button<TabButtonProps>`
border: none;
font-size: 1rem;
font-weight: 700;
padding: 5px 5px;
background-color: transparent;
color: #999;
cursor: pointer;




${(props) =>
    props.active &&
    css`
    color: #4AAADA;
    .border-bottom{
        background-color: #4AAADA;
        border-radius: 2px;
        width: 100%;
        height: .2rem;
        animation: ${horizontalAnimation} 0.3s linear forwards;
    }
    `}
`;