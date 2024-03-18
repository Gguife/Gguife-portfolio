import styled from "styled-components";


export const lightTheme = {
  body: "#BBB",
  text: "#000"
}

export const darkTheme = {
  body: "#222",
  text: "#FaFaFa"
}

export const ButtonChange = styled.div`
display: flex;
border: none; 
color: ${({theme}) => theme.text};
font-size: 1.7rem;

  .moonIcon, .sunIcon{
    cursor: pointer;
  }

@media(max-width: 500px){
  font-size: 1.5rem;
}
`;