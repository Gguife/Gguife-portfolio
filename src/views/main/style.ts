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

@media(max-width: 500px){
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
  }
}
@media(max-width: 500px){
  padding: 1rem 2rem;
  margin-bottom: 0;

  img{
    max-width: 100px;
  }
}
`;

export const MainArticleSection = styled.section`
margin-top: 2rem;
padding: 1rem;
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



export const ArticleCard = styled.div`
padding: 2rem 0;
display: flex;
justify-content: space-between;

  h1{
    font-size: var(--text-title-size);
    padding: 3rem 0;
    top: 0;  
  }

  .articles-list{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: var(--gap-small-size);
      margin: 0 0 1rem .5rem;     
          

    .article-card{
      max-width: 600px;

      span {
        font-size: var(--text-small-size);
        
        .tag {
          margin-left: .3rem;
          background-color: var(--text-second-color);
          color: #000;
          border-radius: 5px;
          padding: .1rem 1rem;
          font-wieght: 700;      
        }
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

  .article-tags {
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

  .no-articles{
    margin-bottom: 2rem;
    font-size: var(--text-small-size);
  }

  .articles-list{
    grid-template-columns: repeat(2, 1fr);
    margin: 0 0 1rem 0rem;

    .article-card{
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


  .article-tags {
    flex-direction: row;   
    margin-bottom: 1rem;   

    button {
      font-size: .7rem;
      padding: .2rem .7rem;
    }
  }
}


@media(max-width: 500px) {
  padding: .5rem 0;
  display: flex;
  align-items: start;
  flex-direction: row;
  gap: 2rem;

  .articles-list{
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: .5rem;

    .aritcle-card{
      padding-left: 0rem;

    }
  }


  .article-tags {   
    margin-bottom: 0;   
    flex-direction: column; 
  }
}
`;
