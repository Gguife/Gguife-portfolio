import { AboutContainer, AboutContentDesc, AboutContentImg, AboutSection, TabButton, TabContent} from "./style"
import SobrePic from "../../assets/groupAbout.png";
import { useState } from "react";
import Motion from "../Motion";
import { motion } from "framer-motion";
import { item } from "../../lib/Variants";
import { FaFileAlt } from "react-icons/fa";
import CV from "../../assets/cv.pdf";

//icons
import { FaHtml5, FaReact, FaNodeJs, FaGitAlt, FaCss3Alt, FaDocker, FaLinux, FaPython } from 'react-icons/fa';
import { SiMysql, SiMongodb, SiPostgresql} from 'react-icons/si';
import { TbBrandTypescript } from 'react-icons/tb';
import { IoLogoJavascript } from "react-icons/io";

const TAB_DATA = [
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
  },{
    title: "Acadêmico",
    id: "Academico",
    content: (
    <ul>
      <li>Engenharia de Software (EAD) - Estácio</li>
      <li>Formação em Tecnologia - Escola DNC</li>
    </ul>
    ),
  },
];


export const About = () => {
const [activeTab, setActiveTab] = useState("Certificado");

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
                  <div className="skills">
                    <ul>
                      <li><FaHtml5 className="icons"/><p>HTML</p></li>
                      <li><FaCss3Alt className="icons"/><p>CSS</p></li>
                      <li><IoLogoJavascript className="icons"/><p>JS</p></li>
                      <li><TbBrandTypescript className="icons"/><p>TS</p></li>
                      <li><FaReact className="icons"/><p>React</p></li>
                      <li><FaNodeJs className="icons"/><p>Nodejs</p></li>
                      <li><SiMysql className="icons"/><p>Mysql</p></li>
                      <li><SiPostgresql className="icons"/><p>Postgresql</p></li>
                      <li><SiMongodb className="icons"/><p>Mongodb</p></li>
                      <li><FaGitAlt className="icons"/><p>Git</p></li>
                      <li><FaDocker className="icons"/><p>Docker</p></li>
                      <li><FaLinux  className="icons"/><p>Linux</p></li>
                      <li><FaPython className="icons"/><p>Python</p></li>
                    </ul>
                  </div>
                  <div className="buttons-about">
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
                </div>
              </motion.div>
            </AboutContentDesc>
            <motion.div variants={item} >
              <AboutContentImg>
                <img src={SobrePic} alt="Imagem ilustrativa" /> 
                <button className="button-cv"><a href={CV} download={CV}><FaFileAlt /> Veja CV</a></button>
              </AboutContentImg>
            </motion.div>
          </AboutContainer>
        </Motion>
      </AboutSection>
    )
}