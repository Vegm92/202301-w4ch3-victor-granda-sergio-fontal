import { render, screen } from "@testing-library/react";
import Info from "./Info";

describe("Given Info component", () => {
  describe("When it renders with 'message' as class", () => {
    test("Then it should show 'Calling...'", () => {
      const className = "message";
      const message = "Calling...";
      render(<Info className={className} />);

      const text = screen.getByText(message);

      expect(text).toBeInTheDocument();
    });
  });

  describe("When it renders with 'off' as class", () => {
    test("Then it should show 'Hang Up'", () => {
      const className = "off";
      render(<Info className={className} />);

      const text = screen.getByText("Hang Up");

      expect(text).toBeInTheDocument();
    });
  });
});
