import styled from "styled-components";
import { gradientChangingBackground } from "../../../styles/animations";

export const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 5vh;
  width: 100vw;
  height: 100vh;
  ${gradientChangingBackground}
`;

export const Title = styled.h1`
  font-family: ${(props) => props.theme.fonts.bold};
  font-size: clamp(3rem, 14vw, 6rem);
  color: ${(props) => props.theme.colors.special_title};
`;

export const Subtitle = styled.h2`
  font-family: ${(props) => props.theme.fonts.bold};
  font-size: clamp(1rem, 4vw, 1.6rem);
  color: ${(props) => props.theme.colors.text};
`;

export const Footer = styled.span`
  position: absolute;
  min-height: 50px;
  bottom: 24px;
  display: flex;
  justify-content: center;
  width: 100%;
`;
