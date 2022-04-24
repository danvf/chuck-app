import * as S from "./styles";

export const Loader = () => {
  return (
    <>
      <S.Ellipsis data-testid={"loader"}>
        <S.Dot />
        <S.Dot />
        <S.Dot />
        <S.Dot />
      </S.Ellipsis>
    </>
  );
};
