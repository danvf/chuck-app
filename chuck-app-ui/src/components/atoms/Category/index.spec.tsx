import { render } from "@testing-library/react";
import { Category } from ".";

describe("Atoms -> Category", () => {
  it("should render children components properly", () => {
    render(<Category index={0} title={"test"} />);
  });
});
