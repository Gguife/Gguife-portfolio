import { AboutContainer, AboutContentDesc, AboutContentImg, AboutSection } from "./style"
import { Player } from '@lottiefiles/react-lottie-player';

export const About = () => {
    return (
        <AboutSection id="sobre">
            <AboutContainer>
                <AboutContentImg>
                <Player
                    src='https://lottie.host/4298b2e0-018f-4199-8d9a-60761cfb0548/CjFBW9qb05.json'
                    className="software"
                    loop
                    autoplay
                />
                </AboutContentImg>
                <AboutContentDesc>
                    <div className="desc-sobremim">
                        <h1>Sobre Mim</h1>
                        <p>Sou um desenvolvedor full stack apaixonado por criar aplicações web interativas e responsivas. Possuo uma sólida experiência na utilização de tecnologias como JavaScript, React, Redux, Node.js, Express, MongoDB, SQL, HTML, CSS e Git. Estou constantemente em busca de expandir meu conjunto de conhecimentos e competências. Além disso, sou altamente colaborativo e entusiasta em relação ao trabalho em equipe, ansioso para colaborar com outros profissionais na criação de aplicativos excepcionais.</p>
                    </div>
                    <div className="desc-estudos">
                        <div className="skills">
                            <button>Skills</button>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>TypeScript</li>
                                <li>Nodejs</li>
                                <li>MongoDB</li>
                                <li>MySQL</li>
                            </ul>
                        </div>
                        <div className="academico">
                            <button>Acadêmico</button>
                            <ul>
                                <li>Engenharia de Software - Estácio</li>
                                <li>Formação em Tecnologia - Escola DNC</li>
                            </ul>
                        </div>
                        <div className="certificados">
                            <button>Certificados</button>
                            <ul>
                                <li>Bootcamp Java back-end - Santander Dio</li>
                                <li>Web Responsive - FreeCodeCamp</li>
                                <li>Tecnologia da Informação - SENAI</li>
                            </ul>
                        </div>
                    </div>
                </AboutContentDesc>
            </AboutContainer>
        </AboutSection>
    )
}