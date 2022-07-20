import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { navigatorHeight } from "../../styles/vars.css";

export const container = style({
  paddingTop: navigatorHeight,
  minHeight: calc.subtract("100vh", navigatorHeight)
})

export const backgroundMovieImage = style({
  position: "relative",
  height: "45vh",
  backgroundSize: "cover",
  backgroundPosition: "center center",

  selectors: {
    "&:after": {
      content: "",
      position: "absolute",
      inset: 0,
      backdropFilter: "grayscale(100%)"
    }
  }
})

export const contents = style({
  width: "65vw",
  margin: "0 auto",
  position: "relative",
})

export const contents__poster = style({
  position: "absolute",
  top: "-70px",
  width: "300px",
  borderRadius: "5px",
})

export const contents__description = style({
  marginLeft: "30px"
})