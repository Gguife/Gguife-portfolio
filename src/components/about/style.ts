import styled, { css, keyframes } from 'styled-components';

//Type
interface TabContentProps {
  active: boolean;
}
interface TabButtonProps {
    active: boolean;
}

//Section
export const AboutSection = styled.section`
background-color: #333;
color: #FFF;

@media(max-width: 1000px){
    height: 50rem;
}
`;

//Principal Content
export const AboutContainer = styled.div`
display: flex;
align-items: start;
justify-content: start;
max-width: 1200px;
margin: 0 auto;
padding: 20px;
gap: 3rem;

@media(max-width: 1000px){
    flex-direction: column;
    align-items: center;
    justify-content: center;  
    gap: 0rem;
}
`;

export const AboutContentImg = styled.div`
width: 100%;
.software{
    width: 100%;
    border-radius: 10px;
}

@media(max-width: 1000px){
    width: 50%;
}
@media(max-width: 500px){
    width: 70%;
}
`;

export const AboutContentDesc = styled.div`
width: 100%;
position: relative;
padding-top: 3rem;

.desc-sobremim{
    padding: 10px;
    p{
        font-size: .9rem;
    }
}

.desc-estudos{
    display: flex;
    gap: 1rem;
    padding: 10px;
}

@media(max-width: 1000px){
    padding-top: 0rem;
}

@media(max-width: 500px){
    h1{
        font-size: 1.3rem;
    }
    p{
        font-size: .6rem;
    }
}
`;




//List
export const TabContent = styled.ul<TabContentProps>`
padding: 10px;
display: ${(props) => (props.active ? "block" : "none")};
position: absolute;
left: 2rem;
    
    li{
        list-style-type: disc;
        font-weight: 700;
        font-size: .85rem;
    }

@media(max-width: 500px){
    li{
        font-size: .7rem;
    }
}
`;

const horizontalAnimation = keyframes`
0% {
    width: 0;
}
100% {
    width: 100%;
}
`;

export const TabButton = styled.button<TabButtonProps>`
border: none;
font-size: 1rem;
font-weight: 700;
padding: 5px 5px;
background-color: transparent;
color: #999;
cursor: pointer;

${(props) =>
    props.active &&
    css`
    color: #fff;
    .border-bottom{
        background-color: purple;
        width: 100%;
        height: .2rem;
        animation: ${horizontalAnimation} 0.3s linear forwards;
    }
    `}
`;