import styled from "styled-components";


export const ManageSection = styled.section`
display: flex;
flex-direction: column;
align-items: center;
padding: 8rem 2rem;
gap: 3rem;

h1{
  font-size: 4rem;
  span{
    color: #f67f01;
  }
}

.link-posts {
  display: flex;
  gap: 2rem;

  a{
    background-color: #f67f01;
    color: #000;
    padding: 1rem 3rem;
    border-radius: 4px;
    transition: .4s;

    &:hover{
      opacity: .4;
    }
  }

}
`;