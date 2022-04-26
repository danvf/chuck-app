import * as S from "./styles";
import { HelperProps } from "./types";

export const Helper = ({ status, category }: HelperProps) => {
  const getHelperText = () => {
    switch (status) {
      case "category":
        return "Category: " + category;
      case "pick":
        return "Pick a category below: ";
      case "error":
        return "An error has ocurred";
    }
  };

  return (
    <>
      <S.Hint>{getHelperText()}</S.Hint>
    </>
  );
};
