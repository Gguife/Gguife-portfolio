import styled from "styled-components";

export const ProjectSection = styled.main`
padding: 3rem;
  h1{
    font-size: 3rem;
    text-align: center;
  }

  .show-more {
    color: #FFF;
    border: none;
    background: none;
    padding: 1rem;
    font-size: 1.2rem; 
    display: flex;
    align-items: end;
    cursor: pointer;

    .show-more-icon{
      font-size: 1.4rem;
    }
  }
`;

export const ProjectButton = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 2rem 0 4rem 0;
gap: 1.5rem;

  button{
    padding: 1rem 1.5rem;
    background-color: #FFF;
    border: none;
    border-radius: 5px;
    color: #000;
    font-weight: 700;
    cursor: pointer;
    transition: .4s;
  }

@media(max-width: 500px){
  gap: .5rem;
  
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

  .project-card {
    position: relative;
    width: 100%;
    background-color: #999;
    padding: 1rem;
    border-radius: 7px 0 7px 0;
    max-height: 500px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    gap: .5rem;
    transition: .4s;

    &:hover {
      img, h3, .tools {
        opacity: .1;
      }
    }

    img {
      width: 100%;
      border-radius: 3px;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    }

    h3 {
      color: #000;
      font-size: 1.1rem;
    }

    .tools {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: .3rem;
      list-style: none;
      padding: .3rem .2rem;
      margin-bottom: 1.2rem;
      
      .tool{
        background-color: #f67f01;
        padding: .4rem .8rem;
        font-size: .6rem;
        border-radius: 4px;
        color: #000;
        font-weight: 700;
      }
    }

    .eye-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 5rem;
      color: #f67f01;
      opacity: 0;
      transition: opacity 0.5s ease;
    }
      
    &:hover .eye-icon {
      opacity: 1;
    }
  }


@media(max-width: 900px){
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  .eye-icon{
    display: none;
  }

  .project-card {
   
    &:hover {
      img, h3, .desc, .tools {
        display: flex;
      }
    }
  }
}

@media(max-width: 500px){
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  place-items: center;
  justify-content: center;
  
  .project-card{
    width: 80%;
    h3{
      font-size: .9rem;
    }
    p{
      font-size: .7rem;
      margin: .1rem 0;
    }
  }
}
`;