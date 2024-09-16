import { Projects } from "../../components/projects/Projects";
import { Langs } from "../../components/lang/Langs";
import { ScrollUp } from "../../components/scrollUp/ScrollUp";
import { AboutMainContent } from "./style";
import Logo from "../../assets/logoPerfil.jpg";
import { About } from "../../components/about/About";


const AboutPage = () => {

  return (
    <>
      <AboutMainContent>
        <h1>Guilherme Gomes</h1>
        <p>Software Engineer</p>
        <div className="about-logo">
          <div className="center-line"></div>
          <img src={Logo} alt="" />
        </div>
      </AboutMainContent>
      <About />
      <Langs />
      <Projects />
      <ScrollUp />
    </>
  )
}

export default AboutPage;