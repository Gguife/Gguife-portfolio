import { AboutContainer, AboutContentDesc, AboutSection} from "./style"
import Motion from "../Motion";
import { motion } from "framer-motion";
import { item } from "../../lib/Variants";
//icons
import { FaHtml5, FaReact, FaNodeJs, FaGitAlt, FaCss3Alt, FaDocker, FaLinux, FaJava, FaWindows  } from 'react-icons/fa';
import { SiMysql, SiMongodb, SiPostgresql, SiSpringboot} from 'react-icons/si';
import { TbBrandTypescript } from 'react-icons/tb';
import { IoLogoJavascript } from "react-icons/io";

const TAB_DATA = [
  {
    title: "tecnologias",
    id: "tecnologias",
    content: (
      <ul>
      <li><FaHtml5 className="icons"/><p>HTML</p></li>
      <li><FaCss3Alt className="icons"/><p>CSS</p></li>
      <li><FaGitAlt className="icons"/><p>Git</p></li>
      <li><FaLinux  className="icons"/><p>Linux</p></li>
      <li><SiMysql className="icons"/><p>Mysql</p></li>
      <li><FaNodeJs className="icons"/><p>Nodejs</p></li>
      <li><FaReact className="icons"/><p>React</p></li>
      <li><FaDocker className="icons"/><p>Docker</p></li>
      <li><FaJava className="icons"/><p>Java</p></li>
      <li><SiSpringboot className="icons"/><p>SpringBoot</p></li>
      <li><FaWindows  className="icons"/><p>Windows</p></li>
      <li><SiMongodb className="icons"/><p>Mongodb</p></li>
      <li><IoLogoJavascript className="icons"/><p>Javascript</p></li>
      <li><TbBrandTypescript className="icons"/><p>Typescript</p></li>
      <li><SiPostgresql className="icons"/><p>Postgresql</p></li>
    </ul>
    ),
  }
];


export const About = () => {

  return (
    <AboutSection id="sobre">
      <Motion className="sobre-content" id="sobre">   
        <AboutContainer>
          <AboutContentDesc>
            <motion.div variants={item} >
              <h1>Sobre Mim<div className="hr-title"></div></h1>
              <div className="desc-sobremim">
                  <p>
                    Olá! Meu nome é Guilherme e gosto de criar coisas que vivem na internet.
                    Meu interesse em <span>desenvolvimento web</span> começou em 2020, mexendo com HTML e CSS por pura diversão e curiosidade.
                  </p>
                  <p>
                    Atualmente estudo e me dedico à criação de APIs, <span>softwares seguros e escaláveis</span>. 
                    Reservo grande parte do meu dia criando sistemas web e aprimorando meus <span>conhecimentos sobre CiberSegurança</span>.
                  </p>
                  <p>
                    Tenho experiência em desenvolver sistemas rápidos para diversas aplicações, com foco especial em <span>desenvolvimento de APIs RESTful</span>.
                  </p>
                  <p>
                    Todos os meus grandes <span>projetos Front-end</span> têm foco em serem <span>intuitivos e totalmente responsivos</span>, com grande qualidade na estilização e beleza do projeto.
                  </p>
                  <p>
                    Tenho uma grande paixão em CyberSecurity onde me envolvo, buscando aprender e me aprimorar de forma autônoma. 
                    Costumo me ver como <span>alguém que está sempre em desenvolvimento</span>!
                  </p>
              </div>
              <div className="desc-estudos">
                {TAB_DATA.map((tab) =>(
                    <div key={tab.title}>
                      <p className="tec-title">Algumas das tecnologias que mais utilizo atualmente em meus projetos são:</p>
                      <div className="tecnologias">{tab.content}</div>
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