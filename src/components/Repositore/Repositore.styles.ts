import { styled } from "@mui/system";

export const Container = styled("div")({
  a:{
    textDecoration:"none",
  },
  cursor: "pointer",
  flexDirection: "column",
  display: "flex",
  padding: "13px 0 14px 0",
  p: {
    margin: "0px 15px",
  },
  ":after": {
    display: "block",
    position: "relative",
    top: "13px",
    margin: "0",
    content: '""',
    width: "270px",
    height: "2px",
    backgroundColor: "#5F30E6",
  },
});

export const Name = styled("h3")({
  margin:"0 15px",
  color:"#5F30E5",
  fontWeight:400,
  fontSize:"24px",
  lineHeight:"32px",
});

export const Description = styled("h4")({
  margin:"0 15px",
  color: "#1D2227",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "19px",
});

export const LanguageAndUpdate = styled("div")({
  display: "flex",
  flexDirection: "row",
  p: {
    margin:"5px 0 0 15px",
    color: "#1D2227",
    fontWeigh: 400,
    fontSize: "12px",
    lineHeight:"16px",
  },
});