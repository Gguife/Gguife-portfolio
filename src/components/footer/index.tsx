import { FooterContainer } from "./style.ts";
import {FaGithub , FaLinkedinIn, FaInstagram  } from 'react-icons/fa';

export const Footer = () => {

  return(
    <FooterContainer>
      <p>© 2024 . built by <a href="">Guilherme Gomes</a></p>
      <div className="footer-icons">
       <a href="https://www.instagram.com/ggf.lnx" target='__blank'><FaInstagram  className="icons" /></a>
       <a href="https://github.com/Gguife" target='__blank'><FaGithub className="icons" /></a>
       <a href="https://www.linkedin.com/in/gguife/" target='__blank'><FaLinkedinIn className="icons" /></a>
      </div>
    </FooterContainer>
  )
}