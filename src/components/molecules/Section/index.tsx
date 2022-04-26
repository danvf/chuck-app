import * as S from "./styles";
import { SectionProps } from "./types";

export const Section = ({ title, children }: SectionProps) => {
  return (
    <>
      <S.Container>
        <S.Title>{title}</S.Title>
        <S.Content>{children}</S.Content>
      </S.Container>
    </>
  );
};
