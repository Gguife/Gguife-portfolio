import styled from 'styled-components';

export const AboutSection = styled.section`
    
`;

export const AboutContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
max-width: 1200px;
margin: 0 auto;
padding: 20px;

`;

export const AboutContentImg = styled.div`
width: 100%;
.software{
    width: 100%;
    border-radius: 10px;
}
`;

export const AboutContentDesc = styled.div`
width: 100%;

.desc-sobremim{
    padding: 10px;
}

.desc-estudos{
    display: flex;
    gap: 1rem;
    padding: 10px;
    position: relative;

    .skills, .academico, .certificados{
        button{
            border: none;
            border-bottom: 5px solid purple;
            font-size: 1rem;
            font-weight: 700;
            padding: 5px 5px;
            background-color: transparent;
            color: #999;
            cursor: pointer;
            
            &:hover{
                color: ${({theme}) => theme.text};
            }
        }
    }
    ul{
        display: none;
    }
}
`;