import { globalStyle } from "@vanilla-extract/css";

globalStyle("html, body", {
  margin: 0
})

globalStyle("ul", {
  margin: 0,
  padding: 0
});

globalStyle("li", {
  listStyleType: "none"
})

globalStyle("h2", {
  margin: 0
})

globalStyle("a", {
  textDecoration: "none",
  color: "inherit"
})