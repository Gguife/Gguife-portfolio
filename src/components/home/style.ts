import styled from "styled-components";

export const HomePage = styled.section`
height: calc(100dvh - 8rem);
position: relative;
display: flex;
flex-direction: column;
justify-content: center;

@media (max-height: 550px) {
  height: 30rem;
}

@media (max-width: 550px) {
  height: calc(100dvh - 6rem);
}
`;

export const HomePrincipalContent = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 20px;

.home-desc{
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  background-color: #053B60;
  max-width: 800px;
  width: 100%;
  height: 250px;
  color: #FFF;
  padding: 2rem;
  padding-right: 150px;
  border-radius: 5px;
  
  span{
    font-size: 2rem;
    margin-bottom: 1rem;
    line-height: 2rem;
  }
  img{
    position: absolute;
    right: -1rem;
    top: -3rem;
  }
}

@media(max-width: 700px){
  .home-desc{
    algin-items: start;
    justify-content: start;
    max-width: 400px;
    height: 360px;
    margin-bottom: 100px;
    padding: 30px;
    span{
      font-size: 1.5rem;
    }
    p{
      font-size: .9rem;
    }
    img{
      right: 0rem;
      top: 12rem;  
      max-width: 250px;
      width: 100%;
    }
  }
}

@media(max-width: 500px){ 
  padding: 0 20px;
  .home-desc{
    max-width: 330px;
    height: 330px;
    
    span{
      margin: .8rem 0 .5rem 0;
      line-height: 2rem;
    }
    p{
      font-size: .71rem;
    }
    
    img{
      max-width: 180px;
      width: 100%;
    }
  }
}

@media(max-width: 390px){
  .home-desc{
    max-width: 300px;
  }
}

@media(max-width: 375px){
  .home-desc{
    max-width: 330px;
    height: 280px;
    
    img{
      max-width: 180px;
      width: 100%;
      top: 11rem;
    }
  }
}
`;

export const HomeBottomContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
margin-top: 1rem;

ul{
  list-style: none;
  display: flex;
  align-items: center;
  padding: 0 20px;
  li{
    font-size: 1.5rem;
    padding: 5px;
    a{
      color: ${({theme}) => theme.text};
      transition: .3s;

        &:hover{
          color: #053B60;
        }
      }
    }
  }

@media(max-width: 700px){
  margin-top: 0rem;
  ul{
    li{
      font-size: 1rem;
      padding: 5px;
    }
  }
}
`;

export const ScrollDown = styled.div`
position: absolute;
bottom: 3rem;
left: 50%;
transform: translateX(-50%);

.scroll-down{
  width: 40px;
}

@media(max-width: 700px){
  bottom: 1rem;
  .scroll-down{
    width: 30px;
  }
}
`;