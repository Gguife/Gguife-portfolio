import { MainPageSection, MainAboutMeCard, ArticlesSection, ProjectsSection } from "./style";

//icons
import { FaHtml5, FaReact, FaNodeJs, FaGitAlt, FaCss3Alt, FaDocker, FaLinux, FaJava, FaWindows  } from 'react-icons/fa';
import { SiMysql, SiPostgresql, SiSpringboot} from 'react-icons/si';
import { TbBrandTypescript } from 'react-icons/tb';
import { IoLogoJavascript } from "react-icons/io";
import { Projects } from "../../components/projects";
import { Articles } from "../../components/articles";


const TAB_DATA = [
  {
    title: "tecnologias",
    id: "tecnologias",
    content: (
      <ul>
      <li><FaHtml5 className="icons"/></li>
      <li><FaCss3Alt className="icons"/></li>
      <li><FaGitAlt className="icons"/></li>
      <li><FaLinux  className="icons"/></li>
      <li><SiMysql className="icons"/></li>
      <li><FaNodeJs className="icons"/></li>
      <li><FaReact className="icons"/></li>
      <li><FaDocker className="icons"/></li>
      <li><FaJava className="icons"/></li>
      <li><SiSpringboot className="icons"/></li>
      <li><FaWindows  className="icons"/></li>
      <li><IoLogoJavascript className="icons"/></li>
      <li><TbBrandTypescript className="icons"/></li>
      <li><SiPostgresql className="icons"/></li>
    </ul>
    ),
  }
];

const MainPage: React.FC = () => {

  return (
    <>
      <MainPageSection>
        <MainAboutMeCard>
          <div className="main-about-description">
            <h3>Guilherme Gomes<span>Desenvolvedor web full-stack</span></h3>
            <p>
              Criando soluções que conectam o que está por trás das telas com o que vemos.
              Aqui, compartilho experiências, desafios e conquistas sobre tecnologia, programação, cibersegurança e minha jornada pessoal, 
              com objetivo de deixar a tecnologia mais simples e acessível, 
              enquanto navego pelo mundo digital.
            </p>
            {TAB_DATA.map((tab) =>(
              <div className="techs-card" key={tab.title}>
                  <div className="tech">{tab.content}</div>
              </div>
            ))}
          </div>
        </MainAboutMeCard>
      </MainPageSection>
      <ArticlesSection>
        <Articles />
      </ArticlesSection>

      <ProjectsSection>
        <Projects />
      </ProjectsSection>
    </>
  );
};

export default MainPage;
