import styled from "styled-components";

interface CardProps {
  index: number;
}

export const Container = styled.div`
  height: 60px;
  width: 50vw;

  transition: all ease 0.2s;

  &:hover {
    padding-left: 5vw;
    transform: translateY(0);
    cursor: pointer;
  }

  &:active {
    padding-left: 2vw;
    margin-left: 5vw;
    transform: translateY(0);
  }
`;

export const CategoryBtn = styled.button<CardProps>`
  border-radius: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  background: ${(props) =>
    props.theme.colors.categories[
      props.theme.colors.categories.lenght % (props.index + 1)
    ]};

  &:hover {
    transform: translateY(0);
    cursor: pointer;
  }

  &:active {
    margin-left: 5vw;
    transform: translateY(0);
  }
`;
