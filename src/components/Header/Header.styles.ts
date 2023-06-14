import { HeaderContent } from './Header.styles';
import { styled } from "@mui/system";

export const Container = styled("div")({
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

},
);

export const HeaderContent = styled("div")(({theme}) =>({
  justifyContent:"space-between",
  display:"flex",
  [theme.breakpoints.down(900)]: {
    display:"flex",
    flexDirection:"column",
  },
}));

