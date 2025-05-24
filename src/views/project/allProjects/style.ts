import styled from "styled-components";

export const ProjectsSection = styled.section`
padding: 2rem 1rem;
`;

export const ProjectsCards = styled.div`

  .project-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--gap-medium-size);
    padding: 1rem;

    .project {
      background-color: var(--primary-soft-color); 
      display: flex;
      flex-direction: column;   
      border-radius: 5px;    
      max-width: 500px;


      .project-image {
        height: 250px;
        overflow: hidden; 
        position: relative;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.5s ease;
          transform: scale(1);
        }

        &:hover img {
          transform: scale(1.1); 
        }
      } 

      .project-desc {
        padding: .3rem 1rem;
        margin-bottom: .5rem;
        
        h3 {
          margin-top: .7rem;
          font-size: var(--text-medium-size);
        }
          
        p {
          margin: .2rem 0 .7rem 0;
          font-size: var(--text-small-size);
        }


        ul {
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          gap: .4rem;
          margin-bottom: .5rem;
          li {
            background-color: var(--primary-color);
            padding: .4rem .7rem;
            font-size: .7rem;   
            border-radius: 3px;     
            gap: .2rem;
          }
        }
      }
    }
  }



@media(max-width: 800px) {
  .project-list {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--gap-medium-size);
    padding: 0;

    .project {
      max-width: 500px;

      .project-image {
        height: 200px;
      } 


      .project-desc {
        h3 {
          font-size: var(--text-medium-size);
        }
          
        p {
          font-size: var(--text-small-size);
        }
      }
    }
  }
}



@media(max-width: 600px) {
  .project-list {
    grid-template-columns: repeat(1, 1fr);

    .project {
      max-width: 600px;


      .project-image {
        height: 150px;
      } 
    }
  }
}

@media(max-width: 400px) {
  .project-list {
    .project {

      .project-image {
        height: 130px;
      } 


      .project-desc {
        padding-bottom: 1rem;

        h3 {
          font-size: var(--text-small-size);
        }
          
        p {
          font-size: .7rem;
        }

        a{
          font-size: .7rem; 
        }
      }
    }
  }
}
`;