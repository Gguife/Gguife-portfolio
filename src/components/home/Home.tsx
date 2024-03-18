import { HomeBottomContainer, HomePage, HomePrincipalContent, ScrollDown } from './style';
//Icon && Image
import Logo from '../../assets/logo.png';
import {FiGithub, FiLinkedin, FiInstagram} from 'react-icons/fi';
import { Player } from '@lottiefiles/react-lottie-player';



export const Home = () => {
  return (
    <HomePage>
      <HomePrincipalContent>
        <div className="home-desc">
          <span>Olá, me chamo <br /> <strong>Guilherme Gomes.</strong></span>
          <p>Sou um estudante de <strong>Engenharia de Software</strong>, <br /> com habilidades voltadas ao <strong>Desenvolvimento Web</strong></p>
          <img src={Logo} alt="Logo" width={350} />
        </div>
      </HomePrincipalContent>
      <HomeBottomContainer>
        <ul>
          <li><a href="https://www.instagram.com/gguife/" target='__blank'><FiInstagram /></a></li>
          <li><a href="https://github.com/Gguife" target='__blank'><FiGithub /></a></li>
          <li><a href="https://www.linkedin.com/in/gguife/" target='__blank'><FiLinkedin /></a></li>
        </ul>
      </HomeBottomContainer>
      <ScrollDown>
        <Player
          src='https://lottie.host/4877e0b5-4fe2-495a-a326-4fb8d1fc3175/hPIriPX5Cw.json'
          className="scroll-down"
          loop
          autoplay
        />
      </ScrollDown>
    </HomePage>
  )
}
