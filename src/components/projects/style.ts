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
padding: 2rem 0;
gap: 3rem;

button{
  padding: 1rem 1.5rem;
  background-color: ${({theme}) => theme.body};
  border: 2px solid purple;
  border-radius: 5px;
  color: ${({theme}) => theme.text};
  font-weight: 700;
  cursor: pointer;
  transition: .4s;
  
}

.active-button{
  background-color: purple;
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
  border-radius: 10px;
  
  img{
    width: 100%;
    border-radius: 3px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
  h3{
    color: purple;
  }
  p{

  }
  a{
    color: #000;
    font-size: 1.2rem;
    padding-right: 1rem;
    
    &:hover{
      color: purple;
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
    
    img{
      width: 100%;
      border-radius: 3px;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    }
    h3{
      color: purple;
    }
    p{
  
    }
    a{
      color: #000;
      font-size: 1.2rem;
      padding-right: 1rem;
      
      &:hover{
        color: purple;
      }
    }
  }
  
}
`;