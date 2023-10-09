import { LangContainer, LangsCard } from "./style"
//ICONS
import { FaHtml5, FaReact, FaNodeJs, FaGitAlt, FaJava, FaFigma, FaCss3Alt} from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiMysql, SiMongodb, SiStyledcomponents, SiTailwindcss, SiSpringboot} from 'react-icons/si';
import { TbBrandTypescript } from 'react-icons/tb';

//Mini mock das linguagens
const LINGUAGENS = [
  {
    id: 1,
    icon: <FaHtml5 />,
  }, 
  {
    id: 2,
    icon: <FaCss3Alt />,
  }, 
  {
    id: 3,
    icon: <IoLogoJavascript />,
  },  
  {
    id: 4,
    icon: <TbBrandTypescript />,
  },  
  {
    id: 5,
    icon: <FaReact />,
  }, 
  {
    id: 6,
    icon: <FaNodeJs />,
  },  
  {
    id: 7,
    icon: <FaGitAlt />,
  },  
  {
    id: 8,
    icon: <SiMysql/>,
  },  
  {
    id: 9,
    icon: <SiMongodb/>,
  }, 
  {
    id: 10,
    icon: <FaJava/>,
  },  
  {
    id: 11,
    icon: <SiStyledcomponents/>,
  },  
  {
    id: 12,
    icon: <SiTailwindcss/>,
  },  
  {
    id: 13,
    icon: <SiSpringboot/>,
  },  
  {
    id: 14,
    icon: <FaFigma/>,
  },  
];

export const Langs = () => {
  return (
    <LangContainer>
      <LangsCard>
        {LINGUAGENS.map((lang) => (
          <div className="lang-icon" key={lang.id}>
            <p>{lang.icon}</p>
          </div>
        ))}
      </LangsCard>
    </LangContainer>
  )
}