import { styled } from "@mui/system";

export const Container = styled("div")({
  minHeight:"100vh",
  width: "100%",
  overflowY: "auto",
  "::-webkit-scrollbar": {
    width: "10px",
  },
});

export const MainDiv = styled("div")(({theme}) =>({
  justifyContent:"space-evenly",
  paddingTop:"30px",
  display:"flex",
  [theme.breakpoints.down(950)]: {
    flexDirection:"column",
  },
}));

export const DivInput = styled("div")(({theme}) =>({
  [theme.breakpoints.down(950)]: {
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
  },
  input:{
    maxWidth:"430px",
    width:"40vw",
    height:"45px",
    backgroundColor:"#DFDFDF",
    border:"4px solid #5F30E6",
    borderRadius:"20px",

    paddingLeft:"20px",
    fontWeight:500,
    fontSize:"20px",
    lineHeight:"32px",
    color:"#787878",
    outline: "none",
  },
  button: {
    marginLeft: "2vw",
    height: "55px",
    width: "120px",
    backgroundColor: "#5F30E6",
    borderRadius: "20px",
    border: "0px",
    cursor: "pointer",
    outline: "none",
  },
  p:{
    margin:0,
    color:"#EFEFEF",
    fontSize:"20px",
    lineHeight:"32px",
    fontWeight:550,
  }
}));

export const DivOptions = styled("div")({
  background:"#C5C5C5",
  borderRadius:"20px",
  width:"280px",
  height:"130px",
  padding:"15px 10px",
  button:{
    backgroundColor: "#C5C5C5",
    cursor: "pointer",
    borderStyle:"none",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    textAlign:"start",
    color:"#0D1117",
    width:"280px",
    height:"34px",
    fontWeight:400,
    fontSize:"20px",
    lineHeight:"28px",
    borderRadius:"20px",
    ":hover": {
      backgroundColor: "white",
    },
  },
  span:{
    padding:"0 2px",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    minWidth:"25px",
    height:"25px",
    fontWeight:400,
    fontSize:"16px",
    lineHeight:"19px",
    backgroundColor:"#5F30E6",
    color:"#FFFFFF",
    borderRadius:"20px",
  }
});

export const OptionSelected = styled("div")({
  marginTop:"15px",
  maxWidth:"280px",
  borderRadius: "20px",
  backgroundColor: "#C5C5C5",
  padding: "0px 10px 4px",
  display: "block",
  flexDirection: "column",
  ul: {
    margin:0,
    maxHeight: "340px",
    overflowY: "auto",
    "::-webkit-scrollbar": {
      width: "10px",
    },
    padding: 0,
    li: {
      listStyle: "none",
    },
  },
});

export const DivProfile = styled ("div")({
  display:"flex",
  justifyContent:"center",
  maxWidth:"450px",
  cursor: "pointer",
  img:{
    marginTop:"65px",
    borderRadius: "80px",
    borderColor: "#5E30E6 !important",
    borderWidth: "2px !important",
    border: "1px solid #5E30E6",
    width: "150px",
    marginLeft: "100px",
  },
  "h1:hover": {
    color: "#5E30E6",
  },
});

export const UserName = styled("h1")({
  margin:0,
  marginTop: "30px",
  marginLeft: "30px",
  fontWeight:500,
  fontSize:"32px",
  lineHeight:"38px",
  color:"#0D1117",
  fontFamily: "Roboto",
})

export const LoginProfile = styled("h2")({
  color: "#0D1117",
  fontFamily: "Roboto",
  fontWeight: "400",
  fontStyle: "italic",
  margin: 0,
  marginLeft: "30px",
  fontSize: "24px",
  marginTop: "6px",
});

export const BioProfile = styled("h6")({
  fontSize: "24px",
  fontFamily: "Roboto",
  marginLeft: "30px",
  fontWeight: 400,
  lineHeight: "28px",
  marginTop: "6px",
});

export const DivItems = styled("div")(({theme}) =>({
  [theme.breakpoints.down(950)]: {
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
  },
}));

export const WarningUser = styled("div")({
  width:"100%",
  display:"flex",
  justifyContent:"center",
});