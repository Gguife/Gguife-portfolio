import { HeaderContainer, HeaderMenu } from "./style";



export const Header = () => {

  return (
    <HeaderContainer id="home">
      <div className="logo">
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
