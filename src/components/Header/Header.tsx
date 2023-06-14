import { useState } from "react";
import { Container, HeaderContent } from "./Header.styles"
import React, { useContext } from 'react';
import { ThemeContext } from "@/context/context";

export const Header : React.FC = () =>{
  const [buttonMode, setButtonMode] = useState("lightMode")
  const { setTheme } = useContext(ThemeContext)
  const ontheme = ()=>{
    setButtonMode(buttonMode === "lightMode" ? "darkMode" : "lightMode");
    if(buttonMode=="lightMode") setTheme("darkTheme");
    if(buttonMode=="darkMode") setTheme("lightTheme");
  }
  return(
    <Container>
      <HeaderContent> 
        <h1 className="header-title">GitHub Profiles</h1>
        <label className="switch" >
          <input type="checkbox" onClick={()=>ontheme()}/>
          <span className="slider round"></span>
        </label>
      </HeaderContent>  
    </Container>
  )
}