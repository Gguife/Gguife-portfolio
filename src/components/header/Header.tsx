import { HeaderContainer, HeaderMenu } from "./style";
import Logo from "../../assets/logo.png";

export const Header = () => {
  return (
    <HeaderContainer>
      <div className="logo">
        <img src={Logo} alt="logo da página" width={100}/>
        <hr />
        <span>GGUIFE</span>
      </div>
      <HeaderMenu>
        <a href="#">Home</a>
        <a href="#sobre">Sobre mim</a>
        <a href="#projetos">Projetos</a>
        <a href="#contato">Contato</a>
      </HeaderMenu>
    </HeaderContainer>
  )
}
