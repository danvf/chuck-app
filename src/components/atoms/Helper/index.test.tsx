import { render, screen } from "@testing-library/react";
import { Helper } from ".";
import { MockWrapper } from "../../../tests/mocks";

describe("Atoms -> Helper", () => {
  it("Must render the Helper component with the pick status", () => {
    render(
      <MockWrapper>
        <Helper status="pick" category="" />
      </MockWrapper>
    );
    const hint = screen.getByText("Pick a category below:");
    expect(hint).toBeInTheDocument();
  });
  it("Must render the Helper component with the category status", () => {
    render(
      <MockWrapper>
        <Helper status="category" category="test" />
      </MockWrapper>
    );
    const hint = screen.getByText("Category: test");
    expect(hint).toBeInTheDocument();
  });
});
