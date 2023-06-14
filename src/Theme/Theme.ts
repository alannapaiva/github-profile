import { styled } from "@mui/system";

export const Theme = styled("div")({
  margin:0,
  padding:0,

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
    backgroundColor:"#1D2227",
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
    
    DivItems: {
      backgroundColor: "#787878",
      
    },
/*     button:{
      backgroundColor: "#5F30E6",
      ": hover":{
        backgroundColor: "#1E2228",
      },
    },  
 */
  },
  ".darkHeader":{
    div:{
      backgroundColor:"#0D1117",
    },
  },
  ".darkOptions":{
    div:{
      backgroundColor: "#000",
      color: "#fff",
      borderRadius: "20px",
    },
    button:{
      backgroundColor:"#000",
      ": hover":{
        backgroundColor: "#1E2228",
      },
    }, 
  },
});