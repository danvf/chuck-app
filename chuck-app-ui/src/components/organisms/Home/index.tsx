import { Button } from "../../atoms/Button";
import * as S from "./styles";
import { HomeProps } from "./types";

export const Home = ({ scrollRef }: HomeProps) => {
  const scrollToCategorySearch = () => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  };

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
