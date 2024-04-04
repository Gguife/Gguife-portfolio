import { useState, useEffect } from "react";
import GlobalTheme from "../styles/global";

//Dark mode styled-components and Button theme change
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, ButtonChange } from '../styles/theme/theme';
import { BsFillMoonFill } from 'react-icons/bs';
import { BsFillSunFill } from 'react-icons/bs';

//Components
import { Header } from "../components/header/Header";
import { Home } from "../components/home/Home";
import { About } from "../components/about/About";
import { Projects } from "../components/projects/Projects";
import { Langs } from "../components/lang/Langs";
import { Contact } from "../components/contact/Contact";
import { ScrollUp } from "../components/scrollUp/ScrollUp";
import { Social } from "../components/social";


export const MainPage = () => {
  const [theme, setTheme] = useState("light");

  const themeToggler = () =>{
    if(theme === "light"){
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }else{
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  }

  useEffect(()=> {
    const localTheme = localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, [])

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalTheme />
        <Header ThemeButton={<ButtonChange onClick={themeToggler}>{theme === 'light' ? <BsFillMoonFill  className='moonIcon' /> : <BsFillSunFill  className='sunIcon' />}</ButtonChange>} />
        <Home />
        <About />
        <Projects />
        <Langs />
        <Contact />
        <ScrollUp />
        <Social />
      </ThemeProvider>
    </>
  )
}
