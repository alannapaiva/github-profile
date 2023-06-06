import { useState } from "react";
import { Container } from "./Header.styles"
import { onThemeChange } from "../../utils/ModeTheme";
import {Theme } from "../../Theme/Theme";

export const Header : React.FC = () =>{
  const [changeTheme, setchangeTheme] = useState(false);
  const [buttonMode, setButtonMode] = useState<buttonMode>("lightMode")

  const ontheme = ()=>{
    if(buttonMode===false){
      return setButtonMode(true);
    }else{
      return setButtonMode(false);
    };
  }  
  return(
    <Theme>
      <Container>
        <div className="lightThemeDiv">  
          <label className="switch" >
              <input type="checkbox" onClick={()=>ontheme()}/>
              <span className="slider round"></span>
          </label>
        </div>
        {/* <h1 className="title-header">GitHub Profiles</h1> */}
      </Container>
    </Theme>
  );
}