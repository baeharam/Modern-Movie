import { style } from "@vanilla-extract/css";
import { navigatorHeight } from "../../styles/vars.css";

export const navigator = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  fontWeight: "bold",
  color: "white",
  width: "80%",
  height: navigatorHeight,
  margin: "0 auto"
})

export const naviagorMenu = style({
  display: "flex",
  width: "220px",
  justifyContent: "space-between"
})