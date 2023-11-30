import styled from "styled-components";

export const LangContainer = styled.div`
background-color: purple;
color: #FFF;
margin: 4rem 0 0 0;
padding: .5rem;

`;

export const LangsCard = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
align-items: center;
width: 100%;
margin: 0;


@media (max-width: 600px){
  font-size: .5rem; 
}
`;