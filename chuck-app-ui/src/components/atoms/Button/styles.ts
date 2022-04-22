import styled from "styled-components";

interface ButtonStyledProps {
  size?: number;
}

export const PrimaryBtn = styled.button<ButtonStyledProps>`
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => (props.size ? props.size / 10 + "em" : "1.4em")};
`;

export const ArrowBtn = styled.button`
  background: transparent;
  color: ${(props) => props.theme.colors.text};
  border-radius: 100%;
  padding: 0;
`;
