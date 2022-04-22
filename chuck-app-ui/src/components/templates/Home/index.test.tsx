import { render } from "@testing-library/react";
import { Home } from ".";

describe("Templates -> Home", () => {
  it("Must render the Home component properly", () => {
    const view = render(<Home />);
    expect(view).toBeInTheDocument();
  });
});
