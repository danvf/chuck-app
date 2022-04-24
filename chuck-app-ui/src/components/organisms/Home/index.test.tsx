import { render, screen } from "@testing-library/react";
import { Home } from ".";

describe("Templates -> Home", () => {
  it("Must render the Home component properly", () => {
    render(<Home />);
    const title = screen.getByText("Giggle");
    expect(title).toBeInTheDocument();
  });
});
