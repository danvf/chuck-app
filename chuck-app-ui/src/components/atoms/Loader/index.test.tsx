import { render, screen } from "@testing-library/react";
import { Loader } from ".";

describe("Atoms -> Loader", () => {
  it("Must render the Loader component properly", () => {
    render(<Loader />);
    const button = screen.getByTestId("loader");
    expect(button).toBeInTheDocument();
  });
});
