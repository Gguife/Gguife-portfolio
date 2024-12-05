import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html, body {
  scroll-behavior: smooth;
}
body{
  background-color: #25262a;
  color: #FaFaFa; 
  font-family: "Work Sans", sans-serif;
  transition: all .25s linear;
}

body::-webkit-scrollbar{
  width: 9px;
  height: 6px;
}

body::-webkit-scrollbar-thumb{
  border-radius: 10px;
  background-color: #37383c;
}

main{
  max-width: 1400px;
  margin: 0 auto;
}
section{
  max-width: 1400px;
  margin: 0 auto;
}

a{
  text-decoration: none;
}

form {
  background-color: #37383c;
  max-width: 800px;
  padding: 2rem 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: .5rem;
  border-radius: 10px;
  
  input{
    width: 100%;
    padding: .6rem .5rem; 
    border-radius: 5px;
    border: none;
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

    textarea{
    border-radius: 5px;
    resize: none;
    padding: .5rem;
  }
}
`;