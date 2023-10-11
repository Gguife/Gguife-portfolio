import styled from "styled-components";

export const LangContainer = styled.div`
background-color: purple;
color: #FFF;
margin: 3rem 0;
padding: .5rem; 
`;

export const LangsCard = styled.div`
display: flex;
align-items: center;
justify-content: center;
font-size: 1rem;
gap: 1rem;

.lang-icon{
  padding: .3rem 0;
}

@media (max-width: 600px){
  font-size: .5rem; 
}
`;