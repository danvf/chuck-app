import styled from "styled-components";

export const CategoryPicker = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Scroll = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;
