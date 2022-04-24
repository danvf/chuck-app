import { Button } from "../../atoms/Button";
import * as S from "./styles";

export const Home = () => {
  const scrollToCategorySearch = () => {};

  return (
    <>
      <S.Container>
        <S.Title>Giggle</S.Title>
        <S.Subtitle>Joke Generator</S.Subtitle>
        <S.Footer>
          <Button
            id={"start-btn"}
            onClick={() => scrollToCategorySearch()}
            type={"arrow"}
          />
        </S.Footer>
      </S.Container>
    </>
  );
};
