import { fireEvent, render, screen } from "@testing-library/react";
import { createRef } from "react";
import { Home } from ".";
import { darkTheme, defaultTheme } from "../../../styles/themes";
import { MockWrapper } from "../../../tests/mocks";

describe("Templates -> Home", () => {
  it("Must render the Home component properly", () => {
    render(
      <MockWrapper>
        <Home scrollRef={createRef()} />
      </MockWrapper>
    );
    const title = screen.getByText("Giggle");
    expect(title).toBeInTheDocument();
  });

  it("Should switch themes when the theme button is clicked", () => {
    render(
      <MockWrapper>
        <Home scrollRef={createRef()} />
      </MockWrapper>
    );
    const title = screen.getByText("Giggle");

    expect(title).toHaveStyle(`color: ${defaultTheme.colors.special_title}`);

    const themeBtn = screen.getByTestId("theme-btn");
    fireEvent.click(themeBtn);

    expect(title).toHaveStyle(`color: ${darkTheme.colors.special_title}`);
  });
});
