import styled from "styled-components";
import { FaCheck } from "react-icons/fa";

interface CategoryBtnProps {
  index: number;
}

interface ContainerProps {
  active: boolean;
}

export const Check = styled(FaCheck)`
  position: absolute;
  color: ${(props) => props.theme.colors.secondary_text};
  left: 2px;
  width: 3.5vw;
`;

export const Container = styled.div<ContainerProps>`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 60px;
  width: 100%;
  padding-left: ${(props) => (props.active ? "5vw" : "0")};
  transition: all ease 0.2s;

  &:hover {
    padding-left: 5vw;
    transform: translateY(0);
    cursor: pointer;
  }

  &:active {
    padding-left: 4vw;
    transform: translateY(0);
  }
`;

export const CategoryBtn = styled.button<CategoryBtnProps>`
  border-radius: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  font-size: 1.2rem;
  font-family: ${(props) => props.theme.fonts.regular};
  text-transform: lowercase;
  color: ${(props) => props.theme.colors.special_title};
  background: ${(props) =>
    props.theme.colors.categories[
      props.index % props.theme.colors.categories.length
    ]};

  &:hover {
    transform: translateY(0);
    cursor: pointer;
  }

  &:active {
    transform: translateY(0);
  }
`;
