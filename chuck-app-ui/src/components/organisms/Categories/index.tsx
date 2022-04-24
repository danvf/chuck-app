import { useGetCategoriesQuery } from "../../../services/api/chuck";
import { Loader } from "../../atoms/Loader";
import { Category } from "../../atoms/Category";
import * as S from "./styles";
import { Section } from "../../molecules/Section";

export const Categories = () => {
  const {
    data: categories,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetCategoriesQuery();

  const renderCategories = () => {
    if (isLoading) {
      return <Loader />;
    } else if (isSuccess) {
      return categories.map((category: string, index: number) => {
        return <Category key={index} index={index} title={category} />;
      });
    } else if (isError) {
      return <h1>{error.toString()}</h1>;
    }
  };

  return (
    <>
      <Section title={"Categories"}>{renderCategories()}</Section>
    </>
  );
};
