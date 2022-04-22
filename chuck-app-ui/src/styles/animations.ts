import { css, keyframes } from "styled-components";

const gradientKeyframes = keyframes`
    0%{background-position:0% 25%}
    50%{background-position:100% 75%}
    100%{background-position:0% 25%}
`;

export const gradientChangingBackground = css`
  background: linear-gradient(
    0deg,
    ${(props) => props.theme.colors.categories.toString()}
  );
  background-size: 1000% 1000%;
  -webkit-animation: ${gradientKeyframes}
    ${(props) => props.theme.colors.categories.length * 2 + "s"} ease infinite;
  -moz-animation: ${gradientKeyframes}
    ${(props) => props.theme.colors.categories.length * 2 + "s"} ease infinite;
  animation: ${gradientKeyframes}
    ${(props) => props.theme.colors.categories.length * 2 + "s"} ease infinite;
`;
