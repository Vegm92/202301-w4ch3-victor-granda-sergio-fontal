import { render, screen } from "@testing-library/react";
import Key from "./Key";

describe("Given the Key component", () => {
  describe("When it renders with the text 'delete'", () => {
    test("Then it should show 'delete'", () => {
      render(<Key keyClass="" text="delete" />);

      const buttonKey = screen.getByRole("button", { name: "delete" });

      expect(buttonKey).toBeInTheDocument();
    });
  });
});
