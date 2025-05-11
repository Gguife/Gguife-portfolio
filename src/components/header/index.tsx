import { HeaderContainer, HeaderContent} from "./style";
import { Link } from "react-router-dom";
import {FaGithub , FaLinkedinIn  } from 'react-icons/fa';


export const Header = () => {

  return (
    <HeaderContainer id="home">
      <HeaderContent>
        <Link to="/" className="logo">gguife<span className="logo-dev">.dev</span></Link>
        <div className="header-nav">
          <Link to="/blog" className="internal-links">Blog</Link> 
          <Link to="/projetos" className="internal-links">Projetos</Link> 
          <ul>   
            <li><a href="https://github.com/Gguife" target='__blank'><FaGithub className="icons" /></a></li>
            <li><a href="https://www.linkedin.com/in/gguife/" target='__blank'><FaLinkedinIn className="icons" /></a></li>  
          </ul>	  
        </div>
      </HeaderContent>
    </HeaderContainer>
  )
}
