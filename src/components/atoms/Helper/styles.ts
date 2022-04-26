import styled from "styled-components";

export const Hint = styled.p`
  color: ${(props) => props.theme.colors.secondary_text};
  font-size: 1rem;
  font-family: ${(props) => props.theme.fonts.medium};
  min-height: 20px;
  margin-bottom: 4px;
  overflow-y: scroll;
`;
