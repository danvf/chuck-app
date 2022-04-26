import { render, screen } from "@testing-library/react";
import { Helper } from ".";

describe("Atoms -> Helper", () => {
  it("Must render the Helper component with the pick status", () => {
    render(<Helper status="pick" category="" />);
    const button = screen.getByTestId("loader");
    expect(button).toBeInTheDocument();
  });
  it("Must render the Helper component with the category status", () => {
    render(<Helper status="category" category="" />);
    const button = screen.getByTestId("loader");
    expect(button).toBeInTheDocument();
  });
  it("Must render the Helper component with the error status", () => {
    render(<Helper status="error" category="" />);
    const button = screen.getByTestId("loader");
    expect(button).toBeInTheDocument();
  });
});
