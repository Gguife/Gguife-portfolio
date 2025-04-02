import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
  --primary-color: #25262a;
  --primary-soft-color: #37383c;
  --secondary-color: #f67f01;
  --text-primary-color: #FaFaFa;
  --text-second-color:rgb(131, 131, 138);
  --text-link-color: #557287;
  --text-link-test:rgb(58, 115, 155);

  --text-title-size: 2rem;
  --text-subtitle-size: 1.5rem;
  --text-medium-size: 1.rem;
  --text-small-size: .8rem; 

  --gap-high-size: 3rem;
  --gap-medium-size: 2rem;
  --gap-small-size: .9rem;  
}


*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html, body {
  scroll-behavior: smooth;
}
body{
  background-color: var(--primary-color);
  color: var(--text-primary-color); 
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif; 
  transition: all .25s linear;
}

body::-webkit-scrollbar{
  width: 9px;
  height: 6px;
}

body::-webkit-scrollbar-thumb{
  border-radius: 10px;
  background-color: var(--primary-soft-color);
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

.internal-links {
  color: var(--text-link-color);
  max-width: 150px;
  font-size: .9rem;
  font-weight: 700;
  transition: .3s;

  &:hover {
    color: #9999; 
  }
}

`;