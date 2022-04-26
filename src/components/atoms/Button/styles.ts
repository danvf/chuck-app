import styled, { keyframes } from "styled-components";

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

const refreshRotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const RefreshBtn = styled.button`
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
  border-radius: 100%;
  min-width: 50px;
  min-height: 50px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  margin: 8px 0;

  &:hover {
    animation: ${refreshRotateAnimation} 2s linear infinite;
  }

  &:active {
    background: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.secondary_text};
    border: 2px solid ${(props) => props.theme.colors.secondary_text};
  }

  @media (max-width: 768px) {
    margin-left: auto;
  }
`;

export const ThemeBtn = styled.button`
  position: absolute;
  top: 16px;
  background: transparent;
  color: ${(props) => props.theme.colors.text};
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 60px;
  min-height: 60px;
  padding: 0;
  font-style: ${(props) => props.theme.fonts.regular};
  font-size: 1rem;
`;
