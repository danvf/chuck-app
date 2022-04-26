import { render, screen } from "@testing-library/react";
import { Loader } from ".";
import { MockWrapper } from "../../../tests/mocks";

describe("Atoms -> Loader", () => {
  it("Must render the Loader component properly", () => {
    render(
      <MockWrapper>
        <Loader />
      </MockWrapper>
    );
    const loader = screen.getByTestId("loader");
    expect(loader).toBeInTheDocument();
  });
});
