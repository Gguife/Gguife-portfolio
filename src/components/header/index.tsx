import { HeaderContainer, HeaderContent} from "./style";
import { Link } from "react-router-dom";
import {FaGithub , FaLinkedinIn  } from 'react-icons/fa';


export const Header = () => {

  return (
    <HeaderContainer id="home">
      <HeaderContent>
        <Link to="/" className="logo">gguife</Link>
        <div className="header-nav">
          <a href="" className="internal-links">Blog</a> 
          <ul>   
            <li><a href="https://github.com/Gguife" target='__blank'><FaGithub className="icons" /></a></li>
            <li><a href="https://www.linkedin.com/in/gguife/" target='__blank'><FaLinkedinIn className="icons" /></a></li>  
          </ul>	  
        </div>
      </HeaderContent>
    </HeaderContainer>
  )
}
