import { SocialMedia } from "./style"
import {FiGithub, FiLinkedin, FiInstagram, FiTwitter} from 'react-icons/fi';
import {FaTiktok } from 'react-icons/fa';

export const Social = () =>{
  return(
    <SocialMedia>
      <a href="https://www.instagram.com/gguife/" target='__blank'><FaTiktok /></a>
      <a href="https://www.instagram.com/gguife/" target='__blank'><FiTwitter /></a>
      <a href="https://www.instagram.com/gguife/" target='__blank'><FiInstagram /></a>
      <a href="https://github.com/Gguife" target='__blank'><FiGithub /></a>
      <a href="https://www.linkedin.com/in/gguife/" target='__blank'><FiLinkedin /></a>
      <div className="hr-social"></div>
    </SocialMedia>
  )
}