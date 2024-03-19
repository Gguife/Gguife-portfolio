import { HeaderContainer, HeaderMenu, HeaderButton } from "./style";

interface HeaderProps {
  ThemeButton: any;
}


export const Header = ({ThemeButton}: HeaderProps) => {

  return (
    <HeaderContainer id="home">
      <HeaderMenu>
        <span>Gguife</span>
        <ul>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </HeaderMenu>
      <HeaderButton>
        <a href="#contato">Fale comigo</a>
        {ThemeButton}
      </HeaderButton>
    </HeaderContainer>
  )
}
