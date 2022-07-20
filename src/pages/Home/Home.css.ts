import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { navigatorHeight } from "../../styles/vars.css";

export const container = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: calc.subtract("100vh", navigatorHeight)
})

export const movieInfo = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  height: "200px",
  color: "white",
  fontSize: "30px",
  marginTop: "-50px"
})

export const backgroundImage = style({
  position: "absolute",
  inset: 0,
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  zIndex: -1,

  selectors: {
    "&:after": {
      content: "",
      position: "absolute",
      inset: 0,
      backgroundColor: "black",
      opacity: 0.3
    }
  }
})

export const moreButton = style({
  backgroundColor: "white",
  fontSize: "20px",
  border: "2px solid black",
  color: "black",
  padding: "10px 20px",
  cursor: "pointer",

  selectors: {
    "&:hover": {
      backgroundColor: "black",
      color: "white",
    }
  }
})