import { AboutContainer, AboutContentDesc, AboutContentImg, AboutSection, TabButton, TabContent} from "./style"
import SobrePic from "../../assets/groupAbout.png";
import { useState } from "react";
import Motion from "../Motion";
import { motion } from "framer-motion";
import { item } from "../../lib/Variants";
import { FaFileAlt } from "react-icons/fa";

const TAB_DATA = [
  {
  title: "Habilidade",
  id: "Habilidade",
  content: (
    <ul>
      <li>HTML / CSS</li>
      <li>JavaScript</li>
      <li>TypeScript</li>
      <li>React</li>
      <li>NodeJS</li>
      <li>SQL (MySQL / PostgreSQL)</li>
      <li>NoSQL (MongoDB)</li>
      <li>Git</li>
      <li>Docker</li>
      <li>Linux</li>
      <li>Python</li>
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
        <li>Desenvolvimento Full-stack(Frontend/Backend) - Escola DNC</li>
        <li>Versionamento Git - Escola DNC</li>
        <li>Programação Orientada a Objetos com JAVA - Dio</li>
      </ul>
    ),
  },
];


export const About = () => {
const [activeTab, setActiveTab] = useState("Habilidade");

const handleTabClick = (title: string) => {
    setActiveTab(title);
};

    return (
      <AboutSection id="sobre">
        <Motion className="sobre-content" id="sobre">   
          <AboutContainer>
            <AboutContentDesc>
              <h1>Sobre Mim</h1>
              <motion.div variants={item} >
                <div className="desc-sobremim">
                    <p>
                      Sou um desenvolvedor que amo criar sistesma Backend e layouts resposivos para frontend.
                      Tenho experiência em criar sistemas rápidos e eficientes para diversas aplicações.
                    </p>
                    <p>
                      Meus interesses estão no desenvolvimento de softwares e tenho uma grande paixão em Cibersegurança onde me envolvo, buscando aprender e me aprimorar de forma autônoma. 
                      Costumo me ver como alguém que está sempre em desenvolvimento!
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
            <motion.div variants={item} >
              <AboutContentImg>
                <img src={SobrePic} alt="Imagem ilustrativa" /> 
                <button className="button-cv"><FaFileAlt /> Veja CV</button>
              </AboutContentImg>
            </motion.div>
          </AboutContainer>
        </Motion>
      </AboutSection>
    )
}