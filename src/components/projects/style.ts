import styled from "styled-components";

export const ProjectSection = styled.main`
padding: 3rem;
h1{
  font-size: 3rem;
  text-align: center;
}
`;

export const ProjectButton = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 2rem 0 4rem 0;
gap: 3rem;

button{
  padding: 1rem 1.5rem;
  background-color: #FFF;
  border: 2px solid #053B60;
  border-radius: 5px;
  color: #000;
  font-weight: 700;
  cursor: pointer;
  transition: .4s;
  
}

.active-button{
  background-color: #f67f01;
  color: #FFF;
}


@media(max-width: 500px){
  gap: .5rem;
  
  button{
    padding: .8rem 1rem; 
  }
}
`;

export const ProjectCard = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
place-items: start;
padding: 10px;
gap: 3rem;

  .project-card {
    position: relative;
    width: 100%;
    background-color: #999;
    padding: 1rem;
    border-radius: 15px 0 15px 0;
    max-height: 500px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    gap: .5rem;

    &:hover {
      img, h3, .desc, .tools {
        opacity: .1;
      }
    }

    img {
      width: 100%;
      border-radius: 3px;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    }

    h3 {
      color: #000;
      font-size: 1.1rem;
    }

    .desc {
      color: #555;
      font-size: .7rem;
      font-weight: 700;
    }

    .tools {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      margin: 5px 0;
      gap: .3rem;

      .tool-react, .tool-html, .tool-css, .tool-typescript,
      .tool-javascript, .tool-nodejs, .tool-swagger, .tool-java,
      .tool-spring-boot, .tool-mysql, .tool-sequelize, .tool-jest,
      .tool-mongodb, .tool-docker, .tool-docker-compose, .tool-redis, .tool-postgresql {
        background-color: #25262a;
        padding: .3rem .8rem;
        border-radius: 4px;
        font-size: .6rem;
        color: #FFF;
        font-weight: 400;
      }
    }

    .eye-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 5rem;
      color: #053B60;
      opacity: 0;
      transition: opacity 0.5s ease;
    }

    &:hover .eye-icon {
      opacity: 1;
    }
  }


@media(max-width: 900px){
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  .eye-icon{
    display: none;
  }

  .project-card {
   
    &:hover {
      img, h3, .desc, .tools {
        display: flex;
      }
    }
  }
}

@media(max-width: 500px){
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  place-items: center;
  justify-content: center;
  
  .project-card{
    width: 80%;
    h3{
      font-size: .9rem;
    }
    p{
      font-size: .7rem;
      margin: .1rem 0;
    }
  }
}
`;

export const ProjectCardDesc = styled.div<{ show: boolean }>`
display: block;
background-color: #25262a;
position: fixed;
right: ${props => props.show ? "0" : "-100rem"};
top: 0;
bottom: 0;
width: 100dvh;
border-radius: 10px 0 0 10px;
transition: all ease .5s;
z-index: 99999;
box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
display: flex;
align-items: center;

.closeIcon{
  font-size: 2rem;
  margin-left: 2rem;
  cursor: pointer; 
  z-index: 99999;
}

.details-container{
  display: flex;
  flex-direction:column;
  justify-content: space-between;
  padding: 0 1.5rem;
  gap: 2rem;
  

  .top-contianer{
    img{
      width: 100%;
      margin-top: 3rem;
      border-radius: 10px;
    }
      
    h3{
      font-size: 1.3rem;
      display: flex;
      flex-direction: column;
      .subtitle{
        font-size: .8rem;
        font-weight: 400;
        color: #555;
      }
    } 
  }
  
  .project-container-main{
    .project-container-desc{
      margin-bottom: .5rem;
      font-size: .9rem;
    }
    .tools-title{
      color: #FF7F50;
      font-weight: 700;
    }
    .project-container-tools{
      font-size: .8rem;
      padding-left: 1.5rem;
      display: flex;
      flex-direction: column;
      .tool{
        color: #555;
      }
    }
  }

  a{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
    color: #FFF;
    background-color: #f67f01;
    padding: .5rem 1.2rem;
    border-radius: 10px 0 10px 0;
    text-decoration: none;
    transition: .3s;
    
    &:hover{
      background-color: #37383c;
      color: #FFF;
    }

    .link-icon{
      font-size: 1.2rem;
      margin-left: 10px;
    }
  }
}


@media(max-width: 1100px){
  .closeIcon{
    left: 1rem;
  }

  .details-container{
    padding: 1.5rem;
  
  
    img{
      margin: 5rem 0 1rem 0;
    }
      
    .project-container-desc{
      margin: 1rem 0 4rem 0;
      font-size: .9rem;
    }
  }
}

@media(max-width: 900px){
  width: 100%;
}

@media(max-width: 500px){
  .details-container{
    gap: 1rem;

    .top-contianer{ 
      img{
        margin: 0rem 0 0rem 0;
      }
      h3{
        padding-top: .5rem;
        font-size: 1rem;
        .subtitle{
          font-size: .7rem;
        }
      } 
    }
    
    .project-container-main{
      margin-bottom: .2rem;
      
      .project-container-desc{
        font-size: .7rem;
        margin-bottom: .2rem;
        }
        .tools-title{
        color: #FF7F50;
        font-weight: 700;
        font-size: .9rem;
      }
      .project-container-tools{
        font-size: .7rem;
      }
    }
    
    .project-container-desc{
      margin: 0rem 0 2rem 0;
      font-size: .7rem;
    }

    a{
      font-size: .8rem;
    }
  }
}
`;