import { render, screen } from "@testing-library/react";
import { LandingPage } from ".";
import { MockWrapper } from "../../../tests/mocks";

describe("Templates -> LandingPage", () => {
  it("should render the page properly", () => {
    render(
      <MockWrapper>
        <LandingPage />
      </MockWrapper>
    );
    const title = screen.getByText("Giggle");
    expect(title).toBeInTheDocument();
  });
});
