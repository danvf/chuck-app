import { render, screen } from "@testing-library/react";
import { useRef } from "react";
import { ChuckNorrisJokes } from ".";

describe("Templates -> ChuckNorrisJokes", () => {
  it("Must render the ChuckNorrisJokes component properly", () => {
    render(<ChuckNorrisJokes scrollRef={useRef(null)} />);
    const title = screen.getByText("Categories");
    expect(title).toBeInTheDocument();
  });
});
