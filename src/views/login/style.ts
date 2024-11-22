import styled from "styled-components";

export const LoginSection = styled.div`
padding: 2rem;
height: 70dvh;
display: flex;
align-items: center;
justify-content: center;

  form {
    background-color: #37383c;
    max-width: 600px;
    width: 100%;
    padding: 3rem 2rem;
    display: flex;
    flex-direction: column;
    gap: .5rem;
    border-radius: 10px;
    
    input{
      width: 100%;
      padding: .6rem .5rem; 
      border-radius: 5px;
      }
      
    button{
      margin-top: 2rem;
      border-radius: 5px;
      padding: .6rem 0;
      width: 200px;
      background-color: #f67f01;
      font-weight: 700;
      cursor: pointer;
      border: none;
    }
  }
`;