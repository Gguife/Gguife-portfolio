import styled from "styled-components";

export const MainPageSection = styled.main`
padding: 2rem 1rem;


.read-more {
  padding: 0 2rem;
}

@media(max-width: 800px){
  .read-more {
    font-size: var(--text-small-size);
  }
}
`;

export const MainAboutMeCard = styled.div`
background-color: var(--primary-soft-color);
padding: 2rem 3rem;
border-radius: 5px;
display: flex;
gap: var(--gap-high-size);
margin: 2rem 0;


.main-about-description{
  display: flex;
  flex-direction: column;
  gap: var(--gap-small-size);

  h3{
    display: flex;
    flex-direction: column;
    font-size: var(--text-subtitle-size);
 
    span{
      font-size: var(--text-small-size);
      opacity: .7;
      font-weight: 400;
    }
  }
  
  p{
    line-height: 25px;
    font-size: var(--text-medium-size);
    margin-bottom: 2rem;
  }


  .techs-card {
    display: flex;
    align-items:center;
    justify-content: center;

    .tech {
      ul {
        display: flex;
        list-style: none;
        gap: 1rem;
        align-items: center;
        justify-content: center;

        li{ 
          font-size: 1.1rem;
        }
      }
    }
  }
}


@media(max-width: 930px){
  align-items: center;
  flex-direction: column;
  gap: var(--gap-small-size);

  img{
    max-width: 150px;
  }

  .main-about-description{
    align-items: center;
    justify-content: center:
    flex-direction: column;
    text-align: center;

    h3{
      font-size: var(--text-medium-size);
      span{
        font-size: .6rem;
      }
    }

    p{
      font-size: var(--text-small-size);
      line-height: 1rem;
      text-align: center;
      margin-bottom: .7rem;
    }


    .techs-card {
      .tech {
        ul {
          gap: .7rem;
          li{ 
            font-size: .8rem;
          }
        }
      }
    }
  }



}


@media(max-width: 500px){
  padding: 1rem 2rem;
  margin-bottom: 0;

  img{
    max-width: 100px;
  }

  .main-about-description {
    .techs-card {
      .tech {
        ul {
          li{ 
            font-size: .6rem;
          }
        }
      }
    }
  }
}
`;

export const ArticlesSection = styled.div`
  background-color: var(--primary-soft-color);
  padding: 2rem 0;
`;

export const ProjectsSection = styled.div`
  padding: 2rem 0;
`;