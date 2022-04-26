import { render, screen } from "@testing-library/react";
import { Section } from ".";
import { MockWrapper } from "../../../tests/mocks";

describe("Molecules -> Section", () => {
  it("should render the title passed as props", () => {
    render(
      <MockWrapper>
        <Section title={"test"} children={undefined} />
      </MockWrapper>
    );
    const title = screen.getByText("test");
    expect(title).toBeInTheDocument();
  });
  it("should render the children content", () => {
    render(
      <MockWrapper>
        <Section title={"test"}> {"content"} </Section>
      </MockWrapper>
    );
    const content = screen.getByText("content");
    expect(content).toBeInTheDocument();
  });
});
