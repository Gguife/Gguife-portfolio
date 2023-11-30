import { HeaderContainer, HeaderMenu } from "./style";
import { useState } from "react";

//Icon && Logo
import Logo from "../../assets/logo.png";


export const Header = () => {
  const [ menuOpen, setMenuOpen] = useState(false);

  const toggleMenuOpen = () =>{
    setMenuOpen(!menuOpen);
  }
  

  return (
    <HeaderContainer id="home">
      <div className="logo">
        <img src={Logo} alt="logo da página" width={65}/>
        <div className="linha-vertical"></div>
        <span>GGUIFE</span>
      </div>
      <HeaderMenu>
        <ul>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </HeaderMenu>
    </HeaderContainer>
  )
}
