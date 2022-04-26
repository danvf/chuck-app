import { useRef } from "react";
import { ChuckNorrisJokes } from "../../organisms/ChuckNorrisJokes";
import { Home } from "../../organisms/Home";

export const LandingPage = () => {
  const categoriesRef = useRef(null);

  return (
    <>
      <Home scrollRef={categoriesRef} />
      <ChuckNorrisJokes scrollRef={categoriesRef} />
    </>
  );
};
