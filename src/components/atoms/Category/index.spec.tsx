import { fireEvent, render, screen } from "@testing-library/react";
import { Category } from ".";
import { MockWrapper } from "../../../tests/mocks";

describe("Atoms -> Category", () => {
  const onPick = jest.fn();

  it("should render a category properly", () => {
    render(
      <MockWrapper>
        <Category
          index={0}
          title={"test"}
          id={"test-btn"}
          onPick={onPick}
          active={false}
        />
      </MockWrapper>
    );
    const button = screen.getByTestId("test-btn");
    expect(button).toBeInTheDocument();
  });
  it("should execute the onPick function when clicked", () => {
    render(
      <MockWrapper>
        <Category
          index={0}
          title={"test"}
          id={"test-btn"}
          onPick={onPick}
          active={false}
        />
      </MockWrapper>
    );
    const button = screen.getByTestId("test-btn");
    fireEvent.click(button);
    expect(onPick).toHaveBeenCalled();
  });
  it("should render the component differently if the active prop is set to true", () => {
    render(
      <MockWrapper>
        <Category
          index={0}
          title={"test"}
          id={"test-btn"}
          onPick={onPick}
          active={true}
        />
      </MockWrapper>
    );
    const check = screen.getByTestId("check-icon");
    expect(check).toBeInTheDocument();
  });
});
