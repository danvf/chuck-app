import { render } from "@testing-library/react";
import { Category } from ".";

describe("Atoms -> Category", () => {
  it("should render a category properly", () => {
    render(
      <Category
        index={0}
        title={"test"}
        id={"test-btn"}
        onPick={() => {}}
        active={false}
      />
    );
  });
  it("should execute the onPick function when clicked", () => {
    render(
      <Category
        index={0}
        title={"test"}
        id={"test-btn"}
        onPick={() => {}}
        active={false}
      />
    );
  });
});
