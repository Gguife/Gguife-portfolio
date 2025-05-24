import styled from "styled-components";

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
padding: 1rem 0;
display: flex;
justify-content: space-between;
gap: 1rem;

  h1{
    font-size: var(--text-title-size);
    padding: 3rem 0;
    top: 0;  
  }

  .articles-list{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--gap-medium-size);
    
    .article-card {
      display: flex;
      border-radius: 5px;
      background-color: var(--primary-color);

        .article-image {
          width: 300px;
          height: 200px;
          border-radius: 5px 0 0 5px;
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
      }
      
    
    .article-desc {
      position: relative;
      width: 100%;
      padding: 1rem;

      span {
        font-size: var(--text-small-size);

        .tag {
          margin-left: 10px;
          font-size: var(--text-small-size);
          background-color: var(--text-second-color);
          color: #000;
          font-wieght: 700;      
          padding: .1rem 1rem;
          border-radius: 5px;
        }
      }

      h3 {
        margin: .5rem 0 .7rem 0;
      }

      p{
        font-size: var(--text-small-size);
      }

      a {
        position: absolute;
        bottom: 10px;  
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
  




@media(max-width: 1000px){
  padding: 1rem 0rem;
  flex-direction: column;

  .articles-list{
    grid-template-columns: repeat(1, 1fr);
    gap: var(--gap-small-size);
    
    .article-card {
      max-width: 700px;

      .article-image {
        width: 300px;
        height: 200px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      
      .article-desc {
      
      }
    }
  }

  .article-tags {
    flex-direction: row;
    justify-content: center;
    gap: var(--gap-small-size);    
 
    button {
      font-size: var(--text-small-size);
      padding: .2rem 1rem;
    }
  }
}


@media(max-width: 550px) {
  .articles-list{
    grid-template-columns: repeat(1, 1fr);
    gap: var(--gap-small-size);
    
    .article-card {
      max-width: 700px;
      padding: 0;

      .article-image {
        width: 150px;
        height: 140px;
      }
      
      .article-desc {
        h3 {
          font-size: var(--text-small-size);        
          margin: .3rem 0;
        }
        
        p{
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

