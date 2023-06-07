import {Container,ImageProfile} from "./Followers.styles";

interface Repositoresprops{
  avatar:string;
  login:string;
  findAll:(userName:string) => Promise<void>
}

export const Followers : React.FC <Repositoresprops>= ({
  avatar,
  login,
  findAll,
}) => {
  return(
    <Container onClick={()=>findAll(login)}>
        <div>
          <ImageProfile src={avatar} />
          <h3>{login}</h3>
        </div>
    </Container>
  );
};