import styled from "styled-components";

export const Hint = styled.p`
  font-size: 1rem;
  font-family: ${(props) => props.theme.fonts.medium};
  min-height: 20px;
  margin-bottom: 4px;
  overflow-y: scroll;
`;
