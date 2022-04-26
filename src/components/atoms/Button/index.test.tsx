import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from ".";
import { MockWrapper } from "../../../tests/mocks";

describe("Atoms -> Button", () => {
  const handleClick = jest.fn();

  it("Must render the Button component properly", () => {
    render(
      <MockWrapper>
        <Button id={"test-id"} onClick={() => handleClick()} type={"primary"}>
          Test
        </Button>
      </MockWrapper>
    );
    const button = screen.getByText("Test");
    expect(button).toBeInTheDocument();
  });

  it("The onClick function must be executed when the button is pressed", () => {
    render(
      <MockWrapper>
        <Button id={"test-id"} onClick={() => handleClick()} type={"primary"} />
      </MockWrapper>
    );
    const button = screen.getByTestId("test-id");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });

  it("Shouldn't execute the onClick function when the button is disabled", () => {
    render(
      <MockWrapper>
        <Button
          id={"test-id"}
          onClick={() => handleClick()}
          type={"primary"}
          disabled
        />
      </MockWrapper>
    );
    const button = screen.getByTestId("test-id");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(0);
  });
});
