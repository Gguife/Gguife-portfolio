import styled from "styled-components";

export const MainPageSection = styled.main`
padding: 2rem 1rem;
`;

export const MainAboutMeCard = styled.div`
background-color: #37383c;
padding: 2rem 3rem;
border-radius: 5px;
display: flex;
gap: 3rem;
margin: 2rem 0;


img{
  max-width: 200px;
  border-radius: 50%;
}

.main-about-description{
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3{
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;
    span{
      margin-top: .3rem;
      font-size: .8rem;
      opacity: .7;
      font-weight: 400;
    }
  }
  
  p{
    line-height: 30px;
    font-size: 1.2rem;
    margin: 1rem 0;
  }

  a{
    color: #FFFF;
    max-width: 150px;
    text-decoration: underline white;
  }
}


@media(max-width: 930px){
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;

  img{
    max-width: 150px;
  }

  .main-about-description{
    align-items: center;
    justify-content: center:
    flex-direction: column;
    text-align: center;

    h3{
      font-size: 1.2rem;
      span{
        font-size: .7rem;
      }
    }
    p{
      font-size: .9rem;
      line-height: 1rem;
    }
  }
}
@media(max-width: 500px){
  padding: 1rem 2rem;
  margin-bottom: 0;

  img{
    max-width: 100px;
  }

  .main-about-description{
    align-items: center;
    justify-content: center:
    flex-direction: column;
    text-align: center;

    h3{
      font-size: 1rem;
      span{
        font-size: .6rem;
      }
    }

    p{
      font-size: .8rem;
    }

    a{
      font-size: .8rem;
      background-color: #25262a;
      padding: .3rem .8rem;
      text-decoration: none;
      border-radius: 5px;
    }
  }
}
`;

export const MainArticleSection = styled.section`
padding: 2rem;
h1{
  text-align: center;
  font-size: 3rem;
  padding: 3rem 0;
}

.articles-list{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  .article-card{
    max-width: 600px;
    transition: all ease .3s;
    img{
      max-width: 600px;
      width: 100%;
      max-height: 250px;
      border-radius: 15px ;
      object-fit: cover;
    }

    .article-content{
      display: flex;
      flex-direction: column;
      gap: 1rem;

      h2{
        margin-top: 1rem;
        font-size: 1.2rem;
        color: #FFF;
      }
      
      p{
        font-size: 1rem;
        color: #999;
      }
    }
      
    &:hover{
      opacity: .5;
    }
  }

}

@media(max-width: 800px){
  h1{
    font-size: 2rem;
  }

  .articles-list{
    grid-template-columns: repeat(1, 1fr);
    place-items: center;
    gap: 5rem;
    
    .article-card{
      max-width: 500px;

      img{
        max-width: 500px;
      }

      .article-content{
        h2{
          font-size: 1rem;
        }
        
        p{
          font-size: .9rem;
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
    gap: 3rem;
    .article-card{       
      .article-content{
        gap: .5rem;

        h2{
          margin-top: .7rem;
        }
      }
    }
  }
}
`;