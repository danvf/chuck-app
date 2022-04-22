import styled from "styled-components";
import { gradientChangingBackground } from "../../../styles/animations";
import { fonts } from "../../../styles/themes";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10vh;
  width: 100vw;
  height: 100vh;
  ${gradientChangingBackground}
`;

export const Title = styled.h1`
  font-family: ${fonts.Apercu.bold};
  font-size: clamp(2rem, 14vw, 6rem);
  color: ${(props) => props.theme.colors.text};
`;

export const Subtitle = styled.h2`
  font-family: ${fonts.Apercu.bold};
  font-size: clamp(0.8rem, 4vw, 1.6rem);
  color: ${(props) => props.theme.colors.text};
`;

export const Footer = styled.span`
  position: absolute;
  bottom: 24px;
  display: flex;
  justify-content: center;
  width: 100%;
`;
