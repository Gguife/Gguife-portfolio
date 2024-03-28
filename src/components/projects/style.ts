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

.project-card{
  width: 100%;
  background-color: #999;
  padding: 1rem;
  border-radius: 15px 0 15px 0;
  max-height: 500px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  img{
    width: 100%;
    border-radius: 3px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
  
  h3{
    color: #000;
  }

  .desc{
    color: #555;
    font-size: .7rem;
    font-weight: 700;
  }

  .tools{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: 5px 0;
    gap: .2rem;

    .tool-axios,.tool-react,.tool-react-router-dom,
    .tool-react-icons,.tool-styled-components,
    .tool-typescript, .tool-swiper, .tool-framer-motion,
    .tool-html, .tool-css, .tool-typescript,
    .tool-formspree, .tool-phosphor-icons, .tool-javascript,
    .tool-nodejs, .tool-express, .tool-mongoose, .tool-dotenv,
    .tool-jsonwebtoken, .tool-swagger, .tool-java,
    .tool-spring-boot, .tool-spring-data-jpa, .tool-knex,
    .tool-mysql, .tool-sequelize, .tool-jest, .tool-mongodb,
    .tool-bcrypt, .tool-express-bearer-token,.tool-docker{
      background-color: #053B60;
      padding: .1rem .8rem;
      border-radius: 6px;
      font-size: .6rem;
      color: #BBB;
      font-weight: 400;
    }
  }

  a{
    color: #000;
    font-size: 1.2rem;
    padding-right: 1rem;
    
    &:hover{
      color: #4AAADA;
    }
  }
}

@media(max-width: 900px){
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
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