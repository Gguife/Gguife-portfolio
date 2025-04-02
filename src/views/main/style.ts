import styled from "styled-components";

export const MainPageSection = styled.main`
padding: 2rem 1rem;


.read-more {
  padding: 0 2rem;
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
position: relative;
padding: 2rem;
display: flex;
justify-content: space-between;

h1{
  text-align: start;
  font-size: var(--text-title-size);
  padding: 3rem 0;
  position: absolute;
  top: 0;  
}


.tags {
  padding: 1rem 0;
  ul {
    display: flex;
    flex-direction: column;
    gap: var(--gap-small-size);    
    text-align: end;  
    list-style: none;


    li {
      background-color: var(--primary-soft-color);      
      margin-left: .5rem;
      padding: .3rem .6rem;
      border-radius: 4px;
      cursor: pointer;
      transition: .4s;

      &:hover {
        background-color: var(--text-link-color);
      }
    }
  }

}

.articles-list{
  margin-top: 6rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--gap-small-size);
  margin-bottom: 2rem;
  

  .article-card{
    max-width: 600px;
    transition: all ease .3s;

    span {
      font-size: var(--text-small-size);
      color: var(--text-second-color); 

      .tag {
        border: 1px solid var(--text-second-color);      
        margin-left: .5rem;
        padding: .3rem .7rem;
        border-radius: 10px;
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

@media(max-width: 800px){
padding: 0rem;

  h1{
    font-size: var(--text-subtitle-size);
  }

  .articles-list{
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
    
    .article-card{
      .article-content{
        gap: .3rem;
        h3{
          font-size: var(--text-small-size);
          margin-top: .5rem;
        }
        
        p{
          font-size: var(--text-small-size);
        }
      }
    }
  }
}

@media(max-width: 500px){
  h1{
    font-size: 1.5rem;
  }

  .articles-list{
    grid-template-columns: repeat(1, 1fr);
    place-items: center;
    gap: var(--gap-medium-size);
    
    .article-card{       

      img{
        max-width: 300px;
        width: 100%;
        max-height: 150px;
      }

      .article-content{

        max-width: 300px;
        transition: all ease .3s;
      }
    }
  }
}
`;