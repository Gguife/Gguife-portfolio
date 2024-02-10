import { HomeBottomContainer, HomePage, HomePrincipalContent } from './style';
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
          <p>Sou um estudante de <strong>Engenharia de Software</strong>, <br /> com foco no <strong>Desenvolvimento Web</strong></p>
          <img src={Logo} alt="Logo" width={350} />
        </div>
      </HomePrincipalContent>
      <HomeBottomContainer>
        <ul>
          <li><a href="https://www.instagram.com/gguife/" target='__blank'><FiInstagram /></a></li>
          <li><a href="https://github.com/Gguife" target='__blank'><FiGithub /></a></li>
          <li><a href="https://www.linkedin.com/in/guilherme-gomes-b09444254/" target='__blank'><FiLinkedin /></a></li>
        </ul>
        <div className="fale-comigo">
          <a href='#contato'>Fale <br /> Comigo <hr /></a>
          <Player
            src='https://lottie.host/cae1dc39-3c4c-44ca-a0e7-a491a3672fe4/13yVWciwVB.json'
            className="talkToMe"
            loop
            autoplay
          />
        </div>
      </HomeBottomContainer>
    </HomePage>
  )
}
