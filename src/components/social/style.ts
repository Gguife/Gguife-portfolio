import styled from "styled-components";

export const SocialMedia = styled.div`
  position: fixed;
  bottom: 0rem;
  left: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .5rem;

  a{
    text-decoration: none;
    color: #FFF;
  }

  .hr-social{
    height: 7rem;
    width: 1px;
    background-color: #FFF;
  }

@media(max-width: 1000px){
  display: none;
}
  
`;