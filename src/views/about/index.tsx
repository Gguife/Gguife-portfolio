import { Projects } from "../../components/projects/index";
import { Langs } from "../../components/lang/Langs";
import { ScrollUp } from "../../components/scrollUp/ScrollUp";
import Logo from "../../assets/logo.png";
import { AboutMainContent, AboutContainer, AboutContentDesc, AboutSection} from "./style";

//icons
import { FaHtml5, FaReact, FaNodeJs, FaGitAlt, FaCss3Alt, FaDocker, FaLinux, FaJava, FaWindows  } from 'react-icons/fa';
import { SiMysql, SiPostgresql, SiSpringboot} from 'react-icons/si';
import { TbBrandTypescript } from 'react-icons/tb';
import { IoLogoJavascript } from "react-icons/io";
import { HiOutlineLocationMarker } from "react-icons/hi";


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
      <li><IoLogoJavascript className="icons"/><p>Javascript</p></li>
      <li><TbBrandTypescript className="icons"/><p>Typescript</p></li>
      <li><SiPostgresql className="icons"/><p>Postgresql</p></li>
    </ul>
    ),
  }
];

const AboutPage = () => {

  return (
    <>
      <AboutMainContent>
        <h1>Guilherme Gomes</h1>
        <p>Software Engineer</p>
        <div className="about-logo">
          <div className="center-line"></div>
          <img src={Logo} alt="" />
        </div>
      </AboutMainContent>
      <AboutSection id="sobre">
        <AboutContainer>
          <h1><HiOutlineLocationMarker className="loc-icon" />São Paulo, Brasil</h1>
          <AboutContentDesc>
            <div className="desc-sobremim">
                <p>
                  Prazer! Meu nome é Guilherme e gosto de criar coisas que vivem na internet.
                  Estudo e me dedico à criação de APIs, <span>softwares seguros e escaláveis</span>. 
                  Reservo grande parte do meu dia criando sistemas web e aprimorando meus <span>conhecimentos sobre CiberSegurança</span>.
                  Tenho experiência em desenvolver sistemas rápidos para diversas aplicações, com foco especial em <span>desenvolvimento de APIs RESTful</span>.
                  Todos os meus grandes <span>projetos Front-end</span> têm foco em serem <span>intuitivos e totalmente responsivos</span>, com grande qualidade na estilização e beleza do projeto.
                  Tenho uma grande paixão em CyberSecurity onde me envolvo, buscando aprender e me aprimorar de forma autônoma. 
                  Costumo me ver como <span>alguém que está sempre em desenvolvimento!</span>
                </p>

            </div>
            <div className="desc-estudos">
              {TAB_DATA.map((tab) =>(
                <div key={tab.title}>
                    <div className="tecnologias">{tab.content}</div>
                </div>
              ))}
            </div>
          </AboutContentDesc>
        </AboutContainer>
      </AboutSection>
      <Langs />
      <Projects />
      <ScrollUp />
    </>
  )
}

export default AboutPage;