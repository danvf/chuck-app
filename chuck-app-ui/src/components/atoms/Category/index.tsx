import * as S from "./styles";
import { CategoryProps } from "./types";

export const Category = ({ index, title }: CategoryProps) => {
  return (
    <>
      <S.Container>
        <S.CategoryBtn index={index}>{title}</S.CategoryBtn>
      </S.Container>
    </>
  );
};
