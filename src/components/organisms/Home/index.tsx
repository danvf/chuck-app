import { useAppSelector, useAppDispatch } from "../../../services/hooks";
import { setTheme } from "../../../services/slices/global";
import { darkTheme, defaultTheme } from "../../../styles/themes";
import { Button } from "../../atoms/Button";
import * as S from "./styles";
import { HomeProps } from "./types";

export const Home = ({ scrollRef }: HomeProps) => {
  const { theme } = useAppSelector((state) => state.global);
  const dispatch = useAppDispatch();

  const scrollToCategorySearch = () => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const switchTheme = () => {
    if (theme.name === "default") {
      dispatch(setTheme(darkTheme));
    } else {
      dispatch(setTheme(defaultTheme));
    }
  };

  return (
    <>
      <S.Container>
        <Button id={"theme-btn"} onClick={() => switchTheme()} type="theme" />
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
