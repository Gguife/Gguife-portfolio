import styled from "styled-components";

export const LangContainer = styled.div`
background-color: var(--text-link-color);
color: #FFF;
padding: .2rem;
opacity: .7;

`;

export const LangsCard = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
align-items: center;
width: 100%;
margin: 0;

p{
  font-size: 1.2rem;
}

@media (max-width: 600px){
  p{
    font-size: .5rem;
  }
}
`;