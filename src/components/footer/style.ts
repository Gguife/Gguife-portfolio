import styled from "styled-components";

export const FooterContainer = styled.footer`
text-align: center;
padding: 2rem;

p{
  color: #37383c;
  a{
    color: #37383c;
  }
}

.footer-icons{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  gap: 1rem;

  
  a{    
    color: #37383c;
    .icons{
      font-size: 3rem;
    }
  }

}
`;