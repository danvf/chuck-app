import * as S from "./styles";
import { CategoryProps } from "./types";

export const Category = ({
  id,
  index,
  onPick,
  title,
  active,
}: CategoryProps) => {
  return (
    <>
      <S.Container active={active}>
        {active && <S.Check data-testid={"check-icon"} size={24} />}
        <S.CategoryBtn id={id} data-testid={id} index={index} onClick={onPick}>
          {title}
        </S.CategoryBtn>
      </S.Container>
    </>
  );
};
