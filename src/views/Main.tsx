import { useState, useEffect } from "react";
import GlobalTheme from "../styles/global";
//Dark mode styled-components
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from '../styles/theme/theme';
import styled from "styled-components";
import { BsFillMoonFill } from 'react-icons/bs';
import { BsFillSunFill } from 'react-icons/bs';
//Components
import { Home } from "../components/home/Home";


export const Main = () => {
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
        <ButtonChange onClick={themeToggler}>{theme === 'light' ? <BsFillMoonFill  className='moonIcon' /> : <BsFillSunFill  className='sunIcon' />}</ButtonChange>
        <Home />
      </ThemeProvider>
    </>
  )
}

//Button change ThemeProvider
const ButtonChange = styled.button`
background-color: transparent;
border: none; 
color: ${({theme}) => theme.text};
font-size: 2rem;
position: absolute;
top: 46px;
right: 40px;
cursor: pointer;
`;