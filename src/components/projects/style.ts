import styled from "styled-components";

export const ProjectSection = styled.section`
max-width: 1200px;
margin: 0 auto;
padding: 2rem 0;


h1{
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
  background-color: ${({theme}) => theme.body};
  border: 2px solid #053B60;
  border-radius: 5px;
  color: ${({theme}) => theme.text};
  font-weight: 700;
  cursor: pointer;
  transition: .4s;
  
}

.active-button{
  background-color: #053B60;
  color: #FFF;
}


@media(max-width: 500px){
  gap: 2rem;
  
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
    transition: all ease .3s;

    &:hover {
      img, h3, .desc, .tools {
        display: none;
      }
    }

    img {
      width: 100%;
      border-radius: 3px;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    }

    h3 {
      color: #000;
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
      gap: .6rem;

      .tool-react, .tool-html, .tool-css, .tool-typescript,
      .tool-javascript, .tool-nodejs, .tool-swagger, .tool-java,
      .tool-spring-boot, .tool-mysql, .tool-sequelize, .tool-jest,
      .tool-mongodb, .tool-docker {
        background-color: ${({ theme }) => theme.body};
        padding: .3rem .8rem;
        border-radius: 6px;
        font-size: .6rem;
        color: ${({ theme }) => theme.text};
        font-weight: 400;
      }
    }

    .eye-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 4rem;
      color: #053B60;
      opacity: 0;
      transition: opacity 0.3s ease;
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
      font-size: 1.2rem;
    }
    p{
      font-size: .9rem;
      margin: .2rem 0;
    }
    a{
      font-size: 1.2rem;
      padding-right: .5rem;      
    }
  
  }
}
`;

export const ProjectCardDesc = styled.div<{ show: boolean }>`
display: block;
background-color: ${({theme}) => theme.body};
position: fixed;
right: ${props => props.show ? "0" : "-60rem"};
top: 0;
bottom: 0;
width: 50%;
border-radius: 10px 0 0 10px;
transition: all ease .5s;
z-index: 99999;
box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
display: flex;

.closeIcon{
  position: absolute;
  left: 1.5rem;
  top: 1.5rem;
  font-size: 2rem;
  cursor: pointer; 
  z-index: 99999;   
}

.details-container{
  display: flex;
  flex-direction:column;
  justify-content: space-between;
  padding: 1.5rem 1.5rem;
  height: 100%;
  

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
        font-size: 1rem;
        font-weight: 400;
        color: #555;
      }
    }
      
  }
  
  .project-container-tools{
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
    background-color: #053B60;
    padding: .5rem 1.2rem;
    border-radius: 10px 0 10px 0;
    box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
    text-decoration: none;
    transition: .3s;
    
    &:hover{
      background-color: ${({theme}) => theme.body};
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

@media(max-width: 400px){
  .details-container{
    padding: 1.5rem;

    .subtitle{
      font-size: .7rem;
      margin-bottom: 1rem;
    }
  
    .project-container-tools{
      display: none;
    }
  
    img{
      margin: 3rem 0 1rem 0;
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