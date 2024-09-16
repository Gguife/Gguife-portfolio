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
`;