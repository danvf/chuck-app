import {
  useGetChuckCategoriesQuery,
  useGetChuckRandomJokeQuery,
} from "../../../services/api/chuck";
import { Loader } from "../../atoms/Loader";
import { Category } from "../../atoms/Category";
import { Helper } from "../../atoms/Helper";
import { Section } from "../../molecules/Section";
import { Display } from "../../molecules/Display";
import { Status } from "../../atoms/Helper/types";
import { useState } from "react";
import * as S from "./styles";
import { ChuckNorrisJokesProps } from "./types";

export const ChuckNorrisJokes = ({ scrollRef }: ChuckNorrisJokesProps) => {
  const [chosenCategory, setChosenCategory] = useState<string>("");
  const [helperStatus, setHelperStatus] = useState<Status>("pick");

  const {
    data: categories,
    isLoading: isLoadingCategories,
    isSuccess: isSuccessCategories,
    isError: isErrorCategories,
    error: errorCategories,
  } = useGetChuckCategoriesQuery();

  const {
    currentData: randomJoke,
    isFetching: isFetchingJoke,
    isLoading: isLoadingJoke,
    refetch: refreshJoke,
  } = useGetChuckRandomJokeQuery(chosenCategory, { skip: !chosenCategory });

  const renderCategories = () => {
    if (isLoadingCategories) {
      return <Loader />;
    } else if (isSuccessCategories) {
      return categories.map((category: string, index: number) => (
        <Category
          id={category + "-btn"}
          key={index}
          index={index}
          title={category}
          onPick={() => pickCategory(category)}
          active={chosenCategory === category}
        />
      ));
    } else if (isErrorCategories) {
      return <h1>{errorCategories.toString()}</h1>;
    }
  };

  const pickCategory = (value: string) => {
    setChosenCategory(value);
    setHelperStatus("category");
  };

  return (
    <>
      <div ref={scrollRef}>
        <Section title={"Chuck Norris Jokes"}>
          <Display
            isLoading={isLoadingJoke || isFetchingJoke}
            onRefresh={refreshJoke}
            joke={randomJoke}
          />
          <S.CategoryPicker>
            <Helper status={helperStatus} category={chosenCategory} />
            <S.Scroll>{renderCategories()}</S.Scroll>
          </S.CategoryPicker>
        </Section>
      </div>
    </>
  );
};
