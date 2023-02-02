import { render, screen } from "@testing-library/react";
import Key from "./Key";

describe("Given an Key component", () => {
  describe("When it renders with the text 'delete'", () => {
    test("Then it should show 'delete'", () => {
      render(<Key classNameProp={""} text={"delete"} />);

      const expected = screen.getByRole("button", { name: "delete" });

      expect(expected).toBeInTheDocument();
    });
  });
});
