import styled from "styled-components";

export const ProjectSection = styled.section`
margin-top: 2rem;
padding: 2rem;
margin-bottom: 2rem;

  h1{
    font-size: var(--text-title-size);
    text-align: start;
    margin-bottom: 1rem;
  }

@media(max-width: 800px){
  margin-top: 1rem;
  padding: 1rem;
  
  h1 {
    font-size: var(--text-subtitle-size);
    text-align: center;
  }

  .read-more {
    font-size: .7rem;
    padding-left: 2rem;
  }
}

@media(max-width: 530px){
  margin-bottom: 1rem;
  h1 {
    font-size: var(--text-medium-size);
  }

  .read-more {
    font-size: .7rem;
    padding-left: 1rem;
  }
}
`;


export const ProjectsCard = styled.div`
padding: 2rem 0rem;
display: flex;
justify-content: space-between;

.projects-list{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--gap-small-size);
  margin: 0 0 1rem .5rem;
  

  .project-card{
    max-width: 600px;

    span {
      font-size: var(--text-small-size);
      background-color: var(--text-second-color);
      color: #000;
      font-wieght: 700;      
      padding: .1rem 1rem;
      border-radius: 5px;
    }

    h3{
      font-size: var(--text-medium-size);
      color: var(--text-primary-color);
      margin-top: .7rem;

      .read-about {
        padding-left: 1rem;
      }
    }
    
    p{
      font-size: var(--text-medium-size);
      color: var(--text-second-color);
      line-height: .9rem;
      padding: .4rem 0 .7rem 0;
      max-width: 400px;
    }
  }
}


.project-categories {
  display: flex;
  flex-direction: column;
  gap: var(--gap-small-size);    
  
  button {
    border: none;
    font-size: var(--text-medium-size);
    padding: .2rem .4rem .2rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: .4s;
  }
}


@media(max-width: 800px){
  flex-direction: column;
  align-items: center;
  padding: 1rem 0rem;

  .no-projects{
    margin-bottom: 2rem;
    font-size: var(--text-small-size);
  }

  .projects-list{
    grid-template-columns: repeat(2, 1fr);
    margin: 0 0 1rem 0rem;

    .project-card{
      padding-left: 1rem;
      
      span {
        font-size: .6rem;
        padding: .2rem .7rem;
        border-radius: 3px;
      }

      h3{
        font-size: var(--text-small-size);

        .read-about {
          font-size: .7rem;
          padding-left: .3rem;
        }
      }
      
      p{
        font-size: var(--text-small-size);
      }
    }
  }


  .project-categories {
    flex-direction: row;   
    margin-bottom: 1rem;   

    button {
      font-size: .7rem;
      padding: .2rem .7rem;
    }
  }
}


@media(max-width: 500px) {
  padding: 1rem;
  display: flex;
  align-items: start;
  flex-direction: row;

  .projects-list{
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: .5rem;

    .project-card{
      padding-left: 0rem;

    }
  }


  .project-categories {   
    margin-bottom: 0;   
    flex-direction: column; 
  }

}

`;