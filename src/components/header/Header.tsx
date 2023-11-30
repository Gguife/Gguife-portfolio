import { HeaderContainer, HeaderMenu } from "./style";

//Icon && Logo
import Logo from "../../assets/logo.png";


export const Header = () => {

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
