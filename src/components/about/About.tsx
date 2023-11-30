import { AboutContainer, AboutContentDesc, AboutContentImg, AboutSection, TabButton, TabContent} from "./style"
import { Player } from '@lottiefiles/react-lottie-player';
import { useState } from "react";
import Motion from "../Motion";
import { motion } from "framer-motion";
import { item } from "../../lib/Variants";

const TAB_DATA = [
    {
      title: "Skills",
      id: "Skills",
      content: (
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>TypeScript</li>
            <li>Nodejs</li>
            <li>SQL(MySQL) e NoSQL(MongoDB)</li>
        </ul>
      ),
    },
    {
        title: "Acadêmico",
        id: "Academico",
        content: (
        <ul>
            <li>Engenharia de Software - Estácio</li>
            <li>Formação em Tecnologia - Escola DNC</li>
        </ul>
        ),
    },
    {
      title: "Certificado",
      id: "Certificado",
      content: (
        <ul>
            <li>Bootcamp Java back-end - Santander Dio</li>
            <li>Web Responsive - FreeCodeCamp</li>
            <li>Tecnologia da Informação - SENAI</li>
        </ul>
      ),
    },
  ];


export const About = () => {
const [activeTab, setActiveTab] = useState("Skills");

const handleTabClick = (title: string) => {
    setActiveTab(title);
};

    return (
        <AboutSection id="sobre">
            <Motion className="sobre-content" id="sobre">   
                <AboutContainer>
                    <motion.div variants={item} >
                        <AboutContentImg>
                        <Player
                            src='https://lottie.host/7744b807-840a-4091-a435-71b21e843bb4/81EH49udnj.json'
                            className="software"
                            loop
                            autoplay
                        />
                        </AboutContentImg>
                    </motion.div>
                    <AboutContentDesc>
                    <motion.div variants={item} >
                        <div className="desc-sobremim">
                            <h1>Sobre Mim</h1>
                            <p>Sou um desenvolvedor full stack apaixonado por criar aplicações web interativas e responsivas. Possuo uma sólida experiência na utilização de tecnologias como JavaScript, React, Redux, Node.js, Express, MongoDB, SQL, HTML, CSS e Git. Estou constantemente em busca de expandir meu conjunto de conhecimentos e competências. Além disso, sou altamente colaborativo e entusiasta em relação ao trabalho em equipe, ansioso para colaborar com outros profissionais na criação de aplicativos excepcionais.</p>
                        </div>
                        <div className="desc-estudos">
                        {TAB_DATA.map((tab) =>(
                            <div key={tab.title}>
                                <TabButton onClick={() => handleTabClick(tab.title)} active={activeTab === tab.title}>
                                    {tab.title}
                                    <div className="border-bottom"></div>
                                </TabButton>
                                <TabContent active={activeTab === tab.title} className={tab.title}>{tab.content}</TabContent>
                            </div>
                        ))}
                        </div>
                    </motion.div>
                    </AboutContentDesc>
                </AboutContainer>
            </Motion>
        </AboutSection>
    )
}