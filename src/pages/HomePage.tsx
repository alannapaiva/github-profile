import axios from "axios";
import { Theme } from "./../Theme/Theme";
import {
  Container,
  MainDiv,
  DivInput,
  DivOptions,
  OptionSelected,
  DivProfile,
  UserName,
  LoginProfile,
  BioProfile,
  DivItems,
} from "./HomePage.styles";
import { Header } from "./../components/Header";
import { useState } from "react";
import { Userprops } from "../utils/user";
import { Repositore } from "./../components/Repositore";
import { Link } from "@mui/material";
import { Following } from "@/components/Following";
import { Followers } from "@/components/Followers";

export const HomePage: React.FC = () => {
  const [user, setUser] = useState <Userprops | null>(null);
  const [axiosUser, setAxiosUser] = useState<any>([]);
  const [option, setOption] = useState(0);
  const [repositore, setRepositore] = useState<any>([]);
  const [followers, setFollowers] = useState<any>([]);
  const [following, setFollowing] = useState<any>([]); 
  const [stars, setStars] = useState<any>([]);
  const [verifyUser, setVerifyUser] = useState(false);
  const [buttonMode, setButtonMode] = useState(false);
  const [selectColor, setSelectColor] = useState("#E7E7E7");

  const ontheme = ()=>{
    console.log(buttonMode);
    if(buttonMode===false){
      setSelectColor("#1E2228");
      return setButtonMode(true);
    }else{
      setSelectColor("#E7E7E7");
      return setButtonMode(false);
    }
  } 

  
  const loadUser = async(userName:string)=>{
    const res = await fetch(`https://api.github.com/users/${userName}`)
    const data = await res.json();
    const {avatar_url, login, bio, html_url, public_repos, name, location, followers, following } = data;
    const userData: Userprops = {
      avatar_url,
      name,
      html_url,
      login,
      location,
      followers,
      following,
      public_repos,
      bio,
    };
    setAxiosUser(userData);
    setVerifyUser(true);
  };

  const loadFollowers = async (userName: string) => {
    axios
      .get(`https://api.github.com/users/${userName}/followers`)
      .then((response: any) => {
        const dataFollowers = response.data;
        setFollowers(dataFollowers);
      });
  };
  const loadFollowings = async (userName: string) => {
    axios
      .get(`https://api.github.com/users/${userName}/following`)
      .then((response: any) => {
        const dataRepos = response.data;
        setFollowing(dataRepos);
      });
  };
  const loadRepositores = async (userName: string) => {
    axios
      .get(`https://api.github.com/users/${userName}/repos`)
      .then((response: any) => {
        const dataRepos = response.data;
        setRepositore(dataRepos);
      });
  };
  const loadStars = async (userName: string) => {
    axios
      .get(`https://api.github.com/users/${userName}/starred`)
      .then((response: any) => {
        const dataRepos = response.data;
        setStars(dataRepos);
      });
  };

  const findAll = (user: string) => {
    loadUser(user);
    loadFollowers(user);
    loadFollowings(user);
    loadRepositores(user);
    loadStars(user);
    onSelectOption(0);
  };

  const onSelectOption = (valueOption:number) => {
    if(valueOption == 1){
      return setOption(1);
    }
    else if(valueOption == 2){
      return setOption(2);
    }
    else if(valueOption == 3){
      return setOption(3);

    }else if(valueOption == 4){
      return setOption(4);

    }else{
      return setOption(0);
    }
  };

  return (
    <Theme>
      <Container className={buttonMode ? "darkThemeInfo darkThemeDiv":"lightThemeInfo"}>
      <Theme className={buttonMode?"darkThemeDiv darkThemeElement":"lightThemeDiv"}>
          <Header/>
        </Theme>
        <MainDiv>
          <DivInput>
            <div>
              <input
              placeholder="Inform user name"
              onChange={(e) => setUser(e.target.value)}
              />
              <button onClick={() => findAll(user)}>
                <p>Search</p>
              </button>
            </div> 
            <DivProfile onLoad={()=>onSelectOption(0)}>
              <div>
                <img src={axiosUser?.avatar_url} alt="profileImg" />
                <Link
                  href={axiosUser?.html_url}
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <UserName>{axiosUser?.name}</UserName>
                </Link>
                <LoginProfile>{axiosUser?.login}</LoginProfile>
                <BioProfile>{axiosUser?.bio}</BioProfile>
              </div>
            </DivProfile>
          </DivInput>
          <DivItems className={buttonMode?"darkThemeElement":""}>
            <DivOptions style={axiosUser?.name?{display:"block",padding:"15px 10px"}:{display:"none"}}>
              <button onClick={()=>onSelectOption(1)} style={option===1?{backgroundColor:`${selectColor}`}:{}}><p>Repositórios</p><span>{axiosUser?.public_repos}</span></button>
              <button onClick={()=>onSelectOption(2)} style={option===2?{backgroundColor:`${selectColor}`}:{}}><p>Seguidores</p><span>{axiosUser?.followers}</span></button>
              <button onClick={()=>onSelectOption(3)} style={option===3?{backgroundColor:`${selectColor}`}:{}}><p>Seguindo</p><span>{axiosUser?.following}</span></button>
              <button onClick={()=>onSelectOption(4)} style={option===4?{backgroundColor:`${selectColor}`}:{}}><p>Estrelas</p><span>{axiosUser.length}</span></button>
            </DivOptions>
            <OptionSelected  style={option!==0?{display:"block"}:{display:"none"}}>
              <ul style={option===1?{display:"block"}:{display:"none"}}>
                {repositore.map((obj: any) => (
                  <li>
                    <Repositore
                      html_url={obj.html_url}
                      description={obj.description}
                      name={obj.name}
                      language={obj.language}
                      updated_at={obj.updated_at}
                    />
                  </li> 
                ))}
              </ul>
              <ul style={option===2?{display:"block"}:{display:"none"}}>
                {
                  followers.map((projects: any)=>
                    <li>
                      <Followers
                        findUser={findAll}
                        avatar={projects.avatar_url}
                        login={projects.login}
                      />
                    </li>
                )}
              </ul>
              <ul style={option===3?{display:"block"}:{display:"none"}}>
                {
                  following.map((projects: any)=>
                    <li>
                      <Following
                        findUser={findAll}
                        avatar={projects.avatar_url}
                        login={projects.login}
                      />
                    </li>
                )}
              </ul>
              <ul style={(option===4 && stars.length!==0)?{display:"block"}:{display:"none"}}>
                {
                  stars.map((projects: any)=>
                    <li>
                      <Repositore
                        html_url={projects.html_url}
                        description={projects.description}
                        name={projects.name}
                        language={projects.language}
                        updated_at={projects.updated_at}
                      />
                    </li>
                )}
              </ul>
            </OptionSelected>
            
          </DivItems>
        </MainDiv>
      </Container>
    </Theme>
  );
};
