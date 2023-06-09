import { styled } from "@mui/system";

export const Container = styled("div")(({theme}) =>({
  width:"100vw",
  height:"60px",
  backgroundColor:"#C5C5C5",
  label: {
    right: "50px",
    top: "25px",
  },
  
  ".header-title": {
    fontSize: "1.875em",
    fontFamily: "Arial",
    marginLeft: "3rem",
    marginTop: "1rem",
    [theme.breakpoints.down(387)]: {
      display: "flex",
      alignItems: "center",
      fontSize: "25px",
      marginTop: "18px",
    },
    [theme.breakpoints.down(337)]: {
      display: "flex",
      alignItems: "center",
      fontSize: "23px",
      marginTop: "20px",
    },
    [theme.breakpoints.down(319)]: {
      display: "flex",
      alignItems: "center",
      fontSize: "21px",
      marginTop: "22px",
    },
    [theme.breakpoints.down(301)]: {
      display: "flex",
      alignItems: "center",
      fontSize: "20px",
      marginTop: "22px",
      marginRight: "5px",
    },
  },

   ".switch ": {
    position: "absolute",
    display: "inline-block",
    width: "50px",
    height: "30px",
    marginTop: "-9px",
  },
  "& .switch input": {
    opacity: 0,
    width: 0,
    height: 0,
  },
  "& .slider": {
    position: "absolute",
    cursor: "pointer",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: "#5F30E5",
    WebkitTransition: ".4s",
    transition: ".4s",
  },
  "& .slider:before": {
    position: "absolute",
    content: '""',
    height: "22px",
    width: "22px",
    left: "1px",
    bottom: "4px",
    backgroundColor: "white",
    WebkitTransition: ".4s",
    transition: ".4s",
  },
  "& input:checked+ .slider": {
    backgroundColor: "#CCC",
  },
  "& input:focus+ .slider": {
    boxShadow: "0 0 1px #5F30E5",
  },
  "& input:checked+ .slider:before": {
    WebkitTransform: "translateX(26px)",
    MsTransform: "translateX(26px)",
    transform: "translateX(26px)",
  },
  "& .slider.round": {
    borderRadius: "34px",
  },
  "& .slider.round:before": {
    borderRadius: "50%",
  },

}));

export const HeaderContent = styled("div")({
  justifyContent:"space-between",
  display:"flex",
});

