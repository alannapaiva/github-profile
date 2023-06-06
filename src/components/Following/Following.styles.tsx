import { styled } from "@mui/system";

export const Container = styled("div")({
  cursor: "pointer",
  flexDirection: "column",
  display:"flex",
  padding:"13px 0 14px 0",
  div:{
    display:"flex",
    alignItems:"center",
    flexDirection:"row",
    h3:{
      marginLeft:"15px",
      color:"#5F30E6",
      fontSize:"16px",
      fontWeight: 400,
      lineHeight:"21px",
    },
  },
  ":after": {
    display:"block",
    position:"relative",
    top:"13px",
    margin:"0",
    content: '""',
    width: "270px",
    height:"2px",
    backgroundColor: "#5F30E6",
  },
});

export const ImageProfile = styled("img")({
  height: "60px",
  width: "60px",
  borderRadius: "40px",
  borderColor: "#5E30E6 !important",
  borderWidth: "2px !important",
  border: "solid",
});
