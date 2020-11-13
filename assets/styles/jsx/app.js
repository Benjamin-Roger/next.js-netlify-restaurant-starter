import css from "styled-jsx/css";
import { colors } from "@/utils/colorScheme";

export default css.global`
  body {
    color: ${colors.text.regular};
  }

  a,
  h1 {
    color: ${colors.primary.main};
    text-decoration: none;
    transition-duration: 0.15s;
  }

  a:hover {
    color: ${colors.primary.dark};
  }

`;
