import styled from "styled-components";

export const ContactSection = styled.section`
padding: 2rem 1rem;
position: relative;

.msg-error{
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 50px;
  padding: .7rem 2rem;
  background-color: red;
  color: #FFF;
  border-radius: 5px;
  font-size: 1.2rem;
}

.msg-send{
  display: none;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 50px;
  padding: .7rem 2rem;
  background-color: green;
  color: #FFF;
  border-radius: 5px;
  font-size: 1.2rem;
}
`;

export const ContactContainer = styled.div`
display: flex;
justify-content: center; 
max-width: 900px;
margin: 0 auto;

@media(max-width: 700px){
flex-direction: column;
gap: 20px;
}
`;

export const ContactLeftSide = styled.div`
width: 50%;
padding: 0 1rem;

h2{
  font-size: 1.2rem;
}
p{
  font-size: .7rem;
  width: 90%;
  padding: .5rem 0;
}
a{
  color: ${({theme}) => theme.text};
  font-size: 1.2rem;
  transition: .3s;
  margin-right: .5rem;
  
  &:hover{
    color: purple;
  }
}

@media(max-width: 700px){
  width: 100%;
  padding-left: 2rem;
}
`;

export const ContactRightSide = styled.div`
width: 100%;

form{
  display: flex;
  flex-direction: column;
  padding: 0 1rem;

  input, textarea{
    margin-bottom: 1rem;
    padding: .5rem;
    border: 2px solid #000;
    border-radius: 15px;
    resize: none;

    &:focus {
      outline: none;
      box-shadow: 0 0 5px purple; 
    }

    &::placeholder {
      font-family: 'Poppins', sans-serif;
      font-size: .7rem;
      padding: 0 .3rem;
      color: #000;
    }
  }

  label{
    font-size: .75rem;
    padding: 0 1rem;
    font-weight: 700;
  }

  button{
    background-color: purple;
    padding: .5rem;
    border: none;
    border-radius: 5px;
    color: #FFF;
    cursor: pointer;
    transition: .4s;

    &:hover{
      background-color: ;
      color: ;
    }
  }
}

`;