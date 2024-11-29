import styled from "styled-components";

export const ProjectsViewSection = styled.section`
padding: 2rem 1rem;

  .header-section{
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    h1{
      font-size: 2.3rem;
    }

    a{
      background-color: #f67f01;
      padding: 1rem  2rem;
      color: #000;
      font-size: 1.1rem;
      font-weight: 700;
      border-radius: 5px;
    } 
  }
`;

export const ProjectsCards = styled.div`
margin-top: 3rem;
display: grid;
grid-template-columns: repeat(3, 1fr);
justify-content: space-between;
justify-content: space-between;
gap: 1rem;

  .ind-project-card {
    background-color: #999;
    padding: 1rem;
    border-radius: 5px;
    position: relative;

    img {
      width: 100%;
      border-radius: 3px;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    }

    h3 {
    color: #000;
    font-size: 1.1rem;
    }

    .desc {
      color: #555;
      font-size: .8rem;
      font-weight: 700;
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
        background-color: #25262a;
        padding: .4rem .8rem;
        font-size: .6rem;
        border-radius: 4px;
        color: #FFF;
        font-weight: 400;
      }
    }


    .project-edit {
      font-size: 1.5rem;
      position: absolute;
      right: 20px;
      bottom: 15px;
      color: #000;
      cursor: pointer;
    }

    .project-delete {
      background-color: red;
      padding: .7rem 1.5rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  }

}

`;

export const ProjectModal = styled.div`
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
display: flex;
align-items: center;
justify-content: center;
background-color: rgba(0, 0, 0, 0.5); 
backdrop-filter: blur(5px); 
-webkit-backdrop-filter: blur(5px); 

  .modal-content {
    background-color: #333;
    padding: 2rem;
    border-radius: 5px;

    p {
      font-size: 2rem;
      text-align: center;
    }

    .modal-actions {
      display: flex;
      justify-content: space-between;
      padding: 2rem;
    
      button{
        cursor: pointer;
        padding: .7rem 2rem;
        border: none;
        border-radius: 4px;
      }
      .confirm-delete {
        background-color: red;
      }
      .cancel-delete {
        background-color: #FFF;  
      }
    }
  }

`;