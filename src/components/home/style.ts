import styled from "styled-components";

export const HomePage = styled.section`
height: calc(100vh - 8rem);
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
`;

export const HomePrincipalContent = styled.div`
display: flex;
justify-content: center;
align-items: center;

.home-desc{
  position: relative;
  background-color: #053B60;
  color: #FFF;
  padding: 20px 30px;
  padding-right: 150px;
  border-radius: 5px;
  span{
    font-size: 2rem;
  }
  img{
    position: absolute;
    top: -60px;
    right: -110px;
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
`;