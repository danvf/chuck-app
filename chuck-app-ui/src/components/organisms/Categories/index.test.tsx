import { render, screen } from "@testing-library/react";
import { Categories } from ".";

describe("Templates -> Categories", () => {
  it("Must render the Categories component properly", () => {
    render(<Categories />);
    const title = screen.getByText("Categories");
    expect(title).toBeInTheDocument();
  });
});
