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
      <li>HTML / CSS</li>
      <li>JavaScript</li>
      <li>TypeScript</li>
      <li>React</li>
      <li>Node.js</li>
      <li>SQL (MySQL / PostgreSQL)</li>
      <li>NoSQL (MongoDB)</li>
      <li>Git</li>
      <li>Docker</li>
      <li>Linux</li>
    </ul>
  ),
  },
  {
    title: "Acadêmico",
    id: "Academico",
    content: (
    <ul>
      <li>Engenharia de Software (EAD) - Estácio</li>
      <li>Formação em Tecnologia - Escola DNC</li>
    </ul>
    ),
  },
  {
    title: "Certificado",
    id: "Certificado",
    content: (
      <ul>
        <li>Bootcamp Java Back-end - Santander Dio</li>
        <li>Web Responsive - FreeCodeCamp</li>
        <li>Tecnologia da Informação - SENAI</li>
        <li>Criação de Websites - SENAC</li>
        <li>Design de WebSites - IM</li>
        <li>Desenvolvimento Full-stack - Escola DNC</li>
        <li>Versionamento Git - Escola DNC</li>
        <li>Programação Orientada a Objetos com JAVA - Dio</li>
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
                    <p>
                      Sou um estudante de Engenharia de Software e formado em Desenvolvimento Web Full-stack na Escola DNC.
                    </p>
                    <p>
                      Sou um apaixonado e criador de experiências digitais maravilhosas. 
                      Meus conhecimentos vão da área Frontend com Reactjs, Nextjs, Backend com nodejs e gerenciamento de banco de dados SQL e NoSQL. <br/>
                    </p>
                    <p>  
                      Estou pronto para desafios, a pressão e o desafio constate é o que me move, gosto de sempre entregar o
                      melhor do meu trabalho, sempre estou em busca de
                      soluções criativas e eficazes.
                    </p>
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