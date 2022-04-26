import { render, screen } from "@testing-library/react";
import { Display } from ".";

describe("Molecules -> Section", () => {
  it("should render the sentence passed by props", () => {
    render(<Display isLoading={false} onRefresh={() => {}} joke={"test"} />);
    const sentence = screen.getByText("test");
    expect(sentence).toBeInTheDocument();
  });
  it("should execute the onRefresh funtion properly", () => {
    render(<Display isLoading={false} onRefresh={() => {}} joke={"test"} />);
    const sentence = screen.getByText("test");
    expect(sentence).toBeInTheDocument();
  });
});
