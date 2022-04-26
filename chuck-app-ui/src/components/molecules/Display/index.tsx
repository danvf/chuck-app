import { Button } from "../../atoms/Button";
import { Loader } from "../../atoms/Loader";
import * as S from "./styles";
import { DisplayProps } from "./types";
import chuckPng from "../../../assets/chuck_8bit.png";

export const Display = ({ isLoading, onRefresh, joke }: DisplayProps) => {
  const renderContent = () => {
    if (isLoading) {
      return (
        <S.LoaderContainer>
          <Loader />
        </S.LoaderContainer>
      );
    } else if (!joke) {
      return (
        <S.ChuckImage
          src={chuckPng}
          alt={"8-bit representation of chuck norris"}
        />
      );
    } else {
      return (
        <>
          <S.JokeBox>
            <S.Joke>{'"' + joke + '"'}</S.Joke>
          </S.JokeBox>
          <Button
            id={"refresh-joke-btn"}
            onClick={onRefresh}
            type={"refresh"}
          />
        </>
      );
    }
  };
  return (
    <>
      <S.Sentence>{renderContent()}</S.Sentence>
    </>
  );
};
