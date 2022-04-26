import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { ChuckNorrisJokes } from ".";
import { MockWrapper } from "../../../tests/mocks";

describe("Templates -> ChuckNorrisJokes", () => {
  it("Must render the ChuckNorrisJokes component properly", () => {
    render(
      <MockWrapper>
        <ChuckNorrisJokes scrollRef={createRef()} />
      </MockWrapper>
    );
    const title = screen.getByText("Chuck Norris Jokes");
    expect(title).toBeInTheDocument();
  });
});
