import styled from "styled-components";

export const HomePage = styled.section`
height: calc(100vh - 8rem);
position: relative;
display: flex;
flex-direction: column;
justify-content: center;

@media (max-height: 550px) {
  height: 30rem;
}
`;

export const HomePrincipalContent = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 20px;

.home-desc{
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  background-color: #053B60;
  max-width: 750px;
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
      right: 3rem;
      top: 11rem;  
      max-width: 300px;
      width: 100%;
    }
  }
}

@media(max-width: 500px){
  .home-desc{
    max-width: 350px;
    height: 360px;

    p{
      font-size: 1.1rem;
    }

    img{
      right: 0rem;
      top: 13rem;  
      max-width: 250px;
      width: 100%;
    }
  }
}

@media(max-width: 390px){
  .home-desc{

    img{
      right: 0rem;
      top: 13rem;  
      max-width: 220px;
      width: 100%;
    }
  }
}

@media(max-width: 380px){
  .home-desc{
    max-width: 300px;
    height: 340px;
    p{
      font-size: .9rem;
    }
    img{
      right: 0rem;
      top: 12rem;  
      max-width: 200px;
      width: 100%;
    }
  }
}
`;

export const HomeBottomContainer = styled.div`
position: absolute;
bottom: 0;
width: 100%;
display: flex;
align-items: flex-end;
justify-content: space-between;

ul{
  list-style: none;
  display: flex;
  align-items: center;
  padding: 0 20px;
  li{
    font-size: 2rem;
    padding: 10px;
    a{
      color: ${({theme}) => theme.text};
      transition: .3s;

      &:hover{
        color: purple;
      }
    }
  }
}

.fale-comigo{
  display: flex;
  align-items: center;
  padding: 20px;
  gap: 10px;
  a{
    font-weight:700;
    text-decoration: none;
    color: ${({theme}) => theme.text};
    font-size: 1.3rem;
    text-align: end;
    line-height: 20px;
    transition: .3s;

    hr{
      width: 50%;
      height: 1px;
      border: 0px;
      border-top: 3px solid purple;
    }
    &:hover{
      color: purple;
    }
  }
  .talkToMe{
    width: 50px;
  }
}

@media(max-width: 500px){
  ul{
    margin-bottom: 15px;
    li{
      font-size: 1.2rem;
      padding: 5px;
    }
  }
  
  .fale-comigo{
    gap: 5px;
    a{
      font-size: .9rem;
      line-height: 15px;
  
      hr{
        width: 50%;
      }
    }
    .talkToMe{
      width: 40px;
    }
  }
}
`;