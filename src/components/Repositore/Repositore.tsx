import { Link } from "@mui/material";
import { Container, Name, Description, LanguageAndUpdate } from "./Repositore.styles"

interface Repositoreprops{
  html_url:string;
  description:string;
  name:string;
  language:string;
  updated_at:string;
}

export const Repositore : React.FC<Repositoreprops> = ({
  description,
  html_url,
  name,
  language,
  updated_at,
}) =>{
  return(
    <Container>
      <Link href={html_url} target="_blank"><Name>{name}</Name></Link>
      <Description>{description?description:"None"}</Description>
      <LanguageAndUpdate>
        <p>{language?language:"None"}</p>
        <p>{updated_at}</p>
      </LanguageAndUpdate>
    </Container>
  )
}