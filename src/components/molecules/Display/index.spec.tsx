import { fireEvent, render, screen } from "@testing-library/react";
import { Display } from ".";
import { MockWrapper } from "../../../tests/mocks";

describe("Molecules -> Section", () => {
  const onRefresh = jest.fn();

  it("should render the sentence passed by props", () => {
    render(
      <MockWrapper>
        <Display isLoading={false} onRefresh={onRefresh} joke={"test"} />
      </MockWrapper>
    );
    const sentence = screen.getByText('"test"');
    expect(sentence).toBeInTheDocument();
  });
  it("should render the Loader component when isLoading is set to true", () => {
    render(
      <MockWrapper>
        <Display isLoading={true} onRefresh={onRefresh} joke={"test"} />
      </MockWrapper>
    );
    const loader = screen.getByTestId("loader");
    expect(loader).toBeInTheDocument();
  });
  it("should execute the onRefresh funtion properly", () => {
    render(
      <MockWrapper>
        <Display isLoading={false} onRefresh={onRefresh} joke={"test"} />
      </MockWrapper>
    );
    const refreshBtn = screen.getByTestId("refresh-joke-btn");
    fireEvent.click(refreshBtn);
    expect(onRefresh).toHaveBeenCalled();
  });
});
