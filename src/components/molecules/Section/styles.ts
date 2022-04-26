import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 4vh;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
`;

export const Title = styled.h2`
  flex-shrink: 0;
  width: 100%;
  text-align: center;
  font-family: ${(props) => props.theme.fonts.bold};
  font-size: clamp(2rem, 6vw, 3.6rem);
  color: ${(props) => props.theme.colors.secondary_text};
`;

interface ContentProps {
  scrollable?: boolean;
}

export const Content = styled.div<ContentProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4vw;
  height: 100%;
  width: 100%;
  overflow-y: ${(props) => (props.scrollable ? "scroll" : "hidden")};
`;
