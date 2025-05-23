import { render, screen } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  it("renders a heading", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { name: "accuBook Dashboard" })
    ).toBeVisible();
  });
});
