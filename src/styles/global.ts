import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  background: ${({theme}) => theme.body};
  color: ${({theme}) => theme.text}; 
  font-family: 'Poppins', sans-serif;  
  transition: all .25s linear;
}

body::-webkit-scrollbar{
  width: 9px;
  height: 6px;
}

body::-webkit-scrollbar-thumb{
  border-radius: 10px;
  background-color: purple;
}
`;