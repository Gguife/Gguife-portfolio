import styled from "styled-components";

export const BlogSection = styled.section`
padding: 2rem 1rem;
`;


export const BlogCards = styled.div`
  .article-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--gap-medium-size);
    padding: 1rem;

    .article {
      background-color: var(--primary-soft-color); 
      display: flex;
      flex-direction: column;   
      border-radius: 5px;    
      max-width: 500px;


      .article-image {
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

      .article-desc {
        padding: .3rem 1rem;

        span {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: var(--text-small-size);

          .tag {
            margin-left: .7rem;
            padding: .2rem 1rem;
            background-color: var(--primary-color);
            border-radius: 3px;
          }
        }

        h3 {
          margin-top: .7rem;
          font-size: var(--text-medium-size);
        }
          
        p {
          margin: .2rem 0 .7rem 0;
          font-size: var(--text-small-size);
        }
      }
    }
  }



@media(max-width: 800px) {
  .article-list {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--gap-medium-size);
    padding: 0;

    .article {
      max-width: 500px;

      .article-image {
        height: 200px;
      } 


      .article-desc {
        span {
          font-size: var(--text-small-size);

          .tag {
            font-size: .7rem;
          }
        }

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
  .article-list {
    grid-template-columns: repeat(1, 1fr);

    .article {
      max-width: 600px;


      .article-image {
        height: 150px;
      } 
    }
  }
}

@media(max-width: 400px) {
  .article-list {
    .article {

      .article-image {
        height: 130px;
      } 


      .article-desc {
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
