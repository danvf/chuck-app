import styled from "styled-components";

export const ChuckImage = styled.img`
  width: 300px;
  height: auto;
`;

export const Sentence = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  max-height: 400px;
  text-align: center;
  overflow-y: hidden;
`;

export const JokeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  padding: 0 2vw;
`;

export const Joke = styled.h1`
  color: ${(props) => props.theme.colors.secondary_text};
  font-size: clamp(1.1rem, 5vw, 2.8rem);
  font-family: ${(props) => props.theme.fonts.regular};
`;

export const LoaderContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
