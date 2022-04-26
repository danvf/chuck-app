import { FaChevronCircleDown, FaSyncAlt } from "react-icons/fa";
import * as S from "./styles";
import { ButtonProps } from "./types";

export const Button = ({
  id,
  onClick,
  disabled,
  size,
  type,
  children,
}: ButtonProps) => {
  switch (type) {
    case "primary":
      return (
        <S.PrimaryBtn
          id={id}
          data-testid={id}
          onClick={onClick}
          size={size}
          disabled={disabled}
        >
          {children}
        </S.PrimaryBtn>
      );
    case "arrow":
      return (
        <S.ArrowBtn
          id={id}
          data-testid={id}
          onClick={onClick}
          disabled={disabled}
        >
          <FaChevronCircleDown size={40} />
        </S.ArrowBtn>
      );
    case "refresh":
      return (
        <S.RefreshBtn
          id={id}
          data-testid={id}
          onClick={onClick}
          disabled={disabled}
        >
          <FaSyncAlt size={24} />
        </S.RefreshBtn>
      );
  }
};
