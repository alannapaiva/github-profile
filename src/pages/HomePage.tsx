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
  WarningUser,
} from "./HomePage.styles";
import { Header } from "./../components/Header";
import { useContext, useState } from "react";
import { Repositore } from "./../components/Repositore";
import { Link } from "@mui/material";
import { Following } from "@/components/Following";
import { Followers } from "@/components/Followers";
import { ThemeContext } from "@/context/context";

export const HomePage: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [axiosUser, setAxiosUser] = useState<any>([]);
  const [option, setOption] = useState(0);
  const [repositore, setRepositore] = useState<any>([]);
  const [followers, setFollowers] = useState<any>([]);
  const [following, setFollowing] = useState<any>([]);
  const [stars, setStars] = useState<any>([]);
  const [verifyUser, setVerifyUser] = useState(false);
  const { themeMode } = useContext(ThemeContext);


  const loadUser = async (userName: string) => {
    try { 
      const response = await axios.get(`https://api.github.com/users/${userName}`);
      setAxiosUser(response.data);
      setVerifyUser(false);
    } catch(err) { 
      setVerifyUser(true);
    }
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

  const findAll= async(userName:string)=>{
    loadUser(userName);
    loadFollowers(userName);
    loadFollowings(userName);
    loadRepositores(userName);
    loadStars(userName);
    onSelectOption(0);
  };

  const onSelectOption = (valueOption: number) => {
    if (valueOption == 1) {
      return setOption(1);
    } else if (valueOption == 2) {
      return setOption(2);
    } else if (valueOption == 3) {
      return setOption(3);
    } else if (valueOption == 4) {
      return setOption(4);
    } else {
      return setOption(0);
    }
  };

  return (
    <Theme>
      <Container className={themeMode}>
        <div className={themeMode == "darkTheme" ? "darkHeader" : "lightTheme"}>
          <Header />
        </div>
        <MainDiv>
          <DivInput>
            <div>
              <input
                placeholder="Inform user name"
                onChange={(e) => setUser(e.target.value) }
              />
              <button onClick={() => findAll(user)}>
                <p>Search</p>
              </button>
            </div>
            <WarningUser style={!verifyUser ? {display: "none"} : {}}>
               <p style={{display:"block",color:"red"}}>USUÁRIO NÃO ENCONTRADO</p>
            </WarningUser>
            <DivProfile onLoad={() => onSelectOption(0)}>
              <div>
                <img src={axiosUser?.avatar_url} style={axiosUser?.avatar_url?{display:"block"}:{display:"none"}} alt="profileImg" />
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
         
          <DivItems className={themeMode == "darkTheme" ? "darkOptions" : "lightTheme"}>
              <DivOptions
                style={
                  axiosUser?.name
                    ? { display: "block", padding: "15px 10px" }
                    : { display: "none" }
                }
              >
                <button onClick={() => onSelectOption(1)}>
                  <p>Repositórios</p>
                  <span>{axiosUser?.public_repos}</span>
                </button>
                <button onClick={() => onSelectOption(2)}>
                  <p>Seguidores</p>
                  <span>{axiosUser?.followers}</span>
                </button>
                <button onClick={() => onSelectOption(3)}>
                  <p>Seguindo</p>
                  <span>{axiosUser?.following}</span>
                </button>
                <button onClick={() => onSelectOption(4)}>
                  <p>Estrelas</p>
                  <span>{stars.length}</span>
                </button>
              </DivOptions>
                <OptionSelected
                  style={
                    option !== 0 ? { display: "block" } : { display: "none" }
                  }
                  className={
                    themeMode == "darkTheme" ? "darkOptions" : "lightTheme"
                  }
                >
                  <ul
                    style={
                      option === 1 ? { display: "block" } : { display: "none" }
                    }
                  >
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
                  <ul
                    style={
                      option === 2 ? { display: "block" } : { display: "none" }
                    }
                  >
                    {followers.map((projects: any) => (
                      <li>
                        <Followers
                          findAll={findAll}
                          avatar={projects.avatar_url}
                          login={projects.login}
                        />
                      </li>
                    ))}
                  </ul>
                  <ul
                    style={
                      option === 3 ? { display: "block" } : { display: "none" }
                    }
                  >
                    {following.map((projects: any) => (
                      <li>
                        <Following
                          findAll={findAll}
                          avatar={projects.avatar_url}
                          login={projects.login}
                        />
                      </li>
                    ))}
                  </ul>
                  <ul
                    style={
                      option === 4 && stars.length !== 0
                        ? { display: "block" }
                        : { display: "none" }
                    }
                  >
                    {stars.map((projects: any) => (
                      <li>
                        <Repositore
                          html_url={projects.html_url}
                          description={projects.description}
                          name={projects.name}
                          language={projects.language}
                          updated_at={projects.updated_at}
                        />
                      </li>
                    ))}
                  </ul>
                </OptionSelected>
            </DivItems>
        </MainDiv>
      </Container>
    </Theme>
  );
};
