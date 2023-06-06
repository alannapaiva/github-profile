import { styled } from "@mui/system";

export const Theme = styled("div")({
  margin:0,
  padding:0,
  ".darkThemeDiv":{
    backgroundColor: "#1D2227",
  },
  ".lightThemeDiv":{
    backgroundColor: "#C5C5C5",
  },
  ".darkThemeElement":{
    div:{
      backgroundColor: "#0D1117",
    }, 
  },
  ".lightTheme":{
    h1:{
      color: "#0D1117",
    },
    h2:{
      color: "#0D1117",
    },
    h3:{
      color: "#5F30E5",
    },
    h6:{
      color: "#0D1117",
    },
  },
  
  ".darkTheme":{
    h1:{
      color:"#EFEFEF",
    },
    h2:{
      color:"#C5C5C5",
    },
    h4:{
      color:"#787878"
    },
    h6:{
      color:"#FFFFFF",
    },
    p:{
      color: "#D6D6D6",
    },
    button:{
      backgroundColor: "#0D1117",
      ": hover":{
        backgroundColor: "#1E2228",
      },
    },
  }
});